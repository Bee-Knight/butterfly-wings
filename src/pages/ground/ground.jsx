import React from 'react'
import {Button, View} from '@tarojs/components'
import './ground.css'
import mocks from "../../utils/mock"
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
    await requests.get(api.getPostList(), {}).then((res) => {
      if (!validators.isNull(res.data) && validators.isTrue(res.data.success)) {
        let result = convertors.getPostList(res.data.data)
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
    const {loading, posts} = this.state
    return (
      <View className="ground-background-view">
        <View className="ground-view">
          <View style="height:20px"/>

          <View className="ground-nav-title">
            {/*创建*/}
            {/*<View className="ground-nav-title-create">+</View>*/}
            <Button className="ground-nav-title-create">+</Button>
            {/*筛选器*/}
            <View className="ground-nav-title-selector">+</View>
          </View>
          <View style="height:8px"/>

          <View style="height:20px"/>
          {/*帖子列表*/}
          <View className="ground-d-post-list">
            <DPostList posts={posts} loading={loading}/>
          </View>
          <View style="height:20px"/>
        </View>
      </View>
    )
  }
}

export default Ground
