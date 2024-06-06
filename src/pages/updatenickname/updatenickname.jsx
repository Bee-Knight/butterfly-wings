import React from 'react'
import {Button, Input, Text, View, Textarea} from '@tarojs/components'
import './updatenickname.css'
import '../../app.scss'
import navutil from "../../utils/navutil";
import validators from '../../utils/validator'
import requests from '../../utils/requtil'
import api from '../../utils/api'
import Taro from '@tarojs/taro'
import {getCurrentInstance} from "@tarojs/runtime";
import {Nav} from '../../components/nav/nav'
import toasts from "../../utils/toastutil";

class UpdateNickname extends React.Component {
  config = {
    navigationBarTitleText: '设置昵称',
  }

  state = {
    nickname: '',
    maxlength: 10,
    buttonDisable: false,
    showConfirmBar: false
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
    if (!validators.isStrNullOrEmpty(defaulted) && defaulted === 'false') {
      this.setState({
        nickname: inst.router.params.nickname,
        buttonDisable: false
      })
    } else {
      this.setState({
        buttonDisable: true
      })
    }

    this.handleChange = this.handleChange.bind(this)
    this.onConfirm = this.onConfirm.bind(this)
  }

  handleChange(e) {
    if (!validators.isNull(e.detail)) {
      let buttonDisable = validators.isStrNullOrEmpty(e.detail.value)
      this.setState({
        nickname: e.detail.value,
        buttonDisable: buttonDisable
      })
    }
  }

  onConfirm(e) {
    if (validators.isStrNullOrEmpty(this.state.nickname)) {
      return
    }
    let nickname = this.state.nickname
    requests.post(api.getModifyUser(), {
      nickname: nickname
    }).then((res) => {
      toasts.show(res).then((r) => {
        if (!validators.isNull(res) && !validators.isNull(res.data) && validators.isTrue(res.data.success)) {
          setTimeout(() => {
            Taro.navigateBack({delta: 1})
          }, 200)
        }
      })
    })
  }

  render() {
    //导航栏
    // let nav = <View/>
    // if (process.env.TARO_ENV === 'weapp') {
    //   nav =
    //     <View style={`height: ${this.state.navBarHeight}px`}>
    //       <View style={`height: ${this.state.statusBarHeight}px`}/>
    //     </View>
    // }

    return (
      <View>
        <Nav title='修改昵称'/>
        {/*{nav}*/}
        <View className='user-nickname-update'>
          <Textarea
            className='minput'
            type='text'
            value={this.state.nickname}
            onInput={this.handleChange}
            maxlength={this.state.maxlength}
            showConfirmBar={this.state.showConfirmBar}
            focus
          />
          <View style="height:30px;width:100%"/>
          <Button
            className='mbutton'
            disabled={this.state.buttonDisable}
            onClick={this.onConfirm}>
            <Text style="color: white;">确认</Text>
          </Button>
        </View>
      </View>
    )
  }
}

export default UpdateNickname
