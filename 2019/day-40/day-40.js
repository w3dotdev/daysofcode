// https://www.freeformatter.com/credit-card-number-generator-validator.html
const cards = {
  visa: { name: 'Visa', regex: /^4(?:[0-9]{11}|[0-9]{14})[0-9]$/, predict: /^4[0-9]*$/, maxLength: 16, maskPattern: '9999 9999 9999 9999' },
  mastercard: { name: 'Mastercard', regex: /^5[1-5][0-9]{14}$/, predict: /^5[1-5][0-9]*$/, maxLength: 16, maskPattern: '9999 9999 9999 9999' },
  amex: { name: 'American Express', regex: /^3[47][0-9]{13}$/, predict: /^3[47][0-9]*$/, maxLength: 15, maskPattern: '9999 999999 99999' },
  diners: { name: 'Diners Club', regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/, predict: /^3(?:0[0-5]|[68][0-9])[0-9]*/, maxLength: 14, maskPattern: '9999 9999 9999 9999' },
};

const rules = {
  CardNumber: /^([0-9]{8,19})$/,
};

class Validator {
  constructor(config) {
    const newConfig = config || {};

    this.cards = newConfig.cards || {};
    this.rules = newConfig.rules || {};

    this.errorMessage = newConfig.errorMessage || 'Inválido';

    this.cardNumber = newConfig.cardNumber || document.querySelector('[data-js="formNumber"]');
    // this.formName = newConfig.formName || document.querySelector('[data-js="formName"]');
    // this.formMonth = newConfig.formMonth || document.querySelector('[data-js="formMonth"]');
    // this.formYear = newConfig.formYear || document.querySelector('[data-js="formYear"]');
    // this.formCCV = newConfig.formCCV || document.querySelector('[data-js="formCCV"]');

    this.flag = newConfig.flag || document.querySelectorAll('[data-js="flagPreview"]');
    this.numberPreview = newConfig.numberPreview || document.querySelector('[data-js="numberPreview"]');
    // this.namePreview = newConfig.namePreview || document.querySelector('[data-js="namePreview"]');
    // this.expirationPreview = newConfig.expirationPreview || document.querySelector('[data-js="expirationPreview"]');
    // this.securityCodePreview = newConfig.securityCodePreview || document.querySelector('[data-js="securityCodePreview"]');

    this.validate();
  }

  getMask(str, pattern) {
    const items = [...pattern];
    const noSpaces = [...str.replace(/\s/g, '')];
    const masked = [];

    items.forEach((value, i) => {
      if (noSpaces.length === 0) return;
      if (value !== ' ') { masked.push(noSpaces.shift()); }
      if (value === ' ') { masked.push(' '); }
    });

    return masked.join('');
  };

  getFlag(element) {
    let flag = '';
    const cardNumber = this.removeSpaces(element.value);

    if (!cardNumber) return false;

    for (let card in this.cards) {
      if (this.cards.hasOwnProperty(card)) {
        if (this.cards[card].predict.test(cardNumber)) {
          element.setAttribute('mask', this.cards[card].maskPattern);

          const maxLength = this.cards[card].maskPattern.length;
          this.setMaxlength(element, maxLength);

          flag = card;
          break;
        }
      }
    }
    return flag;
  }

  setFlagClass(card) {
    this.flag.forEach(item => {
      item.className = 'card-flag';
      card ? item.classList.add(card) : item.classList.add('unkown');
    });
  };

  validateNumber(cardNumber) {
    const cNumber = this.removeSpaces(cardNumber);

    if (!this.rules.CardNumber.test(cNumber)) {
      return false;
    }

    for (let card in this.cards) {
      if (this.cards[card].regex.test(cNumber)) {
        return this.validateLuhn(cNumber) ? card : false;
      }
    }
  }

  // http://www.datagenetics.com/blog/july42013/index.html
  validateLuhn(number) {
    const digits = number.split('').reverse();
    const oddDigits = [];
    const evenDigits = [];

    digits.forEach((digit, index) => {
      if ((index + 1) % 2 !== 0) {
        oddDigits.push(digit);
      } else {
        evenDigits.push(digit);
      }
    });

    const solution1 = oddDigits.reduce((sum, value) => parseInt(sum) + parseInt(value));
    const solution2 = evenDigits.map(digit => {
      const multiplication = digit * 2;
      if (multiplication > 9) {
        const separatedDigits = multiplication.toString().split('');
        return ( parseInt(separatedDigits[0]) + parseInt(separatedDigits[1]) );
      }
      return multiplication;
    }).reduce((sum, value) => parseInt(sum) + parseInt(value));

    const result = (solution1 + solution2).toString();

    if (result.charAt(result.length - 1) === '0') {
      return true;
    }
  }

  validCardClass(element, valid) {
    if (!element) return;
    if (valid) {
      element.classList.remove('error');
      element.classList.add('valid');
    } else {
      element.classList.add('error');
      element.classList.remove('valid');
    }
  }

  removeSpaces(str) {
    return str.replace(/\s/g, '').trim();
  }

  setMaxlength(element, length) {
    element.setAttribute('maxlength', length);
  }

  validate() {
    if (this.cardNumber && this.flag) {
      this.cardNumber.addEventListener('input', (evt) => {
        evt.target.classList.remove('error');

        const mask = evt.target.getAttribute('mask');
        if (mask) {
          evt.target.value = this.getMask(evt.target.value, mask);
        }

        // preview
        this.numberPreview.innerHTML = evt.target.value;

        const card = this.getFlag(evt.target);
        this.setFlagClass(card);

        if (evt.target.value.length === 0) debugger;

        this.validateNumber(evt.target.value) && evt.target.value.length > 0 ? this.validCardClass(this.cardNumber, true) : this.validCardClass(this.cardNumber, false);
      });
    }
  };
}

new Validator({ cards, rules });

// https://www.4devs.com.br/gerador_de_numero_cartao_credito
//
// mastercard 5140494381575369
// visa 4929576464410439
// amex 377390083435438
// diners 36552009688241
