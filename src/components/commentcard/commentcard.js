import React from 'react'
import {Image, View} from '@tarojs/components'

import './commentcard.css'

class CommentCard extends React.Component {

  render() {
    const {id, avatar, nickname, poetry, lastModified, author} = this.props

    console.log(this.props)
    return (
      <View>
        <View className="comment-card-user">
          <Image src={avatar} mode="scaleToFill" className="comment-card-user-avatar"/>
          <View className="comment-card-user-nickname">{nickname}</View>
        </View>

        <View className="comment-card-detail">
          <View className="comment-card-detail-poetry">{poetry}</View>
          {/*<View style="height:3px"/>*/}
          <View className="comment-card-detail-extra">
            <View className="comment-card-detail-extra-date">{lastModified}</View>
            <View className="comment-card-detail-extra-author">{author}</View>
          </View>
        </View>
      </View>
    )
  }
}

export {CommentCard}
