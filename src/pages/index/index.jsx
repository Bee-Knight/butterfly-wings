import React from 'react'
import {Image, View} from '@tarojs/components'
import {PostList} from '../../components/postlist/postlist'
import RecCard from "../../components/reccard/reccard"
import requests from '../../utils/requtil'
import api from '../../utils/api'
import convertors from '../../utils/convertor'
import './index.css'
import Taro from "@tarojs/taro"
import {getStorageSync} from "@tarojs/taro-h5"
import validators from "../../utils/validator";

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

  async componentDidMount() {
    await requests.get(api.getFindTodayFly(), {}).then((res) => {
      console.log(res.data)
      if (!validators.isNull(res.data) && validators.isTrue(res.data.success)) {
        let result = convertors.getRecCard(res.data.data)
        console.log(result)
        if (!validators.isNull(result)) {
          this.setState({
            rec: result
          })
        }
      }
    })
    await requests.get(api.getPostList(), {}).then((res) => {
      console.log(res.data)
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

    if (process.env.TARO_ENV !== 'weapp') {
      // this.setState({
      //   posts: mocks.getMockPostList(),
      //   rec: mocks.getMockRecCard(),
      // })
      return
    }

    let statusBarHeightOrDefault = 44
    let sysInfo = getStorageSync('sys_info')
    if (sysInfo && sysInfo.statusBarHeight && sysInfo.statusBarHeight > 0) {
      statusBarHeightOrDefault = sysInfo.statusBarHeight
    } else {
      const {statusBarHeight} = Taro.getSystemInfoSync()
      if (statusBarHeight > 0) {
        statusBarHeightOrDefault = statusBarHeight
      }
    }

    // 获取胶囊信息
    const {width, height, left, top, right} = Taro.getMenuButtonBoundingClientRect()
    console.log(Taro.getMenuButtonBoundingClientRect())
    let navBarHeight = top > statusBarHeightOrDefault && height > 0
      ? statusBarHeightOrDefault + (top - statusBarHeightOrDefault) * 2 + height
      : statusBarHeightOrDefault + 44

    this.setState({
      // posts: mocks.getMockPostList(),
      // rec: mocks.getMockRecCard(),
      statusBarHeight: statusBarHeightOrDefault,
      navBarHeight: navBarHeight
    })

    console.log("statusBarHeight: " + statusBarHeightOrDefault)
    console.log("navBarHeight: " + navBarHeight)
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
