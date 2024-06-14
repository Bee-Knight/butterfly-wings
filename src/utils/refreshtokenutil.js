import Taro from "@tarojs/taro"
import validators from './validator'
import requests from './requtil'
import api from './api'
import mocks from "./mock"
import logs from "./logutil";

export default {
  getUserId() {
    return Taro.getStorageSync('x-userId')
  },

  getToken() {
    return Taro.getStorageSync("x-token")
  },

  async checkResultAndRefreshToken(res) {
    if (process.env.TARO_ENV !== 'weapp') {
      return
    }
    // token expired
    if (!validators.isNull(res.data) && validators.isFalse(res.data.success) && res.data.code === 10009) {
      await this.wechatLogin(true)
    }
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
        await this.wechatLogin(true)
      } else {
        Taro.setStorageSync('x-userId', res.data.data.id)
      }
    } else {
      await this.wechatLogin(true)
    }
  },

  async wechatLogin(sendEvent) {
    Taro.setStorageSync('x-token', '')
    const codeRes = await Taro.login()
    if (validators.isNull(codeRes) || validators.isStrNullOrEmpty(codeRes.code)) {
      logs.logErr("ApiErr", 'Taro.login()', loginRes)
      return
    }

    const loginRes = await requests.get(api.getCode2Session(codeRes.code))
    if (validators.isNull(loginRes) || validators.isNull(loginRes.data)) {
      logs.logErr("ApiErr", api.getCode2Session(codeRes.code), loginRes, codeRes)
      // await Taro.showToast({
      //   title: errors.getCommonNetworkErr()
      // });
      return
    } else if (!validators.isNull(loginRes) &&
      !validators.isNull(loginRes.data) &&
      validators.isFalse(loginRes.data.success)) {
      logs.logErr("BizErr", api.getCode2Session(codeRes.code), loginRes, codeRes)
      return
    }

    const registerOrLoginData = {
      openId: loginRes.data.data.openId,
      nickname: mocks.getDefaultRegisterUserNickname(),
      avatar: mocks.getDefaultUserAvatar()
    }
    const tokenRes = await requests.post(api.getRegisterFromWechatAndLogin(), registerOrLoginData)
    if (validators.isNull(tokenRes) || validators.isNull(tokenRes.data)) {
      logs.logErr("ApiErr", api.getRegisterFromWechatAndLogin(), tokenRes, registerOrLoginData)
      // await Taro.showToast({
      //   title: errors.getCommonNetworkErr()
      // });
      return
    } else if (!validators.isNull(tokenRes) &&
      !validators.isNull(tokenRes.data) &&
      validators.isFalse(tokenRes.data.success)) {
      logs.logErr("BizErr", api.getRegisterFromWechatAndLogin(), tokenRes, registerOrLoginData)
      return
    }

    Taro.setStorageSync('x-token', tokenRes.data.data.token.id)
    Taro.setStorageSync('x-userId', tokenRes.data.data.user.id)
    if (validators.isTrue(sendEvent)) {
      Taro.eventCenter.trigger('LOGIN', {})
    }
  }
}
