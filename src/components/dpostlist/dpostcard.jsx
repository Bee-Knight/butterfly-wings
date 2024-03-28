import React from 'react'
import {Image, Text, View} from '@tarojs/components'

import './dpostcard.css'
import {DImageCard} from "./dimagecard";
import Taro from "@tarojs/taro";

class DPostCard extends React.Component {
  handleNavigate = () => {
    Taro.navigateTo({
      url: '/pages/postdetail/postdetail',
    })
  }

  render() {
    const {type, title, url, desc, theme} = this.props

    let card = null
    if (type === 'image') {
      card = <DImageCard theme={theme} url={url}/>
    } else {
      card =
        <View onClick={this.handleNavigate}>
          <View className="d-post-card-cover">
            {/*封面*/}
            <Image src={url} mode="scaleToFill" className="d-post-card-cover-image"/>
            {/*遮罩*/}
            <Image src={url} mode="scaleToFill" className="d-post-card-cover-mask"/>
            {/*主题*/}
            <View className="d-post-card-cover-theme">{theme}</View>
          </View>
          <View className="d-post-card-detail">
            <View style="height: 8px"/>
            {/*标题*/}
            <View className="d-post-card-cover-title">{title}</View>
            <View style="height: 8px"/>
            <View className="d-post-card-detail-desc">
              {/*详情*/}
              <Text className="d-post-card-detail-desc-desc" nodes={desc}>{desc}</Text>
            </View>
            <View style="height: 12px"/>
          </View>
        </View>
    }

    return (
      <View>{card}</View>
    )
  }
}

export {DPostCard}
