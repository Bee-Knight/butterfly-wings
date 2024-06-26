module.exports = {
  isNull(data) {
    return data === undefined || data === null
  },

  isTrue(data) {
    return !this.isNull(data) && data === true
  },

  isFalse(data) {
    return !this.isTrue(data)
  },

  first(arr) {
    if (this.isArrayNullOrEmpty(arr)) {
      return null
    }
    return arr[0]
  },

  last(arr) {
    if (this.isArrayNullOrEmpty(arr)) {
      return null
    }
    return arr[arr.length - 1]
  },

  isArrayNullOrEmpty(arr) {
    return arr === undefined || arr === null || this.isNumberNullOrEmpty(arr.length)
  },

  isNumberNullOrEmpty(num) {
    return num === undefined || num === null || num === 0
  },

  isNumberGtZero(num) {
    return !this.isNumberNullOrEmpty(num) && num > 0
  },

  isStrNullOrEmpty(str) {
    return str === undefined || str === null || str === ''
  },

  strLength(str) {
    return this.isStrNullOrEmpty(str) ? 0 : str.length
  },

  arrLength(arr) {
    return this.isArrayNullOrEmpty(arr) ? 0 : arr.length
  },

  emptyObj() {
    return {}
  },

  emptyArray() {
    return []
  },

  emptyStr() {
    return ''
  },

  containsNewLineChar(str) {
    if (this.isStrNullOrEmpty(str)) {
      return false;
    }
    return /\n|\r\n|\r/.test(str)
  }
}
