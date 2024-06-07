import React from 'react'
import {Button, Image, Text, View} from '@tarojs/components'
import './ground.css'
// import mocks from "../../utils/mock"
import Taro from "@tarojs/taro"
import {DPostList} from "../../components/dpostlist/dpostlist"
import navutil from "../../utils/navutil";
import requests from "../../utils/requtil";
import api from "../../utils/api";
import validators from "../../utils/validator";
import convertors from "../../utils/convertor";
import refreshtokenutil from "../../utils/refreshtokenutil";
import createIcon from "../../images/icon_create.png"

class Ground extends React.Component {
  config = {
    navigationBarTitleText: '',
  }

  state = {
    //data
    loading: false,
    posts: [],
    //渐变nav
    navBackground: "rgba(255, 255, 255, 0)"
  }

  async load(refreshToken) {
    await requests.get(api.getPostListByMode('Open'), {}).then((res) => {
      if (validators.isTrue(refreshToken)) {
        refreshtokenutil.checkResultAndRefreshToken(res)
      }
      if (!validators.isNull(res.data) && validators.isTrue(res.data.success)) {
        let result = convertors.getDPostList(res.data.data)
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
    await this.load(true)
  }

  async componentDidMount() {
    Taro.eventCenter.on('LOGIN', (res) => {
      this.load(false)
    })
  }

  onPageScroll(e) {
    let a = Math.min(0.5, 0.5 * e.scrollTop / 100)
    this.setState({
      navBackground: "rgba(255, 255, 255, " + a + ")"
    })
  }

  onCreatePost() {
    Taro.navigateTo({
      url: '/pages/createpost/createpost',
    })
  }

  render() {
    const {loading, posts, navBackground} = this.state

    let statusBarHeightOrDefault = 20
    let navBarHeightOrDefault = 44
    let navinfo = navutil.getNavInfo()
    if (navinfo) {
      const {statusBarHeight, navBarHeight} = navinfo
      statusBarHeightOrDefault = statusBarHeight > 0 ? statusBarHeight : statusBarHeightOrDefault
      navBarHeightOrDefault = navBarHeight > 0 ? navBarHeight : navBarHeightOrDefault
    }
    return (
      <View className="ground-background-view">
        <View className="ground-view">
          {/*导航栏*/}
          <View className="ground-nav-view" style={`height: ${navBarHeightOrDefault}px;background: ${navBackground}`}>
            <View className="ground-nav-title"
                  style={`height: ${navBarHeightOrDefault - statusBarHeightOrDefault}px;margin-top:${statusBarHeightOrDefault}px`}>
              {/*创建*/}
              {/*<View className="ground-nav-title-create" onClick={this.onCreatePost}>+</View>*/}
              <Button className="ground-nav-title-create" onClick={this.onCreatePost}>
                {/*+*/}
                <Image src={createIcon} className="ground-nav-title-create-icon" mode="scaleToFill"/>
              </Button>
              {/*/!*mode筛选器*!/*/}
              {/*<View className="ground-nav-title-selector"></View>*/}
            </View>
          </View>

          {/*填充*/}
          <View style={`height: ${navBarHeightOrDefault}px;width: 100%;`}/>

          {/*填充*/}
          <View style="height:20px"/>

          {/*帖子列表*/}
          <View className="ground-d-post-list">
            <DPostList posts={posts} loading={loading}/>
          </View>

          {/*填充*/}
          {/*<View style="height:20px"/>*/}
        </View>
      </View>
    )
  }
}

export default Ground
