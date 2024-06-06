import Taro from "@tarojs/taro"
import {getStorageSync} from "@tarojs/taro-h5"

export default {
  getNavInfo() {
    if (process.env.TARO_ENV !== 'weapp') {
      return null
    }

    let navinfo = Taro.getStorageSync('navinfo')
    if (navinfo && navinfo.statusBarHeight && navinfo.navBarHeight) {
      return navinfo
    }

    let statusBarHeightOrDefault = 20
    let sysInfo = getStorageSync('sys_info')
    if (sysInfo && sysInfo.statusBarHeight && sysInfo.statusBarHeight > 0) {
      statusBarHeightOrDefault = sysInfo.statusBarHeight
    } else {
      const {statusBarHeight} = Taro.getSystemInfoSync()
      if (statusBarHeight && statusBarHeight > 0) {
        statusBarHeightOrDefault = statusBarHeight
      }
    }

    // 获取胶囊信息
    const menuButtonBoundingClientRect = Taro.getMenuButtonBoundingClientRect()
    const {width, height, left, top, right} = menuButtonBoundingClientRect
    console.log(menuButtonBoundingClientRect)
    let navBarHeight = top > statusBarHeightOrDefault && height > 0
      ? statusBarHeightOrDefault + (top - statusBarHeightOrDefault) * 3 + height
      : statusBarHeightOrDefault + 44
    let result = {
      statusBarHeight: statusBarHeightOrDefault,
      navBarHeight: navBarHeight,
      menuButtonInfo: menuButtonBoundingClientRect
    }
    Taro.setStorageSync('navinfo', result)
    return result
  }
}
