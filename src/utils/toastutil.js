import Taro from "@tarojs/taro"
import errors from './commonerror'
import validators from './validator'

export default {
  show(res, showTitleOnSuccess) {
    if (validators.isNull(res) || validators.isNull(res.data)) {
      return Taro.showToast({
        icon: 'none',
        title: errors.getCommonNetworkErr(),
        showCancel: false
      })
    }
    if (validators.isFalse(res.data.success)) {
      if (!validators.isStrNullOrEmpty(res.data.message)) {
        return Taro.showToast({
          icon: 'none',
          title: res.data.message,
          showCancel: false
        })
      } else {
        return Taro.showToast({
          title: errors.getCommonNetworkErr(),
          showCancel: false
        })
      }
    }
    if (!validators.isStrNullOrEmpty(showTitleOnSuccess)) {
      return Taro.showToast({
        title: showTitleOnSuccess,
        showCancel: false
      })
    }
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
}
