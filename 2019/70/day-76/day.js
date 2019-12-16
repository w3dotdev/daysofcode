// jQuery is a fast, small, and feature-rich JavaScript library.
// It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.
// https://jquery.com/

class Shop extends ShopDOM {
  constructor(props) {
    super(props);
		this.init();
  }

  init() {
    this.cartPrefix = "nerd-";
    this.cartName = this.cartPrefix + "cart";
    this.shippingRates = this.cartPrefix + "shippingRates";
    this.total = this.cartPrefix + "total";

    this.currency = "&#82;&#36;";
    this.currencyString = "R$";
    this.pagseguroCurrency = "BRL";
    // https://dev.pagseguro.uol.com.br/
    this.pagseguroEmail = "hemerson.lourenco@gmail.com";
    this.pagseguroToken = '4248B835BCD34A7FA9494D1C2555BB34';
    this.pagseguroURL = `https://ws.sandbox.pagseguro.uol.com.br/v2/transactions?email=${this.pagseguroEmail}&token=${this.pagseguroToken}`;

    this.requiredFields = {
      expression: { value: /^([\w-\.]+)@((?:[\w]+\.)+)([a-z]){2,4}$/ },
      str: { value: "" }
    };

    this.createCart();
    this.handleAddToCart();
    this.handleCheckoutOrder();
    this.emptyCart();
    this.updateCart();
    this.displayCart();
    this.deleteProduct();

    this.displayUserDetails();
    this.populatePagSeguroForm();
  }

  createCart() {
    if(this.storage.getItem(this.cartName) == null) {
      const cart = { items: [] };

      this.storage.setItem(this.cartName, this._toJSONString(cart));
      this.storage.setItem(this.shippingRates, '0');
      this.storage.setItem(this.total, '0');
    }
  }

  handleAddToCart() {
    this.$formAddToCart.each((i, el) => {
      const $form = $(el);
      const $product = $form.parent();
      const price = this._convertString($product.data('price'));
      const name = $product.data('name');

      $form.on('submit', () => {
        const qty = this._convertString($form.find('[data-js="qty"]').val());
        const subTotal = qty * price;
        const total = this._convertString(this.storage.getItem(this.total));
        const sTotal = total + subTotal;

        this.storage.setItem(this.total, sTotal);
        this._addToCart({
          product: name,
          price: price,
          qty: qty
        });

        const shipping = this._convertString(this.storage.getItem(this.shippingRates));
        const shippingRates = this._calculateShipping(qty);
        const totalShipping = shipping + shippingRates;

        this.storage.setItem(this.shippingRates, totalShipping);
      });
    });
  }

  handleCheckoutOrder() {
    if(this.$checkoutOrderForm.length) {
      const $sameAsBilling = $('[data-js="sameAsBilling"]');

      $sameAsBilling.on('change', evt => {
        const $check = $(evt.target);

        if( $check.prop( "checked" ) ) {
          $('[data-js="fieldsetShipping"]').slideUp( "normal" );
        } else {
          $('[data-js="fieldsetShipping"]').slideDown( "normal" );
        }
      });

      this.$checkoutOrderForm.on('submit', evt => {
        const $form = $(evt.target);
        const valid = this._validateForm($form);

        return !valid ? valid : this._saveFormData($form);
      });
    }
  }

  emptyCart() {
    if(this.$emptyCartBtn.length) {
      this.$emptyCartBtn.on('click', () => {
        this._emptyCart();
      });
    }
  }

  updateCart() {
    if(this.$updateCartBtn.length) {
      this.$updateCartBtn.on('click', () => {
        const $rows = this.$formCart.find('tbody tr');
        // var cart = this.storage.getItem(this.cartName);
        // var shippingRates = this.storage.getItem(this.shippingRates);
        // var total = this.storage.getItem(this.total);
        const updatedCart = { items: [] };

        let updatedTotal = 0;
        let totalQty = 0;

        $rows.each((i, el) => {
          const $row = $(el);
          const pname = $.trim($row.find('.pname').text());
          const pqty = this._convertString($row.find('.pqty > .qty').val());
          const pprice = this._convertString(this._extractPrice( $row.find('.pprice')));

          const cartObj = {
            product: pname,
            price: pprice,
            qty: pqty
          };

          updatedCart.items.push(cartObj);

          const subTotal = pqty * pprice;
          updatedTotal += subTotal;
          totalQty += pqty;
        });

        this.storage.setItem(this.total, this._convertNumber( updatedTotal));
        this.storage.setItem(this.shippingRates, this._convertNumber(this._calculateShipping(totalQty)));
        this.storage.setItem(this.cartName, this._toJSONString(updatedCart));
      });
    }
  }

