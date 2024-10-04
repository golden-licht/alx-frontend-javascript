export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(newSize) {
    if (typeof newSize === 'number') {
      this._size = newSize;
    } else {
      throw new TypeError('Size should be a number');
    }
  }

  set location(newLocation) {
    if (typeof newLocation === 'string') {
      this._location = newLocation;
    } else {
      throw new TypeError('Location should be a string');
    }
  }

  get location() {
    return this._location;
  }

  get size() {
    return this._size;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
