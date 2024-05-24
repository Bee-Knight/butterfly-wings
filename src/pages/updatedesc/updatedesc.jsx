import React from 'react'
import {Button, Input, Text, View, Textarea} from '@tarojs/components'
import './updatedesc.css'
import '../../app.scss'
import navutil from "../../utils/navutil";
import validators from '../../utils/validator'
import requests from '../../utils/requtil'
import api from '../../utils/api'
import Taro from '@tarojs/taro'
import {getCurrentInstance} from "@tarojs/runtime";
import {Nav} from '../../components/nav/nav'

class UpdateDesc extends React.Component {
  config = {
    navigationBarTitleText: '设置简介',
  }

  state = {
    desc: '',
    maxlength: 50
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
        desc: inst.router.params.desc
      })
    }
    this.handleChange = this.handleChange.bind(this)
    this.onConfirm = this.onConfirm.bind(this)
  }

  handleChange(e) {
    if (!validators.isNull(e.detail)) {
      this.setState({
        desc: e.detail.value
      })
    }
  }

  onConfirm(e) {
    let desc = validators.isStrNullOrEmpty(this.state.desc) ? '' : this.state.desc
    requests.post(api.getModifyUser(), {
      introduction: desc
    }).then((res) => {
      console.log(res)
      Taro.navigateBack({delta: 1})
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
        {/*{nav}*/}
        <Nav title='修改简介'/>
        <View className='user-desc-update'>
          <Textarea
            className='minput-desc'
            type='text'
            value={this.state.desc}
            onInput={this.handleChange}
            maxlength={this.state.maxlength}
            focus
          />
          <View style="height:30px;width:100%"/>
          <Button
            className='mbutton-desc'
            onClick={this.onConfirm}>
            <Text className='mbutton-desc-text'>确认</Text>
          </Button>
        </View>
      </View>
    )
  }
}

export default UpdateDesc
