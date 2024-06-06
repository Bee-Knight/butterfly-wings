import React from 'react'
import {Image, Text, View} from '@tarojs/components'
import {PostList} from '../../components/postlist/postlist'
import RecCard from "../../components/reccard/reccard"
import requests from '../../utils/requtil'
import api from '../../utils/api'
import convertors from '../../utils/convertor'
import './index.css'
import Taro from "@tarojs/taro"
import validators from "../../utils/validator";
import navutil from "../../utils/navutil";
import mocks from "../../utils/mock"
import refreshtokenutil from "../../utils/refreshtokenutil";

class Index extends React.Component {
  config = {
    navigationBarTitleText: '首页',
  }

  state = {
    loading: false,
    posts: [],
    rec: {},
    statusBarHeight: 0,
    navBarHeight: 0,
    postView: <View style="height:12px"/>
  }

  async load(refreshToken) {
    await requests.get(api.getFindTodayFly(), {}).then((res) => {
      if (validators.isTrue(refreshToken)) {
        refreshtokenutil.checkResultAndRefreshToken(res)
      }
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
        if (!validators.isArrayNullOrEmpty(result)) {
          let postView =
            (<View className="index-post-list">
              <View style="height:24px"/>
              <PostList posts={result} loading={false}/>
              <View style="height:12px"/>
            </View>)
          this.setState({
            posts: result,
            postView: postView
          })
        } else {
          let postView =
            <View>
              <View style="height:24px"/>
              <View className="index-post-create-hint" onClick={this.onClickHint}>
                还没有参与过飞花令~快来<Text style='color:#4c99c3'>“发现”</Text>吧~
                {/*{mocks.getDefaultCreatePostHint()}*/}
              </View>
              <View style="height:12px"/>
            </View>
          this.setState({
            postView: postView
          })
        }
      }
    })
  }

  async componentDidShow() {
    await this.load(true)
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

    Taro.eventCenter.on('LOGIN', (res) => {
      this.load(false)
    })
  }

  onCreatePost() {
    Taro.navigateTo({
      url: '/pages/createpost/createpost',
    })
  }

  onClickHint() {
    Taro.switchTab({
      url: '/pages/ground/ground',
    })
  }

  render() {
    const {loading, posts, rec} = this.state

    {/*导航栏*/
    }
    let nav = <View/>
    if (process.env.TARO_ENV === 'weapp' && !validators.isStrNullOrEmpty(rec.banner)) {
      nav = <View className="index-nav-title" style={`height: ${this.state.navBarHeight}px`}>
        <View style={`height: ${this.state.statusBarHeight}px`}/>
        {/*<View style="height: 44px"/>*/}
        <View className="index-nav-title-title">{rec.banner}</View>
      </View>
    }

    // let postView = <View/>;
    // if (!validators.isArrayNullOrEmpty(posts)) {
    //   postView = (<View className="index-post-list">
    //     <View style="height:24px"/>
    //     <PostList posts={posts} loading={loading}/>
    //     <View style="height:12px"/>
    //   </View>)
    // } else {
    //   postView = <View>
    //     <View style="height:24px"/>
    //     <View className="index-post-create-hint" onClick={this.onClickHint}>
    //       {mocks.getDefaultCreatePostHint()}
    //     </View>
    //     <View style="height:20px"/>
    //   </View>
    // }

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
            <RecCard
              id={rec.id}
              title={rec.title}
              theme={rec.theme}
              url={rec.url}
              date={rec.date}/>
          </View>

          {/*我参与的*/}
          {this.state.postView}

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
