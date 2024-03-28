import React from 'react'
import {Text, View} from '@tarojs/components'
import './ground.css'
import mocks from "../../utils/mock";
import Taro from "@tarojs/taro";
import {DPostList} from "../../components/dpostlist/dpostlist";

import './ground.css'

class Ground extends React.Component {
  config = {
    navigationBarTitleText: '发现',
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
      posts: mocks.getMockDPostList(),
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
      <View className="ground-background-view">
        <View className="ground-view">
          <View style="height:20px"/>
          <View className="ground-nav-title">
            {/*创建*/}
            <View className="ground-nav-title-create">+</View>
            {/*筛选器*/}
            <View className="ground-nav-title-selector">+</View>
          </View>
          <View style="height:8px"/>
          <View style="height:20px"/>
          {/*帖子列表*/}
          <View className="ground-d-post-list">
            {/*<DPostList posts={posts} loading={loading}/>*/}
          </View>
        </View>
      </View>
    )
  }
}

export default Ground
