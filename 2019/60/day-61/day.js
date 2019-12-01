// Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.
// Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
// https://mochajs.org/api/

const { suite, test } = require('mocha'); // https://mochajs.org/
const assert = require('assert'); // https://nodejs.org/api/assert.html
const thousandsFormatter = require('./numbers');

/** @test {} */
suite('TDD - Phase 1 - tests should fail', () => {
  test('should only allow type number', () => {
    const num = 2;
    const str = '-2';
    let empty;

    assert.ok(typeof num === 'number');
    assert.equal(typeof str === 'number', false);
    assert.equal(typeof empty === 'number', false);
  });

  test('should allow positive and negative numbers', () => {
    const positive = 2;
    const negative = -3;

    assert.ok(typeof positive === 'number');
    assert.ok(typeof negative === 'number');
  });

  test('should shorten the return of the big numbers', () => {
    const thousand = 1000;
    const million  = 1000000;
    const billion  = 1000000000;

    assert.ok(500 < thousand, 'not changed');
    assert.ok(5000 > thousand, 'received the letter K');
    assert.ok(5000000 > million, 'received the letter M');
    assert.ok(5000000000 > billion, 'received the letter G');
  });
});

/** @test {} */
describe('BDD', () => {
  context('when parameters are not valid', () => {
    it('should return false', () => {
      assert.equal(thousandsFormatter(), false);
      assert.equal(thousandsFormatter('10'), false);
      assert.equal(thousandsFormatter('text'), false);
    });
  });

  context('when parameters are valid', () => {
    it('should return with type number or string', () => {
      assert.equal(thousandsFormatter(10), 10);
      assert.equal(thousandsFormatter(-10), '-10');
      assert.equal(thousandsFormatter(5000000), '5M');
    });

    it('should shorten the return of the big numbers', () => {
      assert.equal(thousandsFormatter(500), 500);
      assert.equal(thousandsFormatter(5000), '5K');
      assert.equal(thousandsFormatter(5000000), '5M');
      assert.equal(thousandsFormatter(5000000000), '5G');
    });
  });
});
