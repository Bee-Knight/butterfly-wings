import validators from './validator'
import {weAtob, weBtoa} from './weapp-jwt.js'

export default {
  weEncode(str) {
    if (validators.isStrNullOrEmpty(str)) {
      return ''
    }
    return weBtoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode(Number('0x' + p1))
      }))
  },
  weDecode(str) {
    if (validators.isStrNullOrEmpty(str)) {
      return ''
    }
    return decodeURIComponent(weAtob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  },
  encode(str) {
    if (validators.isStrNullOrEmpty(str)) {
      return ''
    }
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        return String.fromCharCode(Number('0x' + p1))
      }))
  },
  decode(str) {
    if (validators.isStrNullOrEmpty(str)) {
      return ''
    }
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
  }
}
