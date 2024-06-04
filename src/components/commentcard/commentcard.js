import React from 'react'
import {Image, View} from '@tarojs/components'

import './commentcard.css'
import {ModeCard} from "../modecard/modecard";
import validators from "../../utils/validator"
import refreshtokenutil from "../../utils/refreshtokenutil";

class CommentCard extends React.Component {

  render() {
    const {id, userId, avatar, nickname, poetry, lastModified, author} = this.props
    let modeCardView = ''
    let loginUserId = refreshtokenutil.getUserId()
    if (!validators.isStrNullOrEmpty(loginUserId) && !validators.isStrNullOrEmpty(userId) && loginUserId === userId) {
      modeCardView = <ModeCard mode={"您"}/>
    }

    return (
      <View>
        <View className="comment-card-user">
          {/*头像*/}
          <Image src={avatar} mode="scaleToFill" className="comment-card-user-avatar"/>
          {/*昵称*/}
          <View className="comment-card-user-nickname">{nickname}</View>
          {modeCardView}
        </View>

        <View className="comment-card-detail">
          {/*回复内容*/}
          <View className="comment-card-detail-poetry">{poetry}</View>
          {/*额外信息*/}
          <View className="comment-card-detail-extra">
            <View className="comment-card-detail-extra-date">{lastModified}</View>
            <View className="comment-card-detail-extra-author">
              <View className="comment-card-detail-extra-author-text">{author}</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export {CommentCard}
