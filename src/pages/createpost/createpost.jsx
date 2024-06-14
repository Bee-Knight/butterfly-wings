import React from 'react'
import {Button, Image, Input, Text, View} from '@tarojs/components'
import './createpost.css'
import validators from "../../utils/validator";
import mocks from "../../utils/mock"
import requests from "../../utils/requtil";
import api from "../../utils/api";
import Taro from "@tarojs/taro";
import {Nav} from "../../components/nav/nav";
import toasts from "../../utils/toastutil"
import defaultcoverutil from "../../utils/defaultcoverutil";
import refreshtokenutil from "../../utils/refreshtokenutil";
import files from "../../utils/fileutil"

class CreatePost extends React.Component {
  config = {
    navigationBarTitleText: '',
  }

  state = {
    //标题
    title: '',
    titleMaxlength: 1,
    //规则
    ruleCode: 'Common',
    ruleDesc: mocks.getDefaultRuleDesc('主题'),
    //模式
    mode: 'Open',
    //封面图
    defaultCoverList: [],
    coverIndex: 0,
    defaultCover: '',
    customCover: false,
    //确认按钮
    disable: true,
  }

  async load() {
    let result = await defaultcoverutil.getDefaultCoverList()
    let defaultCover = !validators.isArrayNullOrEmpty(result) ? result[new Date().getTime() % result.length] : ''
    this.setState({
      defaultCoverList: result,
      defaultCover: defaultCover
    })
  }

  async componentDidMount() {
    await this.load()
    this.handleChange = this.handleChange.bind(this)
    this.onConfirm = this.onConfirm.bind(this)
    this.load = this.load.bind(this)
    this.onSwitchChange = this.onSwitchChange.bind(this)
    this.onCoverChange = this.onCoverChange.bind(this)
    this.onSwitchCover = this.onSwitchCover.bind(this)
    this.onUploadCover = this.onUploadCover.bind(this)
  }

