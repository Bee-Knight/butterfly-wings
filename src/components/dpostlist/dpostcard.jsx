import React from 'react'
import {Image, View} from '@tarojs/components'

import './dpostcard.css'
import {DImageCard} from "./dimagecard"
import Taro from "@tarojs/taro"

class DPostCard extends React.Component {
  handleNavigate = () => {
    Taro.navigateTo({
      url: '/pages/postdetail/postdetail?id=' + this.props.id,
    })
  }

  render() {
    const {type, title, url, desc, theme, lastModified, mode} = this.props

    let card = null
    if (type === 'image') {
      card = <DImageCard theme={theme} url={url}/>
    } else {
      card =
        <View className="d-post-card-view" onClick={this.handleNavigate}>
          {/*主题*/}
          <View className="d-post-card-cover-theme">{theme}</View>

          <View className="d-post-card-cover-view">
            {/*封面*/}
            <Image src={url} mode="scaleToFill" className="d-post-card-cover-image"/>
            {/*遮罩*/}
            <View className="d-post-card-cover-mask"/>
          </View>

          <View className="d-post-card-detail">
            {/*标题*/}
            <View className="d-post-card-detail-title">{title}</View>
            <View style="height:8px"/>
            {/*描述*/}
            <View className="d-post-card-detail-desc">{desc}</View>
            <View style="height:8px"/>
            {/*额外信息*/}
            <View className="d-post-card-detail-extra">
              <View className="d-post-card-detail-extra-date">{lastModified}</View>
              <View className="d-post-card-detail-extra-mode">{mode}</View>
            </View>
          </View>
        </View>
    }

    return (
      <View>{card}</View>
    )
  }
}

export {DPostCard}
