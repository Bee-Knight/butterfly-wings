import Taro from "@tarojs/taro"
import validators from './validator'
import requests from './requtil'
import api from './api'
import errors from "./commonerror";
import mocks from "./mock"

export default {
  getUserId() {
    return Taro.getStorageSync('x-userId')
  },

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
      } else {
        Taro.setStorageSync('x-userId', res.data.data.id)
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
      nickname: mocks.getDefaultUserNickname(),
      avatar: mocks.getDefaultUserAvatar()
    })
    if (validators.isNull(tokenRes) || validators.isNull(tokenRes.data) || validators.isFalse(tokenRes.data.success)) {
      await Taro.showToast({
        title: errors.getCommonNetworkErr()
      });
      return
    }
    Taro.setStorageSync('x-token', tokenRes.data.data.token.id)
    Taro.setStorageSync('x-userId', tokenRes.data.data.user.id)
  }
}
