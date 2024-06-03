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
import refreshtokenutil from "./utils/refreshtokenutil";
import mocks from "./utils/mock"

class App extends Component<PropsWithChildren> {

  async componentWillMount() {
  }

  async componentDidMount() {
    navutil.getNavInfo()
    await this.refreshToken()
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  async refreshToken() {
    if (process.env.TARO_ENV !== 'weapp') {
      const loginresult = await requests.post(api.getRegisterFromWechatAndLogin(), {
        openId: "guest",
        nickname: mocks.getDefaultUserNickname(),
        avatar: mocks.getDefaultUserAvatar()
      })
      if (!validators.isNull(loginresult) && !validators.isNull(loginresult.data) && validators.isTrue(loginresult.data.success)) {
        Taro.setStorageSync('x-token', loginresult.data.data.token.id)
      }
      return
    }

    await refreshtokenutil.check()
    Taro.eventCenter.trigger('LOGIN', {})
  }

  render() {
    return this.props.children
  }
}

export default App
