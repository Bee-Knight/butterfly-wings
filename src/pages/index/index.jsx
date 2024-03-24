import React from 'react'
import {Text, View} from '@tarojs/components'
import {PostList} from '../../components/postlist/postlist'
import mocks from '../../utils/mock'
import RecCard from "../../components/reccard/reccard";
import requests from '../../utils/requtil'
import api from '../../utils/api'

import './index.css'
import Taro from "@tarojs/taro";

class Index extends React.Component {
  config = {
    navigationBarTitleText: '首页',
  }

  state = {
    loading: true,
    posts: []
  }


  async componentDidMount() {
    // await requests.get(api.getPostList(), {}).then((res) => {
    //   console.log(res)
    // })

    this.setState({
      // posts: res.data,
      posts: mocks.getMockPosts(),
      loading: false,
    })
  }

  onCreatePost() {
    Taro.navigateTo({
      url: '/pages/createpost/createpost',
    })
  }

  render() {
    const {loading, posts} = this.state
    return (
      <View className="index-view">
        <View style="height:12px"/>
        {/*每日推荐*/}
        <View className="index-rec-card">
          <RecCard/>
        </View>
        <View style="height:24px"/>
        {/*我参与的*/}
        <View className="index-post-list">
          <PostList posts={posts} loading={loading}/>
        </View>
        {/*悬浮button*/}
        <View className="index-fab" onClick={this.onCreatePost}>
          {/*<AtFab className="atfab">*/}
          <Text className="index-fab-text">+</Text>
          {/*</AtFab>*/}
        </View>
      </View>
    )
  }
}

export default Index
