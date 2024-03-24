import dates from './dateutil'
import Taro from '@tarojs/taro'

export default {
  logErr(name, action, info) {
    if (!info) {
      info = ''
    }
    try {
      let deviceInfo = Taro.getSystemInfoSync()
      let device = JSON.stringify(deviceInfo)
      let time = dates.formatTime(new Date())
      console.error(time, name, action, info, device)
    } catch (err) {
      console.error('not support getSystemInfoSync api', err.message)
    }
  }
}
