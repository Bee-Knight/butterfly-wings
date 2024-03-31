import React from 'react'
import {Image, View} from '@tarojs/components'
import {AtTag} from 'taro-ui'

import './detailcard.css'

class DetailCard extends React.Component {

  render() {
    const {id, cover, title, repliesCount, mode, desc, playersCount} = this.props

    let repliesTag = null
    if (repliesCount) {
      repliesTag = <AtTag size='small'>{repliesCount}</AtTag>
    } else {
      repliesTag = ''
    }

    let modeTag = null
    if (playersCount) {
      modeTag = <AtTag size='small'>{mode}</AtTag>
    } else {
      modeTag = ''
    }

    return (
      <View>
        <View className="detail-card-cover">
          {/*封面*/}
          <Image src={cover} mode="scaleToFill" className="detail-card-cover-image"/>
        </View>

        <View style="height: 12px"/>

        {/*标题、评论数*/}
        <View className="detail-card-title">
          <View className="detail-card-title-title">{title}</View>
          <View className="detail-card-title-tag">{repliesCount}条</View>
        </View>

        <View style="height: 11px"/>

        {/*详情*/}
        <View className="detail-card-desc">{desc}</View>

        <View style="height: 13px"/>

        {/*模式、参与人数*/}
        <View className="detail-card-extra">
          <View className="detail-card-extra-mode">{mode}</View>
          <View className="detail-card-extra-players">
            <View className="detail-card-extra-players-players">{playersCount}人参与</View>
          </View>
        </View>
      </View>
    )
  }
}

export {DetailCard}
