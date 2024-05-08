import React from 'react'
import {Button, Input, Text, View} from '@tarojs/components'
import './updatenickname.css'
import '../../app.scss'
import navutil from "../../utils/navutil";
import validators from '../../utils/validator'
import requests from '../../utils/requtil'
import api from '../../utils/api'
import Taro from '@tarojs/taro'
import {getCurrentInstance} from "@tarojs/runtime";

class UpdateNickname extends React.Component {
  config = {
    navigationBarTitleText: '设置昵称',
  }

  state = {
    nickname: '',
    maxlength: 10
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

    let inst = getCurrentInstance()
    let defaulted = inst.router.params.df
    console.log(inst.router.params)
    console.log(inst.router.params.df)
    if (!validators.isStrNullOrEmpty(defaulted) && defaulted === 'false') {
      this.setState({
        nickname: inst.router.params.nickname
      })
    }

    this.handleChange = this.handleChange.bind(this)
    this.onConfirm = this.onConfirm.bind(this)
  }

  handleChange(e) {
    if (!validators.isNull(e.detail)) {
      this.setState({
        nickname: e.detail.value
      })
    }
  }

  onConfirm(e) {
    let nickname = validators.isStrNullOrEmpty(this.state.nickname) ? '' : this.state.nickname
    requests.post(api.getModifyUser(), {
      nickname: nickname
    }).then((res) => {
      console.log(res)
      Taro.navigateBack({delta: 1})
    })
  }

  render() {
    //导航栏
    let nav = <View/>
    if (process.env.TARO_ENV === 'weapp') {
      nav =
        <View style={`height: ${this.state.navBarHeight}px`}>
          <View style={`height: ${this.state.statusBarHeight}px`}/>
        </View>
    }

    return (
      <View>
        {nav}
        <View className='user-nickname-update'>
          <Input
            className='minput'
            type='text'
            value={this.state.nickname}
            onInput={this.handleChange}
            maxlength={this.state.maxlength}
            focus
          />
          <View style="height:30px;width:100%"/>
          <Button
            className='mbutton'
            onClick={this.onConfirm}>
            <Text style="color: white;">确认</Text>
          </Button>
        </View>
      </View>
    )
  }
}

export default UpdateNickname
