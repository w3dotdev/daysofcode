// Jasmine - Behavior-Driven JavaScript
// https://jasmine.github.io/
const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should be defined', () => {
    expect(calculator).toBeDefined();
    expect(calculator).not.toBeUndefined();
    expect(calculator).toBeTruthy();
    expect(calculator).not.toBeFalsy();
  });

  it('should return false', () => {
    expect(calculator.add()).toBeFalsy();
    expect(calculator.add(1)).toBeFalsy();
    expect(calculator.add('text')).toBeFalsy();
    expect(calculator.add('text', 1)).toBeFalsy();

    expect(calculator.sub()).toBeFalsy();
    expect(calculator.sub(1)).toBeFalsy();
    expect(calculator.sub('text')).toBeFalsy();
    expect(calculator.sub('text', 1)).toBeFalsy();

    expect(calculator.mult()).toBeFalsy();
    expect(calculator.mult(1)).toBeFalsy();
    expect(calculator.mult('text')).toBeFalsy();
    expect(calculator.mult('text', 1)).toBeFalsy();

    expect(calculator.div()).toBeFalsy();
    expect(calculator.div(1)).toBeFalsy();
    expect(calculator.div('text')).toBeFalsy();
    expect(calculator.div('text', 1)).toBeFalsy();
  });

  it('adds 1 and 1', () => {
    expect(calculator.add(1, 1)).toEqual(2);
  });

  it('subtracts 3 from 5', () => {
    expect(calculator.sub(5, 3)).toEqual(2);
  });

  it('subtracts 10 from 5', () => {
    expect(calculator.sub(5, 10)).toEqual(-5);
  });

  it('multiplies 12 and 5', () => {
    expect(calculator.mult(12, 5)).toEqual(60);
  });

  it('multiplies 5 and 0', () => {
    expect(calculator.mult(5, 0)).toEqual(0);
  });

  it('divides 25 by 5', () => {
    expect(calculator.div(25, 5)).toEqual(5);
  });

  it('does not divide by 0', () => {
    expect(calculator.div(25, 0)).toEqual(NaN);
  });
});
