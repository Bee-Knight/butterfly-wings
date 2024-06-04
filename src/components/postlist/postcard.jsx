import Taro from '@tarojs/taro'
import React from 'react'
import {Image, Text, View} from '@tarojs/components'

import './postcard.css'
import {ModeCard} from "../modecard/modecard";

class PostCard extends React.Component {
  handleNavigate = () => {
    Taro.navigateTo({
      url: '/pages/postdetail/postdetail?id=' + this.props.id,
    })
  }

  render() {
    const {id, cover, title, lastModified, repliesCount, mode, desc, author, poetry} = this.props
    let modeView = <View/>
    if (mode === '私有') {
      modeView =
        <View className="card-cover-title-mode-view">
          <ModeCard mode={"私"}/>
        </View>
    }
    return (
      <View onClick={this.handleNavigate}>
        {/*遮罩*/}
        <View className="card-cover-mask-view">
          <View className="card-cover-mask"/>
        </View>
        <View className="card-cover">
          {/*封面*/}
          <Image src={cover} mode="scaleToFill" className="card-cover-image"/>
          {/*mode & 标题*/}
          <View className="card-cover-title-view">
            {/*mode*/}
            {modeView}
            {/*标题*/}
            <View className="card-cover-title">{title}</View>
          </View>
        </View>
        <View className="card-detail">
          {/*<View className="tag"><Text className="title">{title}</Text>{tag}</View>*/}
          {/*<View className="desc"><Text>{desc}</Text></View>*/}
          <View style="height: 8px"/>
          <View className="card-detail-poetry">
            {/*诗句*/}
            <Text className="card-detail-poetry-poetry" nodes={poetry}>{poetry}</Text>
          </View>
          <View style="height: 12px"/>
          <View className="card-detail-author">
            {/*回复时间*/}
            <View className="card-detail-author-time">
              {lastModified}
            </View>
            {/*作者*/}
            <View className="card-detail-author-author">
              <View className="card-detail-author-author-text">{author}</View>
            </View>
          </View>
          <View style="height: 12px"/>
        </View>
      </View>
    )
  }
}

export {PostCard}
