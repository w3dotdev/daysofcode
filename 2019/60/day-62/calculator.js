class Calculator {
  operation(n1, n2, op) {
    const areDefined = typeof n1 !== 'undefined' && typeof n2 !== 'undefined';
    const areNumbers = typeof n1 === 'number' && typeof n2 === 'number';

    if (areDefined && areNumbers) {
      switch(op) {
        case '+':
          return n1 + n2;
        case '-':
          return n1 - n2;
        case '*':
          return n1 * n2;
        case '/':
          if(n2 === 0) {
            return NaN;
          }

          return n1 / n2;
      }
    }

    return false;
  }

  add(num1, num2) {
    return this.operation(num1, num2, '+');
  }

  sub(num1, num2) {
    return this.operation(num1, num2, '-');
  }

  mult(num1, num2) {
    return this.operation(num1, num2, '*');
  }

  div(num1, num2) {
    return this.operation(num1, num2, '/');
  }
};

module.exports = Calculator;
