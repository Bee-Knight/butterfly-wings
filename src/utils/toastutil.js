import Taro from "@tarojs/taro"
import errors from './commonerror'
import validators from './validator'

export default {
  show(res, showTitleOnSuccess) {
    if (validators.isNull(res) || validators.isNull(res.data)) {
      Taro.showToast({
        icon: 'none',
        title: errors.getCommonNetworkErr(),
        showCancel: false
      })
      return
    }
    if (validators.isFalse(res.data.success)) {
      if (!validators.isStrNullOrEmpty(res.data.message)) {
        Taro.showToast({
          icon: 'none',
          title: res.data.message,
          showCancel: false
        })
      } else {
        Taro.showToast({
          title: errors.getCommonNetworkErr(),
          showCancel: false
        })
      }
      return
    }
    if (!validators.isStrNullOrEmpty(showTitleOnSuccess)) {
      Taro.showToast({
        title: showTitleOnSuccess,
        showCancel: false
      })
    }
  }
}
