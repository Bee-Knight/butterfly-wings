import {Component, PropsWithChildren} from 'react'
import './app.scss'
import 'taro-ui/dist/style/index.scss'
import './utils/requtil'
import requests from './utils/requtil'
import api from './utils/api'
import validators from './utils/validator'
// import {getStorageSync, setStorageSync} from "@tarojs/taro-h5"
import Taro from '@tarojs/taro'
import navutil from "./utils/navutil";

class App extends Component<PropsWithChildren> {

  async componentDidMount() {
    navutil.getNavInfo()
    await this.refreshToken()
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  async refreshToken() {
    // if (process.env.TARO_ENV !== 'weapp') {
    //   return
    // }
    let token = Taro.getStorageSync('x-token')
    if (token) {
      console.log('check x-token:' + token)
      let result = await requests.get(api.getUserProfile()).then((res) => {
        return res
      })
      if (validators.isNull(result) || validators.isNull(result.data) || validators.isFalse(result.data.success)) {
        token = ''
      }
    }

    if (token) {
      console.log('current x-token:' + token)
    } else {
      let loginresult = await requests.post(api.getRegisterFromWechatAndLogin(), {
        "openId": "testopenid",
        "nickname": "微信用户"
      }).then((res) => {
        return res
      })
      if (!validators.isNull(loginresult) && !validators.isNull(loginresult.data) && validators.isTrue(loginresult.data.success)) {
        Taro.setStorageSync('x-token', loginresult.data.data.token.id)
      }
    }
  }

  render() {
    return this.props.children
  }
}

export default App
