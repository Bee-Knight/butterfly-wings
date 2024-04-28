import React from 'react'
import {View} from '@tarojs/components'
import {DPostCard} from './dpostcard'
import {Loading} from '../loading/loading'

import './dpostlist.css'

class DPostList extends React.Component {
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
          <View key={post.id} className="d-post-list-card">
            <DPostCard
              type={post.type}
              title={post.title}
              url={post.url}
              desc={post.desc}
              theme={post.theme}
              lastModified={post.lastModified}
              mode={post.mode}
              key={post.id}
            />
          </View>
        )
      } else {
        return (
          <View key={post.id} className="d-post-list-card">
            <DPostCard
              type={post.type}
              title={post.title}
              url={post.url}
              desc={post.desc}
              theme={post.theme}
              lastModified={post.lastModified}
              mode={post.mode}
              key={post.id}
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
