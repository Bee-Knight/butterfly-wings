import React from 'react'
import {View} from '@tarojs/components'
import './postdetail.css'
import '../../app.scss'
import mocks from '../../utils/mock'
import {DetailCard} from '../../components/detailcard/detailcard'
import {CommentList} from '../../components/commentcard/commentlist'
import {getStorageSync} from "@tarojs/taro-h5";
import Taro from "@tarojs/taro";

class PostDetail extends React.Component {
  config = {
    navigationBarTitleText: '',
  }

  state = {
    detail: {},
    comments: [],
    statusBarHeight: 0,
    navBarHeight: 0
  }

  async componentDidMount() {
    // await requests.get(api.getPostList(), {}).then((res) => {
    //   console.log(res)
    // })
    if (process.env.TARO_ENV !== 'weapp') {
      this.setState({
        detail: mocks.getMockPostDetail(),
        comments: mocks.getCommentList()
      })
      return
    }

    let statusBarHeightOrDefault = 44;
    let sysInfo = getStorageSync('sys_info');
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
      detail: mocks.getMockPostDetail(),
      comments: mocks.getCommentList(),
      statusBarHeight: statusBarHeightOrDefault,
      navBarHeight: navBarHeight
    })

    console.log("statusBarHeight: " + statusBarHeightOrDefault)
    console.log("navBarHeight: " + navBarHeight)
  }

  render() {
    const {id, cover, title, repliesCount, mode, desc, playersCount} = this.state.detail
    let comments = this.state.comments

    //导航栏
    let nav = <View/>
    if (process.env.TARO_ENV === 'weapp') {
      nav = <View className="index-nav-title" style={`height: ${this.state.navBarHeight}px`}>
        <View style={`height: ${this.state.statusBarHeight}px`}/>
        {/*<View style="height: 44px"/>*/}
        {/*<View className="index-nav-title-title">诗辞大会</View>*/}
      </View>
    }

    return (
      <View className="post-detail-parent">
        {/*导航栏*/}
        {nav}
        <View style="height:16px"/>
        <View className='post-detail'>
          <DetailCard
            id={id}
            cover={cover}
            title={title}
            repliesCount={repliesCount}
            mode={mode}
            desc={desc}
            playersCount={playersCount}
          />
        </View>
        <View style="height:32px"/>
        <View className="post-comment-list">
          <CommentList comments={comments}/>
        </View>
        <View style="height:20px"/>
      </View>
    )
  }
}

export default PostDetail
