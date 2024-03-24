// import axios from 'axios';
import {getStorageSync} from "@tarojs/taro-h5";
import logs from './logutil'
import Taro from "@tarojs/taro";
import errors from './commonerror';

/**
 * request.js 封装一个Taro请求
 * url        请求地址
 * options    包含请求方式method，请求参数的配置对象data
 */
const request = function (url, options) {
  let token = getStorageSync("x-token")
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
    mode: 'no-cors',
    success: (res) => {
      if (res.data?.success !== true) {
        logs.logErr("BizErr", url, res.data)
      }
      if (res.data?.success === true) {
        return res.data
      }
    },
    fail: (err) => {
      Taro.showToast({
        title: errors.getCommonNetworkErr(),
        showCancel: false
      })
      return logs.logErr("APIErr", url, err)
    },
    error: (err) => {
      Taro.showToast({
        title: errors.getCommonNetworkErr(),
        showCancel: false
      })
      return logs.logErr("APIErr", url, err)
    }
  });
}

/**
 * request.js 封装一个Pominse风格的同样请求
 * url        请求地址
 * options    包含请求方式method，请求参数的配置对象data
 */
// const request = function (url, options) {
//   let token = getStorageSync("x-token")
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
//         resolve(res.data);
//       } else {
//         reject(res);
//       }
//     })
//       .catch(error => {
//         reject(error);
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
