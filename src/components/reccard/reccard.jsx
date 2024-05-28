import {Image, View} from '@tarojs/components'
import React from "react"
import validators from '../../utils/validator'

import './reccard.css'
import Taro from "@tarojs/taro";

class RecCard extends React.Component {

  // static defaultProps = mocks.getMockRecCard()

  static defaultProps = {
    title: '',
    url: '',
    date: ''
  }

  handleNavigate = () => {
    if (!validators.isStrNullOrEmpty(this.props.id)) {
      Taro.navigateTo({
        url: '/pages/postdetail/postdetail?id='+this.props.id,
      })
    }
  }

  render() {
    const {id, title, theme, url, date} = this.props

    let themeView1 = <View/>
    let themeView2 = <View/>
    if (!validators.isStrNullOrEmpty(theme)) {
      if (theme.length >= 1) {
        themeView1 = <View className="rec-card-cover-image-theme1">{theme[0]}</View>
      }
      if (theme.length >= 2) {
        themeView2 = <View className="rec-card-cover-image-theme2">{theme[1]}</View>
      }
    }

    return (
      <View onClick={this.handleNavigate}>
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
            {themeView1}
            {themeView2}
            {/*<View className="rec-card-cover-image-theme1">灯</View>*/}
            {/*<View className="rec-card-cover-image-theme2">火</View>*/}
          </View>
        </View>
      </View>
    )
  }
}

export default RecCard
