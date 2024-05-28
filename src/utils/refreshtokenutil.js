import Taro from "@tarojs/taro"
import validators from './validator'
import requests from './requtil'
import api from './api'
import errors from "./commonerror";

export default {
  async check() {
    if (process.env.TARO_ENV !== 'weapp') {
      return
    }
    let token = Taro.getStorageSync('x-token')
    if (token) {
      console.log('check x-token:' + token)
      const res = await requests.get(api.getUserProfile())
      if (validators.isNull(res) || validators.isNull(res.data) || validators.isFalse(res.data.success)) {
        await this.login()
      }
    } else {
      await this.login()
    }
  },

  async login() {
    Taro.setStorageSync('x-token', '')
    const codeRes = await Taro.login()
    const loginRes = await requests.get(api.getCode2Session(codeRes.code))
    if (validators.isNull(loginRes) || validators.isNull(loginRes.data) || validators.isFalse(loginRes.data.success)) {
      await Taro.showToast({
        title: errors.getCommonNetworkErr()
      });
      return
    }
    const tokenRes = await requests.post(api.getRegisterFromWechatAndLogin(), {
      openId: loginRes.data.data.openId,
      "nickname": "微信用户",
      "avatar": "default-avatar.png"
    })
    if (validators.isNull(tokenRes) || validators.isNull(tokenRes.data) || validators.isFalse(tokenRes.data.success)) {
      await Taro.showToast({
        title: errors.getCommonNetworkErr()
      });
      return
    }
    Taro.setStorageSync('x-token', tokenRes.data.data.token.id)
  }
}
