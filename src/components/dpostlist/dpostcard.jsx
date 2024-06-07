import React from 'react'
import {Image, View} from '@tarojs/components'

import './dpostcard.css'
import {DImageCard} from "./dimagecard"
import Taro from "@tarojs/taro"
import {ModeCard} from "../modecard/modecard";

class DPostCard extends React.Component {
  handleNavigate = () => {
    Taro.navigateTo({
      url: '/pages/postdetail/postdetail?id=' + this.props.id,
    })
  }

  render() {
    const {type, title, url, desc, theme, lastModified, mode, playersCount} = this.props

    let card = null
    if (type === 'image') {
      card = <DImageCard theme={theme} url={url}/>
    } else {
      let modeView = <View/>
      if (mode === '私有') {
        modeView =
          <View className="d-post-card-detail-mode">
            <ModeCard mode={"私"}/>
          </View>
      }
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
            <View className="d-post-card-detail-title-view">
              {modeView}
              <View className="d-post-card-detail-title">{title}</View>
            </View>
            <View style="height:8px"/>
            {/*描述*/}
            <View className="d-post-card-detail-desc">{desc}</View>
            <View style="height:8px"/>
            {/*额外信息*/}
            <View className="d-post-card-detail-extra">
              <View className="d-post-card-detail-extra-date">{lastModified}</View>
              {/*<View className="d-post-card-detail-extra-mode">{mode}</View>*/}
              <View className="d-post-card-detail-extra-mode">{playersCount}人参与</View>
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
