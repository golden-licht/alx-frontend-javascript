export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    if (new.target !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(newSqft) {
    if (typeof newSqft === 'number') {
      this._sqft = newSqft;
    } else {
      throw new TypeError('Sqft should be a number');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
