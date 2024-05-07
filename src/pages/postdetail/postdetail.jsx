import React from 'react'
import {View} from '@tarojs/components'
import './postdetail.css'
import '../../app.scss'
import mocks from '../../utils/mock'
import {DetailCard} from '../../components/detailcard/detailcard'
import {CommentList} from '../../components/commentcard/commentlist'
import requests from '../../utils/requtil'
import api from '../../utils/api'
import convertors from '../../utils/convertor'
import validators from "../../utils/validator";
import navutil from "../../utils/navutil";

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
    await requests.get(api.getPostDetail(), {}).then((res) => {
      console.log(res.data)
      if (!validators.isNull(res.data) && validators.isTrue(res.data.success)) {
        let result = convertors.getPostDetail(res.data.data)
        let commentResult = convertors.getCommentList(res.data.data)
        console.log(result)
        if (!validators.isNull(result)) {
          this.setState({})
        }
      }
    })

    if (process.env.TARO_ENV !== 'weapp') {
      this.setState({
        detail: mocks.getMockPostDetail(),
        comments: mocks.getMockCommentList()
      })
      return
    }

    let navinfo = navutil.getNavInfo()
    if (!navinfo) {
      return
    }

    this.setState({
      detail: mocks.getMockPostDetail(),
      comments: mocks.getMockCommentList(),
      statusBarHeight: navinfo.statusBarHeight,
      navBarHeight: navinfo.navBarHeight
    })
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
