import Taro from "@tarojs/taro"
import validators from './validator'
import requests from './requtil'
import apis from './api'
import convertors from "./convertor";
import mocks from "./mock"

export default {
  async getDefaultCoverList() {
    let coverinfo = Taro.getStorageSync('coverinfo')
    if (!validators.isNull(coverinfo) && !validators.isArrayNullOrEmpty(coverinfo.coverList)) {
      return coverinfo.coverList
    }

    let res = await requests.get(apis.getFindDefaultFlyCovers(), {})
    if (!validators.isNull(res) && !validators.isNull(res.data) && validators.isTrue(res.data.success)) {
      let result = convertors.getDefaultFlyCoverList(res.data.data)
      if (!validators.isArrayNullOrEmpty(result)) {
        Taro.setStorageSync('coverinfo', {coverList: result})
        return result
      }
    }

    return mocks.getDefaultCoverList()
  }
}
