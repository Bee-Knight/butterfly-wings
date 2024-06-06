import dates from './dateutil'
import Taro from '@tarojs/taro'

export default {
  logErr(id, action, data, args) {
    data = !data ? '' : data
    args = !args ? '' : args
    const now = dates.formatTime(new Date())
    try {
      console.error(now, id, action, data, args, Taro.getSystemInfoSync())
    } catch (err) {
      console.error('Taro.getSystemInfoSync not support', err.message)
      console.error(now, id, action, data, args)
    }
  }
}
