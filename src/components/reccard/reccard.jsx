import {Image, View} from '@tarojs/components'
import React from "react"
import mocks from '../../utils/mock'

import './reccard.css'

class RecCard extends React.Component {

  static defaultProps = mocks.getMockRecCard()

  render() {
    const {title, url, date} = this.props
    return (
      <View>
        <View className="rec-card-title">
          {/*每日推荐标题*/}
          <View className="rec-card-title-desc">{title}</View>
          {/*每日推荐时间*/}
          <View className="rec-card-title-date">{date}</View>
        </View>
        <View style="height:8px"/>
        <View className="rec-card-cover">
          {/*图片遮罩*/}
          <View className="rec-card-cover-mask">
            <Image src={url} mode="scaleToFill" className="rec-card-cover-mask-image"/>
          </View>
          {/*图片*/}
          <View className="rec-card-cover-image">
            <Image src={url} mode="scaleToFill" className="rec-card-cover-image-image"/>
            <View className="rec-card-cover-image-theme1">灯</View>
            <View className="rec-card-cover-image-theme2">火</View>
          </View>
        </View>
      </View>
    )
  }
}

export default RecCard
