// import axios from 'axios'
import logs from './logutil'
import Taro from "@tarojs/taro"
import validators from './validator'

/**
 * request.js 封装一个Taro请求
 * url        请求地址
 * options    包含请求方式method，请求参数的配置对象data
 */
const request = function (url, options) {
  let token = Taro.getStorageSync("x-token")
  let headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  if (token) {
    headers['X-Token'] = token
  }
  return Taro.request({
    url: url,
    method: options.method,
    data: options.data,
    header: headers,
    success: (res) => {
      const {data} = res
      if (validators.isNull(data)) {
        logs.logErr("APIErr", url, res, options)
      } else if (!validators.isNull(data) && validators.isFalse(data.success)) {
        logs.logErr("BizErr", url, res.data, options)
      }
    },
    fail: (err) => {
      logs.logErr("APIErr", url, err, options)
    },
    error: (err) => {
      logs.logErr("APIErr", url, err, options)
    }
  })
}

/**
 * request.js 封装一个Pominse风格的同样请求
 * url        请求地址
 * options    包含请求方式method，请求参数的配置对象data
 */
// const request = function (url, options) {
//   let token = Taro.getStorageSync("x-token")
//   let headers = {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   }
//   if (token) {
//     headers['X-Token'] = token
//   }
//   return new Promise((resolve, reject) => {
//     axios({
//       url: url,
//       method: options.method,
//       data: options.data,
//       headers: headers
//     }).then(res => {
//       if (res.data) {
//         resolve(res.data)
//       } else {
//         reject(res)
//       }
//     })
//       .catch(error => {
//         reject(error)
//       })
//   })
// }

export default {
  get(url, data) {
    return request(url, {
      method: "GET",
      data
    })
  },
  post(url, data) {
    return request(url, {
      method: "POST",
      data
    })
  }
}
