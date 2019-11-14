class Calculator {
  constructor() {
    this.step1 = 0;
    this.step2 = 0;
    this.isStep1 = true;
    this.isStep2 = false;
    this.operator = null;
    this.answer = 0;
    this.step1First = true;
    this.step2First = true;
    this.isSubmission = false;
    this.softSub = false;

    this.$display = document.querySelector('[data-js="display"]');
    this.$equal = document.querySelector('[data-js="equal"]');

    this.$clear = document.querySelector('[data-js="clear"]');
    this.$back = document.querySelector('[data-js="backspace"]');
    this.$plusMinus = document.querySelector('[data-js="plusMinus"]');

    this.$results = document.querySelector('[data-js="results"]');

    this.handlers();
  }

  addOperator(x) {
    return x === '*' ? '×' : x === '/' ? '÷' : x;
  }

  changeDisplay(num) {
    this.$display.textContent = this.$display.textContent + num;
  }

  setDisplay(x) {
    this.$display.textContent = this.addOperator(x);
  }

  setStep1(num) {
    if ( this.isStep1 ) {
      if ( num === '.' && this.step1.toString().indexOf('.') !== -1 ) {
        num = '';
      } else if ( num === '.' && this.step1First ) {
        num = '0.';
      }

      if ( this.step1First === true ) {
        if ( num === '0' ) {
          num = '';
        } else {
          this.setDisplay(num);
          this.step1First = false;
        }
      } else {
        this.changeDisplay(num);
      }

      this.step1 = this.$display.textContent;

      console.log(`step1 = ${this.step1}`);
    }
  }

  setStep2(num) {
    if ( !this.isStep1 ) {
      if ( num === '.' && this.step2.toString().indexOf('.') !== -1 ) {
        num = '';
      } else if ( num === '.' && this.step2First ) {
        num = '0.';
      }

      if ( this.step2First === true ) {
        if ( num === '0' ) {
          num = '';
        } else {
          this.setDisplay(num);
          this.step2First = false;
        }
      } else {
        this.changeDisplay(num);
      }

      this.step2 = this.$display.textContent;

      console.log(`step2 = ${this.step2}`);
    }
  }

  setOperator(op) {
    if ( this.isSubmission ) {
      this.step1 = this.$display.textContent;
      this.step2 = 0;
      this.answer = 0;
      this.isSubmission = false;
      this.setDisplay(step1);
    }

    if ( !this.step2First ) {
      this.handleSoftSubmit();
    }

    this.setDisplay(op);
    this.operator = op;

    if ( this.isStep1 ) { this.isStep1 = false; }
    if ( !this.isStep2 ) { this.isStep2 = true; }

    console.log(`operator = ${this.operator}`);
  }

  getOperation(operatorString, a, b) {
    switch(operatorString) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
    }
  }

  handleSoftSubmit() {
    const preCalc = this.getOperation(this.operator, this.step1, this.step2);
    this.answer = parseFloat(preCalc.toPrecision(12));

    this.$display.textContent = this.answer;

    this.step2First = true;

    this.newResult(this.step1, this.operator, this.step2, this.answer);

    console.log(this.step1 + ' ' + this.operator + ' ' + this.step2 + ' = ' + this.answer);

    this.step1 = this.answer;
    this.step2 = 0;
    this.operator = this.operator;

    this.setDisplay(this.operator);
    this.isStep1 = false;
    this.isStep2 = true;

    this.step2First = true;

    this.softSub = true;
  }

  handleSubmit() {
    if ( this.step2First === false ) {
      const preCalc = this.getOperation(this.operator, this.step1, this.step2);

      this.answer = parseFloat(preCalc.toPrecision(12));

      this.$display.textContent = this.answer;
      this.isSubmission = true;
      this.step2First = true;

      this.newResult(this.step1, this.operator, this.step2, this.answer);

      console.log(this.step1 + ' ' + this.operator + ' ' + this.step2 + ' = ' + this.answer);
    }
  }

  handlePlusMinus() {
    this.$display.textContent = this.$display.textContent * -1;
    if ( this.isSubmission ) {
      this.step1 = this.step1 * -1;
    } else {
      if ( this.isStep1 ) {
        this.step1 = this.step1 * -1;
        this.setDisplay(this.step1);
      } else {
        this.step2 = this.step2 * -1;
        this.setDisplay(this.step2);
      }
    }
  }

  handleReset() {
    this.step1 = 0;
    this.step2 = 0;
    this.operator = null;
    this.answer = 0;
    this.isStep1 = true;
    this.isStep2 = false;
    this.step1First = true;
    this.step2First = true;
    this.isSubmission = false;
    this.softSub = false;
    this.$display.textContent = 0;

    this.setDisplay(0);
  }

  handleBackspace() {
    if ( this.$display.textContent !== '' && this.$display.textContent !== '0' ) {
      this.$display.textContent = this.$display.textContent.substring(0, this.$display.textContent.length - 1);
      if ( this.isStep1 === true ) {
        this.step1 = parseFloat(this.step1.toString().substring(0, this.step1.toString().length - 1 ));
      } else {
        this.step2 = parseFloat(this.step2.toString().substring(0, this.step2.toString().length - 1 ));
      }
    }
  }

  newResult(step1, operator, step2, answer) {
    const result =  document.createElement("li");
    result.className = 'item';
    result.innerHTML = `
      <span class="equation">${step1} ${this.addOperator(operator)} ${step2}</span>
      <span class="answer">${answer}</span>
    `;
    this.$results.insertBefore(result, this.$results.firstChild);
  }

  handlers() {
    this.$equal.addEventListener('click', () => {
      this.handleSubmit();
    });

    this.$clear.addEventListener('click', () => {
      this.handleReset();
    });

    this.$plusMinus.addEventListener('click', () => {
      this.handlePlusMinus();
    });

    this.$back.addEventListener('click', () => {
      this.handleBackspace();
    });

    const loop = (selector, fn) => {
      const elements = document.querySelectorAll(selector);
      for (let i = 0; i < elements.length; i++) {
        fn(elements[i], i);
      }
    }

    loop('[data-js="int"], [data-js="decimal"]', element => {
      element.addEventListener('click', event => {
        const value = event.target.value;
        if ( this.isSubmission === false ) {
          if ( this.isStep1 === true ) {
            this.setStep1(value);
          } else {
            this.setStep2(value);
          }
        } else {
          this.handleReset();
          this.setStep1(value);
        }
      });
    });

    loop('[data-js="operator"]', element => {
      element.addEventListener('click', event => {
        const value = event.target.value;
        this.setOperator(value);
      });
    });
  }
}


new Calculator();