  handleChange(e) {
    if (!validators.isNull(e.detail)) {
      let buttonDisable = validators.isStrNullOrEmpty(e.detail.value)
      this.setState({
        title: e.detail.value,
        disable: buttonDisable
      })
    }
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

  onUploadCover(e) {
    Taro.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        let tempFilePaths = res.tempFilePaths
        if (!validators.isArrayNullOrEmpty(tempFilePaths)) {
          this.setState({
            defaultCover: tempFilePaths[0],
            customCover: true
          }, () => {
            console.log(tempFilePaths);
          })
        }
      }
    })
  }

  onSwitchCover(e) {
    let index = 0
    this.state.defaultCoverList.forEach((a, i) => {
      if (a === this.state.defaultCover) {
        index = i
      }
    })
    this.setState({
      defaultCover: this.state.defaultCoverList[(index + 1) % this.state.defaultCoverList.length],
      customCover: false
    })
  }

  onConfirm(e) {
    if (validators.isStrNullOrEmpty(this.state.title) ||
      validators.isStrNullOrEmpty(this.state.defaultCover)) {
      return
    }
    if (this.state.customCover) {
      let index = this.state.defaultCover.lastIndexOf('.')
      let suffix = ''
      if (index !== -1) {
        suffix = this.state.defaultCover.substring(index)
      }
      Taro.uploadFile({
        url: api.getPutFile(),
        filePath: this.state.defaultCover,
        name: 'file',
        formData: {
          fileName: new Date().getTime() + suffix
        },
        header: {
          'X-Token': refreshtokenutil.getToken()
        },
        success: (res) => {
          console.log('uploadFile success:', res)
          let fileUrl = ''
          if (!validators.isStrNullOrEmpty(res.data)) {
            let data = JSON.parse(res.data)
            if (!validators.isNull(data) &&
              validators.isTrue(data.success) &&
              !validators.isStrNullOrEmpty(data.data)) {
              fileUrl = data.data
            }
          }
          if (!validators.isStrNullOrEmpty(fileUrl)) {
            requests.post(api.getCreatePost(), {
              theme: this.state.title,
              flyRule: "Common",
              mode: this.state.mode,
              background: files.getFileDomainPrefix() + fileUrl
            }).then((result) => {
              toasts.show(result, "创建成功").then((r) => {
                if (!validators.isNull(result) &&
                  !validators.isNull(result.data) &&
                  validators.isTrue(result.data.success)) {
                  setTimeout(() => {
                    Taro.navigateBack({delta: 1})
                  }, 350)
                }
              })
            })
          }
        },
        fail: (err) => {
          console.error('uploadFile fail:', err)
        }
      })
    } else {
      requests.post(api.getCreatePost(), {
        theme: this.state.title,
        flyRule: "Common",
        mode: this.state.mode,
        background: this.state.defaultCover,
      }).then((res) => {
        toasts.show(res, "创建成功").then((r) => {
          if (!validators.isNull(res) && !validators.isNull(res.data) && validators.isTrue(res.data.success)) {
            setTimeout(() => {
              Taro.navigateBack({delta: 1})
            }, 350)
          }
        })
      })
    }
  }

  render() {
    return (
      <View>
        <Nav left='14' title='飞花一夏'/>
        <View className='create-post-parent-view'>

          {/*主题*/}
          <View className='create-post-title-view'>
            <View className='create-post-title'>主题</View>
            <View style="height:10px;width:100%"/>
            <View className='create-post-title-input-view'>
              <Input
                className='create-post-title-input'
                type='text'
                value={this.state.title}
                onInput={this.handleChange}
                maxlength={this.state.titleMaxlength}
                placeholderClass='create-post-title-view-input-placeholder'
                placeholder='请输入飞花主题～限一字符'
                focus
              />
              <View className='create-post-title-limit'>
                {validators.isStrNullOrEmpty(this.state.title) ? 0 : this.state.title.length}/{this.state.titleMaxlength}
              </View>
            </View>
          </View>

          <View style="height:30px;width:100%"/>

          {/*规则*/}
          <View className='create-post-rule-view'>
            <View className='create-post-title'>规则</View>
            <View style="height:10px;width:100%"/>
            <Text className='create-post-rule-view-text'>
              {this.state.ruleDesc}
            </Text>
          </View>

          <View style="height:30px;width:100%"/>

          {/*公开*/}
          {/*<View className='create-post-mode-view'>*/}
          {/*  <View className='create-post-mode-switch-view'>*/}
          {/*    <View className='create-post-title'>是否公开</View>*/}
          {/*    /!*<Switch checked color='#ffc062' onChange={this.onSwitchChange}/>*!/*/}
          {/*    <Switch checked color='#53A591' onChange={this.onSwitchChange}/>*/}
          {/*  </View>*/}
          {/*  <View style="height:10px;width:100%"/>*/}
          {/*  <Text className='create-post-rule-view-text'>*/}
          {/*    {mocks.getDefaultModeDesc()}*/}
          {/*  </Text>*/}
          {/*</View>*/}

          {/*<View style="height:32px;width:100%"/>*/}

          <View className='create-post-cover-view'>
            <View className='create-post-title'>封面图</View>
            <View style="height:10px;width:100%"/>

            {/*轮播选图*/}
            {/*<View className='create-post-cover-swiper-view'>*/}
            {/*  <Swiper*/}
            {/*    className='create-post-cover-swiper'*/}
            {/*    indicatorColor='#ffffff'*/}
            {/*    indicatorActiveColor='#53A591'*/}
            {/*    circular*/}
            {/*    indicatorDots*/}
            {/*    onChange={this.onCoverChange}>*/}
            {/*    {*/}
            {/*      this.state.defaultCoverList.map(image =>*/}
            {/*        <SwiperItem>*/}
            {/*          <Image className='create-post-cover-swiper-image' src={image} mode="scaleToFill"/>*/}
            {/*        </SwiperItem>*/}
            {/*      )*/}
            {/*    }*/}
            {/*  </Swiper>*/}
            {/*</View>*/}
            <View className='create-post-cover-image-select-view'>
              <View className='create-post-cover-image-view'>
                <Image className='create-post-cover-image' src={this.state.defaultCover} mode="scaleToFill"/>
              </View>
              <View className='create-post-cover-button-select-view'>
                <Button className='create-post-cover-button-1' onClick={this.onUploadCover}>相册上传</Button>
                <View style='width:100%;height:16px'/>
                <Button className='create-post-cover-button-2' onClick={this.onSwitchCover}>图库随机</Button>
              </View>
            </View>
          </View>

          <View style="height:40px;width:100%"/>

          <Button
            className='create-post-button'
            onClick={this.onConfirm}
            disabled={this.state.disable}>
            <Text className='create-post-button-text'>确认</Text>
          </Button>

          <View style="height:32px;width:100%"/>
        </View>
      </View>
    )
  }
}

export default CreatePost
