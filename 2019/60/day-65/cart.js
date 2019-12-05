class Cart {
  constructor(price, promoCode) {
    this.hardCodedPromoCode = 'Hello';
    this.price = price;
    this.totalPrice = price;
    this.promoCode = promoCode;

    this.checkout();
  }

  applyPromoValue(promoValue) {
    this.totalPrice = this.price - promoValue;
    this.render();
  }

  getPromoValue() {
    const url = 'http://www.mocky.io/v2/5de8a8523100005d006b12db';

    return fetch(url)
      .then(response => response.json())
      .then(json => json.value)
      .catch(() => 0);
  }

  validatePromoCode() {
    let promoValue = 0;
    const promoCode = this.promoCode;

    if (promoCode === this.hardCodedPromoCode) {
      promoValue = this.getPromoValue(2);
      this.applyPromoValue(promoValue);
    } else {
      this.applyPromoValue(promoValue);
    }
  }

  checkout() {
    this.validatePromoCode();
  }

  render() {
    const $view = document.querySelector('[data-js="total"]');
    $view.innerHTML = this.totalPrice.toFixed(2);
  }
}

export default Cart;
