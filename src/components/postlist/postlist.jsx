import React from 'react'
import {View} from '@tarojs/components'
import {PostCard} from './postcard'
import {Loading} from '../loading/loading'

import './postlist.css'

class PostList extends React.Component {
  static defaultProps = {
    posts: [],
    loading: true,
  }

  render() {
    const {loading, posts} = this.props

    if (loading) {
      return <Loading/>
    }

    const element = posts.map((post, index) => {
      if (index === posts.length - 1) {
        return (
          <View key={post.id}>
            <PostCard
              key={post.id}
              cover={post.cover}
              title={post.title}
              lastModified={post.lastModified}
              repliesCount={post.repliesCount}
              mode={post.mode}
              desc={post.desc}
              author={post.author}
              poetry={post.poetry}
            />
          </View>
        )
      } else {
        return (
          <View key={post.id}>
            <PostCard
              key={post.id}
              cover={post.cover}
              title={post.title}
              lastModified={post.lastModified}
              repliesCount={post.repliesCount}
              mode={post.mode}
              desc={post.desc}
              author={post.author}
              poetry={post.poetry}
            />
            <View style="height: 12px"/>
          </View>
        )
      }
    })

    return (
      <View>{element}</View>
    )
  }
}

export {PostList}
