import Cart from './cart';

const jsonOk = body => {
  const mockResponse = new window.Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-type': 'application/json'
    }
  });

  return Promise.resolve(mockResponse);
}

describe('Cart', () => {
  let sandbox;

  before(() => {
    const fixture = `
      <form>
        <input type="text" name="promoCode" data-js="promoCode">
        <input type="hidden" name="price" data-js="price" value="10.00">
        <button type="submit">Ok</button>
      </form>
      <p>Price: <strong>10.00</strong></p>
      <p>Total: <strong>$<span data-js="total">10.00</span></strong></p>
    `;

    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture
    );
  });

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('Checkout', () => {
    let cart;

    context('when promo code applicable', () => {
      beforeEach(() => {
        const price = 30.00;
        const promoCode = 'Hello';

        cart = new Cart(price, promoCode);

        sandbox.stub(cart, 'checkout');
        sandbox.stub(window, 'fetch');

        window.fetch.returns(jsonOk({
          value: 30
        }));
      });

      afterEach(() => {
        window.fetch.restore();
      });

      it('price exists', () => {
        expect(cart.price).to.be.equal(30);
      });

      it('promo code exists', () => {
        expect(cart.promoCode).to.be.equal('Hello');
      });

      it('get promo code value', async () => {
        await cart.getPromoValue()
          .then(value => expect(value).to.be.equal(30));
      });

      it('validate promo code', () => {
        const applyPromoValueStub = sandbox.stub(cart, 'applyPromoValue');

        cart.validatePromoCode();

        expect(applyPromoValueStub.called).to.be.ok;
      });

      it('Apply promo code to price', () => {
        sandbox.stub(cart, 'render');

        const applyPromoValueSpy = sandbox.spy(cart, 'applyPromoValue');
        const promoValue = 20;

        cart.applyPromoValue(promoValue);

        expect(applyPromoValueSpy.calledWith(20)).to.be.ok;
        expect(cart.totalPrice).to.be.equal(10);
      });

      it('render formatted price in the view', () => {
        const promoValue = 20;
        cart.applyPromoValue(promoValue);
        const elTextContent = document.querySelector('[data-js="total"]').textContent;

        expect(elTextContent).to.be.equal('10.00');
      });
    });
  });
});
