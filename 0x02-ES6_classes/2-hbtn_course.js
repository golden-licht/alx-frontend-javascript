export default class HolbertonCourse {
  constructor(name, length, attributes) {
    this.name = name;
    this.length = length;
    this.attributes = attributes;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  set attributes(newAttributes) {
    if (Array.isArray(newAttributes) && newAttributes.every((item) => typeof item === 'string')) {
      this._attributes = newAttributes;
    } else {
      throw new TypeError('Attributes must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get attributes() {
    return this._attributes;
  }
}
