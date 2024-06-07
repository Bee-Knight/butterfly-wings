import React from 'react'
import {View} from '@tarojs/components'
import {DPostCard} from './dpostcard'
import {Loading} from '../loading/loading'

import './dpostlist.css'

class DPostList extends React.Component {
  static defaultProps = {
    posts: [],
    loading: false,
  }

  render() {
    const {loading, posts} = this.props

    if (loading) {
      return <Loading/>
    }

    const element = posts.map((post, index) => {
      if (index === posts.length - 1 && posts.length % 2 === 0) {
        return (
          <View key={post.id} className="d-post-list-card">
            <DPostCard
              type={post.type}
              title={post.title}
              url={post.cover}
              desc={post.desc}
              theme={post.theme}
              lastModified={post.lastModified}
              mode={post.mode}
              playersCount={post.playersCount}
              key={post.id}
              id={post.id}
            />
          </View>
        )
      } else {
        return (
          <View key={post.id} className="d-post-list-card">
            <DPostCard
              type={post.type}
              title={post.title}
              url={post.cover}
              desc={post.desc}
              theme={post.theme}
              lastModified={post.lastModified}
              mode={post.mode}
              playersCount={post.playersCount}
              key={post.id}
              id={post.id}
            />
            <View style="height:12px"/>
          </View>
        )
      }
    })

    return (
      <View className="d-post-list">
        {element}
      </View>
    )
  }
}

export {DPostList}
