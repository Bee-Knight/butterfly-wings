import React from 'react'
import {Image, View} from '@tarojs/components'
import {PostList} from '../../components/postlist/postlist'
import RecCard from "../../components/reccard/reccard"
import requests from '../../utils/requtil'
import api from '../../utils/api'
import convertors from '../../utils/convertor'
import './index.css'
import Taro from "@tarojs/taro"
import validators from "../../utils/validator";
import navutil from "../../utils/navutil";

class Index extends React.Component {
  config = {
    navigationBarTitleText: '首页',
  }

  state = {
    loading: false,
    posts: [],
    rec: {},
    statusBarHeight: 0,
    navBarHeight: 0
  }

  async load() {
    await requests.get(api.getFindTodayFly(), {}).then((res) => {
      if (!validators.isNull(res.data) && validators.isTrue(res.data.success)) {
        let result = convertors.getRecCard(res.data.data)
        if (!validators.isNull(result)) {
          this.setState({
            rec: result
          })
        }
      }
    })
    await requests.get(api.getPostList(), {}).then((res) => {
      if (!validators.isNull(res.data) && validators.isTrue(res.data.success)) {
        let result = convertors.getPostList(res.data.data)
        console.log(result)
        if (!validators.isArrayNullOrEmpty(result)) {
          this.setState({
            posts: result
          })
        }
      }
    })
  }

  async componentDidShow() {
    await this.load()
  }

  async componentDidMount() {
    if (process.env.TARO_ENV === 'weapp') {
      let navinfo = navutil.getNavInfo()
      if (navinfo) {
        this.setState({
          statusBarHeight: navinfo.statusBarHeight,
          navBarHeight: navinfo.navBarHeight
        })
      }
    }
  }

  onCreatePost() {
    Taro.navigateTo({
      url: '/pages/createpost/createpost',
    })
  }

  render() {
    const {loading, posts, rec} = this.state

    {/*导航栏*/
    }
    let nav = <View/>
    if (process.env.TARO_ENV === 'weapp') {
      nav = <View className="index-nav-title" style={`height: ${this.state.navBarHeight}px`}>
        <View style={`height: ${this.state.statusBarHeight}px`}/>
        {/*<View style="height: 44px"/>*/}
        <View className="index-nav-title-title">诗辞大会</View>
      </View>
    }

    let postView = <View style="height:20px"/>
    if (!validators.isArrayNullOrEmpty(posts)) {
      postView = (<View className="index-post-list">
        <View style="height:24px"/>
        <PostList posts={posts} loading={loading}/>
        <View style="height:20px"/>
      </View>)
    }

    return (
      <View>
        {/*图片底层*/}
        <View>
          <Image src={rec.url} mode="scaleToFill" className="index-background-image-mask"/>
        </View>

        {/*遮罩*/}
        <View className="index-background-view"/>

        {/*主要信息*/}
        <View className="index-view">

          {/*导航栏*/}
          {nav}

          <View style="height:12px"/>

          {/*每日推荐*/}
          <View className="index-rec-card">
            <RecCard title={rec.title} theme={rec.theme} url={rec.url} date={rec.date}/>
          </View>

          {/*我参与的*/}
          {postView}

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
