import { Component, PropsWithChildren } from 'react'
import './app.scss'
import 'taro-ui/dist/style/index.scss'
import './utils/requtil'
// import requests from './utils/requtil';
// import api from './utils/api'
import {getStorageSync, getSystemInfoSync, setStorageSync} from "@tarojs/taro-h5";

class App extends Component<PropsWithChildren> {

  componentDidMount () {
    // let token = getStorageSync('x-token');
    // if (token) {
    //   console.log('x-token:'+ token)
    //   requests.get(api.getUserProfile()).then((res) => {
    //     console.log(res)
    //     if (!(res && res.success)) {
    //       token = ''
    //     }
    //   })
    // }
    //
    // if (token) {
    //   console.log('x-token:'+ token)
    // } else {
    //   requests.post(api.getLogin(), {
    //     "channelId": "testopenid",
    //     "channel": "Wechat"
    //   }).then((res) => {
    //     console.log(res)
    //     if (res && res.data && res.data.token && res.data.token.id) {
    //       setStorageSync('x-token', res.data.token.id)
    //     }
    //   })
    // }
  }

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
