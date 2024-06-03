import React from 'react'
import {Image, View} from '@tarojs/components'
import {AtTag} from 'taro-ui'
import validators from '../../utils/validator'

import './detailcard.css'
import {ImageStack} from "../imagestack/imagestack";

class DetailCard extends React.Component {

  render() {
    const {id, cover, title, repliesCount, mode, desc, playersCount, playerAvatars} = this.props

    let repliesTag = ''
    if (repliesCount) {
      repliesTag = <AtTag size='small'>{repliesCount}</AtTag>
    }

    let modeTag = ''
    if (playersCount) {
      modeTag = <AtTag size='small'>{mode}</AtTag>
    }

    let commentCountView = ''
    if (repliesCount > 0) {
      commentCountView = <View className="detail-card-title-tag">{repliesCount}条</View>
    }

    let modeView = ''
    if (!validators.isStrNullOrEmpty(mode)) {
      modeView = <View className="detail-card-extra-mode">{mode}</View>
    }

    let playersView = ''
    if (playersCount > 0) {
      playersView =
        <View className="detail-card-extra-players">
          <View className="detail-card-extra-players-players">{playersCount}人参与</View>
          <View className="detail-card-extra-players-avatar">
            <ImageStack images={playerAvatars}/>
          </View>
        </View>
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
          {commentCountView}
        </View>

        <View style="height: 11px"/>

        {/*详情*/}
        <View className="detail-card-desc">{desc}</View>

        <View style="height: 13px"/>

        {/*模式、参与人数*/}
        <View className="detail-card-extra">
          {modeView}
          {playersView}
        </View>
      </View>
    )
  }
}

export {DetailCard}
