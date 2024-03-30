import React from 'react'
import {View} from '@tarojs/components'
import {CommentCard} from './commentcard'
import {Loading} from '../loading/loading'

import './commentlist.css'

class CommentList extends React.Component {
  static defaultProps = {
    comments: [],
    loading: false,
  }

  render() {
    const {loading, comments} = this.props

    if (loading) {
      return <Loading/>
    }

    const element = comments.map((comment, index) => {
      if (index === comments.length - 1) {
        return (
          <View>
            <CommentCard
              key={comment.id}
              avatar={comment.avatar}
              nickname={comment.nickname}
              poetry={comment.poetry}
              lastModified={comment.lastModified}
              author={comment.author}
            />
          </View>
        )
      } else {
        return (
          <View>
            <CommentCard
              key={comment.id}
              avatar={comment.avatar}
              nickname={comment.nickname}
              poetry={comment.poetry}
              lastModified={comment.lastModified}
              author={comment.author}
            />
            <View style="height: 20px"/>
          </View>
        )
      }
    })

    return (
      <View>{element}</View>
    )
  }
}

export {CommentList}
