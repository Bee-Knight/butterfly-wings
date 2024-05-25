import React from 'react'
import {Button, View} from '@tarojs/components'
import './ground.css'
// import mocks from "../../utils/mock"
import Taro from "@tarojs/taro"
import {DPostList} from "../../components/dpostlist/dpostlist"
import navutil from "../../utils/navutil";
import requests from "../../utils/requtil";
import api from "../../utils/api";
import validators from "../../utils/validator";
import convertors from "../../utils/convertor";

class Ground extends React.Component {
  config = {
    navigationBarTitleText: '',
  }

  state = {
    loading: false,
    posts: []
  }

  async load() {
    await requests.get(api.getPostListByMode('Open'), {}).then((res) => {
      if (!validators.isNull(res.data) && validators.isTrue(res.data.success)) {
        let result = convertors.getDPostList(res.data.data)
        console.log(result)
        if (!validators.isArrayNullOrEmpty(result)) {
          this.setState({
            posts: result
            // posts: mocks.getMockDPostList()
          })
        }
      }
    })
  }

  async componentDidShow() {
    await this.load()
  }

  async componentDidMount() {
  }

  onCreatePost() {
    Taro.navigateTo({
      url: '/pages/createpost/createpost',
    })
  }

  render() {
    const {loading, posts} = this.state

    let statusBarHeightOrDefault = 20
    if (process.env.TARO_ENV === 'weapp') {
      let navinfo = navutil.getNavInfo()
      if (navinfo) {
        if (!validators.isNull(navinfo.statusBarHeight) && navinfo.statusBarHeight > 0) {
          statusBarHeightOrDefault = navinfo.statusBarHeight
        }
      }
    }
    return (
      <View className="ground-background-view">
        <View className="ground-view">

          <View style={`height:${statusBarHeightOrDefault}px`}/>
          <View className="ground-nav-title">
            {/*创建*/}
            {/*<View className="ground-nav-title-create" onClick={this.onCreatePost}>+</View>*/}
            <Button className="ground-nav-title-create" onClick={this.onCreatePost}>+</Button>
            {/*/!*mode筛选器*!/*/}
            {/*<View className="ground-nav-title-selector">+</View>*/}
          </View>
          {/*<View style="height:8px"/>*/}

          {/*填充*/}
          <View style="height:20px"/>
          {/*帖子列表*/}
          <View className="ground-d-post-list">
            <DPostList posts={posts} loading={loading}/>
          </View>

          {/*填充*/}
          <View style="height:20px"/>
        </View>
      </View>
    )
  }
}

export default Ground
