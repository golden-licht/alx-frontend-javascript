import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    } else {
      throw new TypeError('Amount should be a number');
    }
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new TypeError('Currency should be a currency object');
    }
  }

  get amount() {
    return this.amount;
  }

  get currency() {
    return this.currency;
  }

  displayFullPrice() {
    return `${this._amount} ${(this._currency).displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
