import React from 'react'
import {Input, View} from '@tarojs/components'
import './postdetail.css'
import '../../app.scss'
import {DetailCard} from '../../components/detailcard/detailcard'
import {CommentList} from '../../components/commentcard/commentlist'
import requests from '../../utils/requtil'
import api from '../../utils/api'
import convertors from '../../utils/convertor'
import validators from "../../utils/validator";
import navutil from "../../utils/navutil";
import {getCurrentInstance} from "@tarojs/runtime";
import {Nav} from '../../components/nav/nav'

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
    let inst = getCurrentInstance()
    let id = inst.router.params.id

    await requests.get(api.getPostDetail(id), {}).then((res) => {
      if (!validators.isNull(res.data) && validators.isTrue(res.data.success)) {
        let result = convertors.getPostDetail(res.data.data)
        let commentResult = convertors.getCommentList(res.data.data)
        console.log(result)
        console.log(commentResult)
        if (!validators.isNull(result)) {
          this.setState({
            detail: result
          })
        }
        if (!validators.isArrayNullOrEmpty(commentResult)) {
          this.setState({
            comments: commentResult
          })
        }
      }
    })

    if (process.env.TARO_ENV !== 'weapp') {
      return
    }

    let navinfo = navutil.getNavInfo()
    if (!navinfo) {
      return
    }

    this.setState({
      // detail: mocks.getMockPostDetail(),
      // comments: mocks.getMockCommentList(),
      statusBarHeight: navinfo.statusBarHeight,
      navBarHeight: navinfo.navBarHeight
    })
  }

  render() {
    const {id, cover, title, repliesCount, mode, desc, playersCount} = this.state.detail
    let comments = this.state.comments

    //导航栏
    // let nav = <View/>
    // if (process.env.TARO_ENV === 'weapp') {
    //   nav = <View className="index-nav-title" style={`height: ${this.state.navBarHeight}px`}>
    //     <View style={`height: ${this.state.statusBarHeight}px`}/>
    //   </View>
    // }

    return (
      <View className="post-detail-parent">
        {/*导航栏*/}
        {/*{nav}*/}
        <Nav left={14}/>
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
        <View style="height:20px;width:100%"/>
        {/*评论组件*/}
        <View style="height:44px;width: 100%"/>
        <View style="position: fixed;bottom: 0px;width: 100%;background-color: #fff">
          <View style="padding: 8px;padding-left:8px;padding-right:8px">
            <View style="display: flex;flex-direction: row">
              <Input
                type='text'
                placeholder='快来飞一句吧～'
                style='background-color: #F5F6F7;border-radius: 28px;padding:8px;padding-left:14px;padding-right:14px;width: 100%;font-size: 12px;min-height:12px;height:12px'
              />
              {/*<View style='color: #000;font-size: 12px;width:25%;display:flex;text-align:center;justify-content:center;align-items:center'>*/}
              {/*  确认*/}
              {/*</View>*/}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default PostDetail
