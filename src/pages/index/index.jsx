import React from 'react'
import {Image, View} from '@tarojs/components'
import {PostList} from '../../components/postlist/postlist'
import mocks from '../../utils/mock'
import RecCard from "../../components/reccard/reccard";
// import requests from '../../utils/requtil'
// import api from '../../utils/api'
import './index.css'
import Taro from "@tarojs/taro";

class Index extends React.Component {
  config = {
    navigationBarTitleText: '首页',
  }

  state = {
    loading: true,
    posts: [],
    rec: {}
  }


  async componentDidMount() {
    // await requests.get(api.getPostList(), {}).then((res) => {
    //   console.log(res)
    // })

    this.setState({
      // posts: res.data,
      posts: mocks.getMockPosts(),
      rec: mocks.getMockRecCard(),
      loading: false,
    })
  }

  onCreatePost() {
    Taro.navigateTo({
      url: '/pages/createpost/createpost',
    })
  }

  render() {
    const {loading, posts, rec} = this.state
    return (
      <View>
        {/*图片*/}
        <View>
          <Image src={rec.url} mode="scaleToFill" className="index-background-image-mask"/>
        </View>

        {/*遮罩*/}
        <View className="index-background-view"/>

        {/*主要信息*/}
        <View className="index-view">
          <View style="height:12px"/>
          {/*每日推荐*/}
          <View className="index-rec-card">
            <RecCard/>
          </View>
          {/*我参与的*/}
          <View className="index-post-list">
            <View style="height:24px"/>
            <PostList posts={posts} loading={loading}/>
          </View>
          {/*悬浮button*/}
          {/*<View className="index-fab" onClick={this.onCreatePost}>*/}
          {/*  <Text className="index-fab-text">+</Text>*/}
          {/*</View>*/}
        </View>
      </View>
    )
  }
}

export default Index
