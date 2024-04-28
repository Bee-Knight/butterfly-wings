import { Component, PropsWithChildren } from 'react'
import './app.scss'
import 'taro-ui/dist/style/index.scss'
import './utils/requtil'
import requests from './utils/requtil'
import api from './utils/api'
import validators from './utils/validator'
import {getStorageSync, setStorageSync} from "@tarojs/taro-h5"

class App extends Component<PropsWithChildren> {

  async componentDidMount () {
    await this.refreshToken()
  }

  componentDidShow () {}

  componentDidHide () {}

  async refreshToken() {
    // if (process.env.TARO_ENV !== 'weapp') {
    //   return
    // }
    let token = getStorageSync('x-token')
    if (token) {
      console.log('x-token:'+ token)
      await requests.get(api.getUserProfile()).then((res) => {
        if (validators.isNull(res.data) || validators.isFalse(res.data.success)) {
          console.log(res.data)
          token = ''
        }
      })
    }

    if (token) {
      console.log('x-token:'+ token)
    } else {
      await requests.post(api.getRegisterFromWechatAndLogin(), {
        "openId": "testopenid",
        "nickname": "微信用户",
        "avatar": "default-avatar.png"
      }).then((res) => {
        console.log(res.data)
        if (!validators.isNull(res.data) && validators.isTrue(res.data.success)) {
          setStorageSync('x-token', res.data.data.token.id)
        }
      })
    }
  }

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
