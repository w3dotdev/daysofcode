class ShopHelpers {
  constructor() {
    this.storage = window.sessionStorage;
  }

  _emptyCart() {
    this.storage.clear();
  }

  _formatNumber(num, places) {
    return num.toFixed(places);
  }

  _extractPrice(element) {
    const text = element.text();
    const price = text.replace( this.currencyString, "").replace(" ", "");

    return price;
  }

  _convertString(numStr) {
    let num;

    if( /^[-+]?[0-9]+\.[0-9]+$/.test( numStr ) ) {
      num = parseFloat( numStr );
    } else if( /^\d+$/.test( numStr ) ) {
      num = parseInt( numStr, 10 );
    } else {
      num = Number( numStr );
    }

    return !isNaN(num) ? num : false;
  }

  _convertNumber(n) {
    return n.toString();
  }

  _toJSONObject(str) {
    return JSON.parse(str);
  }

  _toJSONString(obj) {
    return JSON.stringify(obj);
  }

  _addToCart(values) {
    const cart = this.storage.getItem(this.cartName);
    const cartObject = this._toJSONObject(cart);
    const cartCopy = cartObject;
    const items = cartCopy.items;

    items.push(values);

    this.storage.setItem(this.cartName, this._toJSONString(cartCopy));
  }

  _calculateShipping(qty) {
    let shipping = 0;

    if( qty >= 6 ) {
      shipping = 10;
    }
    if( qty >= 12 && qty <= 30 ) {
      shipping = 20;
    }

    if( qty >= 30 && qty <= 60 ) {
      shipping = 30;
    }

    if( qty > 60 ) {
      shipping = 0;
    }

    return shipping;
  }
}