  displayCart() {
    if (this.$formCart.length) {
      const cart = this._toJSONObject(this.storage.getItem(this.cartName));
      const items = cart.items;
      const $tableCart = this.$formCart.find('[data-js="shoppingCart"]');
      const $tableCartBody = $tableCart.find('tbody');

      if (items.length === 0) {
        $tableCartBody.html('');
      } else {
        for (let i = 0; i < items.length; ++i) {
          const item = items[i];
          const product = item.product;
          const price = this.currency + " " + item.price;
          const qty = item.qty;
          const html = `
            <tr>
              <td class='pname'>${product}</td>
              <td class='pqty'><input type='text' value='${qty}' class='qty'/></td>
              <td class='pprice'>${price}</td>
              <td class='pdelete'><a href='' data-product='${product}'>&times;</a></td>
            </tr>
          `;

          console.log($tableCart.find("tbody"));

          $tableCartBody.html(`${$tableCartBody.html()} ${html}`);
        }
      }

      if (items.length == 0) {
        this.$subTotal[0].innerHTML = this.currency + " " + 0.00;
      } else {
        const total = this.storage.getItem(this.total);
        this.$subTotal[0].innerHTML = this.currency + " " + total;
      }
    } else if (this.$checkoutCart.length) {
      const checkoutCart = this._toJSONObject(this.storage.getItem(this.cartName));
      const cartItems = checkoutCart.items;
      const $cartBody = this.$checkoutCart.find('tbody');

      if (cartItems.length > 0) {
        for (let j = 0; j < cartItems.length; ++j) {
          const cartItem = cartItems[j];
          const cartProduct = cartItem.product;
          const cartPrice = this.currency + " " + cartItem.price;
          const cartQty = cartItem.qty;
          const cartHTML = `
            <tr>
              <td class='pname'>${cartProduct}</td>
              <td class='pqty'>${cartQty}</td>
              <td class='pprice'>${cartPrice}</td>
            </tr>
          `;

          $cartBody.html(`${$cartBody.html()} ${cartHTML}`);
        }
      } else {
        $cartBody.html('');
      }

      if(cartItems.length > 0) {
        const cartTotal = this.storage.getItem(this.total);
        const cartShipping = this.storage.getItem(this.shippingRates);
        const subTot = this._convertString(cartTotal) + this._convertString(cartShipping);

        this.$subTotal[0].innerHTML = this.currency + " " + this._convertNumber(subTot);
        this.$shipping[0].innerHTML = this.currency + " " + cartShipping;
      } else {
        this.$subTotal[0].innerHTML = this.currency + " " + 0.00;
        this.$shipping[0].innerHTML = this.currency + " " + 0.00;
      }

    }
  }

  deleteProduct() {
    if (this.$formCart.length) {
      const cart = this._toJSONObject(this.storage.getItem( this.cartName));
      const items = cart.items;

      $(document).on('click', '.pdelete a', evt => {
        evt.preventDefault();
        const productName = $(evt.target).data('product');
        let newItems = [];

        for (let i = 0; i < items.length; ++i) {
          const item = items[i];
          const product = item.product;

          if (product == productName) {
            items.splice(i, 1);
          }
        }

        newItems = items;
        const updatedCart = { items: newItems };

        let updatedTotal = 0;
        let totalQty = 0;

        if (newItems.length == 0) {
          updatedTotal = 0;
          totalQty = 0;
        } else {
          for (let j = 0; j < newItems.length; ++j) {
            const prod = newItems[j];
            const sub = prod.price * prod.qty;

            updatedTotal += sub;
            totalQty += prod.qty;
          }
        }

        this.storage.setItem(this.total, this._convertNumber( updatedTotal));
        this.storage.setItem(this.shippingRates, this._convertNumber(this._calculateShipping(totalQty)));

        this.storage.setItem(this.cartName, this._toJSONString(updatedCart));
        $(evt.target).parents('tr').remove();
        this.$subTotal[0].innerHTML = this.currency + " " + this.storage.getItem(this.total);
      });
    }
  }
}

$(() => {
  new Shop('[data-js="shop"]');
});
