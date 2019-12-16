class ShopDOM extends ShopHelpers {
  constructor(props) {
    super(props);

    this.$element = $(props);

    this.$formAddToCart = this.$element.find('[data-js="addToCart"]');
    // cart
    this.$formCart = this.$element.find('[data-js="shoppingCartForm"]');
    this.$shoppingCartActions = this.$element.find('[data-js="shoppingCartActions"]');
    this.$updateCartBtn = this.$shoppingCartActions.find('[data-js="updateCart"]');
    this.$emptyCartBtn = this.$shoppingCartActions.find('[data-js="emptyCart"]');
    this.$subTotal = this.$element.find('[data-js="stotal"]');
    // checkout
    this.$checkoutCart = this.$element.find('[data-js="checkoutCart"]');
    this.$shipping = this.$element.find('[data-js="sshipping"]');
    this.$checkoutOrderForm = this.$element.find('[data-js="checkoutOrderForm"]');
    // order
    this.$userDetails = this.$element.find('[data-js="details"]');
    this.$pagseguroForm = this.$element.find('[data-js="pagseguroForm"]');
  }

  _validateForm(form) {
    const fields = this.requiredFields;
    const $visibleSet = form.find("fieldset:visible");

    let valid = true;

    form.find('.message').remove();

    $visibleSet.each((idx, el) => {
      $(el).find(':input').each((i, input) => {
        const $input = $(input);
        const type = $input.data("type");
        const msg = $input.data("message");

        if(type === "string") {
          if($input.val() == fields.str.value) {
            $("<span class='message'/>").text(msg).insertBefore($input);
            valid = false;
          }
        } else {
          if(!fields.expression.value.test($input.val())) {
            $("<span class='message'/>").text(msg).insertBefore($input);
            valid = false;
          }
        }
      });
    });

    return valid;
  }

  _saveFormData(form) {
    const $visibleSet = form.find('fieldset:visible');

    $visibleSet.each((i, el) => {
      const $set = $(el);

      if($set.is('[data-js="fieldsetBilling"]')) {
        const name = $('[data-js="name"]', $set).val();
        const email = $('[data-js="email"]', $set).val();
        const city = $('[data-js="city"]', $set).val();
        const address = $('[data-js="address"]', $set).val();
        const zip = $('[data-js="zip"]', $set).val();
        const country = $('[data-js="country"]', $set).val();

        this.storage.setItem("billing-name", name);
        this.storage.setItem("billing-email", email);
        this.storage.setItem("billing-city", city);
        this.storage.setItem("billing-address", address);
        this.storage.setItem("billing-zip", zip);
        this.storage.setItem("billing-country", country);
      } else {
        const sName = $('[data-js="sname"]', $set).val();
        const sEmail = $('[data-js="semail"]', $set).val();
        const sCity = $('[data-js="scity"]', $set).val();
        const sAddress = $('[data-js="saddress"]', $set).val();
        const sZip = $('[data-js="szip"]', $set).val();
        const sCountry = $('[data-js="scountry"]', $set).val();

        this.storage.setItem("shipping-name", sName);
        this.storage.setItem("shipping-email", sEmail);
        this.storage.setItem("shipping-city", sCity);
        this.storage.setItem("shipping-address", sAddress);
        this.storage.setItem("shipping-zip", sZip);
        this.storage.setItem("shipping-country", sCountry);
      }
    });
  }

  displayUserDetails() {
    if (this.$userDetails.length) {
      const name = this.storage.getItem('billing-name');
      const email = this.storage.getItem('billing-email');
      const city = this.storage.getItem('billing-city');
      const address = this.storage.getItem('billing-address');
      const zip = this.storage.getItem('billing-zip');
      const country = this.storage.getItem('billing-country');

      if( this.storage.getItem('shipping-name') == null ) {
        const html = `
          <div class='detail'>
            <h2>Cobrança e entrega</h2>
            <ul>
              <li>${name}</li>
              <li>${email}</li>
              <li>${city}</li>
              <li>${address}</li>
              <li>${zip}</li>
              <li>${country}</li>
            </ul>
          </div>
        `;

        this.$userDetails[0].innerHTML = html;
      } else {
        const sName = this.storage.getItem("shipping-name");
        const sEmail = this.storage.getItem("shipping-email");
        const sCity = this.storage.getItem("shipping-city");
        const sAddress = this.storage.getItem("shipping-address");
        const sZip = this.storage.getItem("shipping-zip");
        const sCountry = this.storage.getItem("shipping-country");

        const html = `
          <div class='detail'>
            <h2>Cobrança</h2>
            <ul>
              <li>${name}</li>
              <li>${email}</li>
              <li>${city}</li>
              <li>${address}</li>
              <li>${zip}</li>
              <li>${country}</li>
            </ul>
          </div>
          <div class='detail right'>
            <h2>Entrega</h2>
            <ul>
              <li>${sName}</li>
              <li>${sEmail}</li>
              <li>${sCity}</li>
              <li>${sAddress}</li>
              <li>${sZip}</li>
              <li>${sCountry}</li>
            </ul>
          </div>
        `;

        this.$userDetails[0].innerHTML = html;
      }
    }
  }

  populatePagSeguroForm() {
    if(this.$pagseguroForm.length) {
      const $form = this.$pagseguroForm;
      const cart = this._toJSONObject(this.storage.getItem(this.cartName));
      const shipping = this.storage.getItem(this.shippingRates);
      const numShipping = this._convertString(shipping);
      const cartItems = cart.items;
      const singShipping = Math.floor(numShipping / cartItems.length);

      $form.attr("action", this.pagseguroURL);

      for (let i = 0; i < cartItems.length; ++i) {
        const cartItem = cartItems[i];
        const n = i + 1;
        const name = cartItem.product;
        const price = cartItem.price;
        const qty = cartItem.qty;

        $("<div/>").html(`<input type='hidden' name='quantity_${n}' value='${qty}'/>`).insertBefore('[data-js="pagseguroBtn"]');
        $("<div/>").html(`<input type='hidden' name='itemName_${n}' value='${name}'/>`).insertBefore('[data-js="pagseguroBtn"]');
        $("<div/>").html(`<input type='hidden' name='itemNumber_${n}' value='SKU ${name}'/>`).insertBefore('[data-js="pagseguroBtn"]');
        $("<div/>").html(`<input type='hidden' name='amount_${n}' value='${this._formatNumber(price, 2)}'/>`).insertBefore('[data-js="pagseguroBtn"]');
        $("<div/>").html(`<input type='hidden' name='shipping_${n}' value='${this._formatNumber(singShipping, 2)}'/>`).insertBefore('[data-js="pagseguroBtn"]');
      }
    }
  }
}
