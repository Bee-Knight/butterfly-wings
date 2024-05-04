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

  isStrNullOrEmpty(str) {
    return str === undefined || str === null || str === ''
  },

  emptyObj() {
    return {}
  },

  emptyArray() {
    return []
  },

  emptyStr() {
    return ''
  }
}
