import React from 'react'
import {Button, Image, Swiper, SwiperItem, Switch, Text, Textarea, View} from '@tarojs/components'

import './createpost.css'
import validators from "../../utils/validator";
import mocks from "../../utils/mock"
import requests from "../../utils/requtil";
import api from "../../utils/api";
import Taro from "@tarojs/taro";
import {Nav} from "../../components/nav/nav";
import toasts from "../../utils/toastutil"
import defaultcoverutil from "../../utils/defaultcoverutil";

class CreatePost extends React.Component {
  config = {
    navigationBarTitleText: '',
  }

  state = {
    title: '',
    titleMaxlength: 10,
    ruleCode: 'Common',
    ruleDesc: mocks.getDefaultRuleDesc('主题'),
    mode: 'Open',
    defaultCoverList: [],
    coverIndex: 0
  }

  async load() {
    let result = await defaultcoverutil.getDefaultCoverList()
    this.setState({
      defaultCoverList: result
    })
  }

  async componentDidMount() {
    await this.load()
    this.handleChange = this.handleChange.bind(this)
    this.onConfirm = this.onConfirm.bind(this)
    this.load = this.load.bind(this)
    this.onSwitchChange = this.onSwitchChange.bind(this)
    this.onCoverChange = this.onCoverChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      title: e.detail.value
    })
  }

  onSwitchChange(e) {
    let mode = e.detail.value === true ? 'Open' : 'Internal'
    this.setState({
      mode: mode
    })
  }

  onCoverChange(e) {
    this.setState({
      coverIndex: e.detail.current
    })
  }

  onConfirm(e) {
    if (validators.isStrNullOrEmpty(this.state.title)) {
      return
    }
    let bg = this.state.defaultCoverList[this.state.coverIndex]
    requests.post(api.getCreatePost(), {
      theme: this.state.title,
      flyRule: "Common",
      mode: this.state.mode,
      background: bg
    }).then((res) => {
      toasts.show(res, "创建成功")
      if (!validators.isNull(res) && !validators.isNull(res.data) && validators.isTrue(res.data.success)) {
        Taro.navigateBack({delta: 1})
      }
    })
  }

  render() {
    return (
      <View>
        <Nav title='飞花一夏'/>
        <View className='create-post-parent-view'>

          <View className='create-post-title-view'>
            <View className='create-post-title'>主题</View>
            <View style="height:15px;width:100%"/>
            <Textarea
              className='create-post-title-view-input'
              type='text'
              value={this.state.title}
              onInput={this.handleChange}
              maxlength={this.state.titleMaxlength}
              focus
            />
          </View>

          <View style="height:30px;width:100%"/>

          <View className='create-post-rule-view'>
            <View className='create-post-title'>规则</View>
            <View style="height:15px;width:100%"/>
            <Text className='create-post-rule-view-text'>
              {this.state.ruleDesc}
            </Text>
          </View>

          <View style="height:30px;width:100%"/>

          <View className='create-post-mode-view'>
            <View className='create-post-title'>是否公开</View>
            <View style="height:15px;width:100%"/>
            <Switch checked color='#ffc062' onChange={this.onSwitchChange}/>
          </View>

          <View style="height:30px;width:100%"/>

          <View className='create-post-cover-view'>
            <View className='create-post-title'>封面图</View>
            <View style="height:15px;width:100%"/>

            <View className='create-post-cover-swiper-view'>
              <Swiper
                className='create-post-cover-swiper'
                indicatorColor='#ffffff'
                indicatorActiveColor='#ffc062'
                circular
                indicatorDots
                onChange={this.onCoverChange}>
                {
                  this.state.defaultCoverList.map(image =>
                    <SwiperItem>
                      <Image src={image} mode="scaleToFill"/>
                    </SwiperItem>
                  )
                }
              </Swiper>

            </View>
          </View>

          <View style="height:30px;width:100%"/>

          <Button
            className='create-post-button'
            onClick={this.onConfirm}>
            <Text style="color: white;">确认</Text>
          </Button>

          <View style="height:30px;width:100%"/>
        </View>
      </View>
    )
  }
}

export default CreatePost
