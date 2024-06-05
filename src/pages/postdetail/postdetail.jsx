import React from 'react'
import {Button, Image, Input, View} from '@tarojs/components'
import './postdetail.css'
import '../../app.scss'
import Taro from "@tarojs/taro";
import {DetailCard} from '../../components/detailcard/detailcard'
import {CommentList} from '../../components/commentcard/commentlist'
import requests from '../../utils/requtil'
import api from '../../utils/api'
import convertors from '../../utils/convertor'
import validators from "../../utils/validator";
import {getCurrentInstance} from "@tarojs/runtime";
import {Nav} from '../../components/nav/nav'
import toasts from '../../utils/toastutil'
import refreshtokenutil from "../../utils/refreshtokenutil";
import shareIcon from "../../images/icon_share.png"

class PostDetail extends React.Component {
  config = {
    navigationBarTitleText: '飞花一夏'
  }

  state = {
    detail: {},
    comments: [],
    statusBarHeight: 0,
    navBarHeight: 0,
    commentContent: '',

    bottomHeight: 0,
    adjustPosition: false,
    cursorSpacing: 0,
    maxLen: 100
  }

  async load(refreshToken) {
    let inst = getCurrentInstance()
    let id = inst.router.params.id

    await requests.get(api.getPostDetail(id), {}).then((res) => {
      if (validators.isTrue(refreshToken)) {
        refreshtokenutil.checkResultAndRefreshToken(res)
      }
      if (!validators.isNull(res.data) && validators.isTrue(res.data.success)) {
        let result = convertors.getPostDetail(res.data.data)
        let commentResult = convertors.getCommentList(res.data.data)
        if (!validators.isNull(result)) {
          this.setState({
            detail: result
          })
        }
        if (!validators.isNull(result) && !validators.isArrayNullOrEmpty(commentResult)) {
          this.setState({
            comments: commentResult
          })
        }
      }
    })
  }

  async onPullDownRefresh() {
    await this.load(true)
    Taro.stopPullDownRefresh()
  }

  async componentDidMount() {
    await this.load(true)
    this.handleChange = this.handleChange.bind(this)
    this.onConfirm = this.onConfirm.bind(this)
    this.load = this.load.bind(this)
    this.bindFocus = this.bindFocus.bind(this)
    this.bindBlur = this.bindBlur.bind(this)

    Taro.eventCenter.on('LOGIN', (res) => {
      this.load(false)
    })
  }

  handleChange(e) {
    // if (!validators.isNull(e.detail)) {
    //   this.setState({
    //     commentContent: e.detail.value
    //   })
    // }
  }

  bindFocus(e) {
    this.setState({
      bottomHeight: e.detail.height
    })
  }

  bindBlur(e) {
    this.setState({
      bottomHeight: 0
    })
  }

  onConfirm(e) {
    let content = e.detail.value
    if (validators.isStrNullOrEmpty(content)) {
      return
    }
    requests.post(api.getFlyPost(), {
      flyArenaId: this.state.detail.id,
      pollen: content
    }).then((res) => {
      toasts.show(res, '发布成功')
      if (!validators.isNull(res) && !validators.isNull(res.data) && validators.isTrue(res.data.success)) {
        this.setState({
          commentContent: ''
        })
        this.load(true)
      }
    })
  }

  render() {
    const {id, cover, title, repliesCount, mode, desc, playersCount, playerAvatars} = this.state.detail
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
        <Nav left='14' title={title}/>
        <View style="height:16px"/>

        {/*飞花令详情*/}
        <View className='post-detail'>
          <DetailCard
            id={id}
            cover={cover}
            title={title}
            repliesCount={repliesCount}
            mode={mode}
            desc={desc}
            playersCount={playersCount}
            playerAvatars={playerAvatars}
          />
        </View>
        {/*<View style="height:32px"/>*/}

        <View style="height:13px"/>
        <View className="post-divider">
          <View style="height:0.5px;background: #EAEEF1;"/>
        </View>
        <View style="height:3.5px"/>

        {/*评论列表*/}
        <View className="post-comment-list">
          <CommentList comments={comments}/>
        </View>
        <View style="height:20px;width:100%"/>

        {/*评论组件*/}
        <View style="height:52px;width: 100%"/>

        <View className='post-comment-input-view' style={`bottom: ${this.state.bottomHeight}px;`}>
          <Input
            className='post-comment-input'
            type='text'
            placeholder='快来飞一句吧～'
            value={this.state.commentContent}
            onInput={this.handleChange}
            onConfirm={this.onConfirm}
            onFocus={this.bindFocus}
            onBlur={this.bindBlur}
            adjustPosition={this.state.adjustPosition}
            maxlength={this.state.maxLen}
            cursorSpacing={this.state.cursorSpacing}
          />
          {/*<Button className="post-comment-share-button" openType="share">*/}
          {/*  <Image mode='scaleToFill' src={shareIcon} className='post-comment-share-icon'/>*/}
          {/*</Button>*/}
        </View>

        {/*<MComment/>*/}

      </View>
    )
  }
}

export default PostDetail
