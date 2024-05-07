import Taro from "@tarojs/taro"
import {getStorageSync} from "@tarojs/taro-h5"

export default {
  getNavInfo() {
    if (process.env.TARO_ENV !== 'weapp') {
      return
    }

    let navinfo = Taro.getStorageSync('navinfo')
    if (navinfo && navinfo.statusBarHeight && navinfo.navBarHeight) {
      return navinfo
    }

    let statusBarHeightOrDefault = 44
    let sysInfo = getStorageSync('sys_info')
    if (sysInfo && sysInfo.statusBarHeight && sysInfo.statusBarHeight > 0) {
      statusBarHeightOrDefault = sysInfo.statusBarHeight
    } else {
      const {statusBarHeight} = Taro.getSystemInfoSync()
      if (statusBarHeight > 0) {
        statusBarHeightOrDefault = statusBarHeight
      }
    }

    // 获取胶囊信息
    const {width, height, left, top, right} = Taro.getMenuButtonBoundingClientRect()
    console.log(Taro.getMenuButtonBoundingClientRect())
    let navBarHeight = top > statusBarHeightOrDefault && height > 0
      ? statusBarHeightOrDefault + (top - statusBarHeightOrDefault) * 2 + height
      : statusBarHeightOrDefault + 44
    let result = {
      statusBarHeight: statusBarHeightOrDefault,
      navBarHeight: navBarHeight
    }
    Taro.setStorageSync('navinfo', result)
    return result
  }
}
