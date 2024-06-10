import React from 'react'
import {Button, Input, Text, Textarea, View} from '@tarojs/components'
import './updatedesc.css'
import '../../app.scss'
import navutil from "../../utils/navutil";
import validators from '../../utils/validator'
import requests from '../../utils/requtil'
import api from '../../utils/api'
import Taro from '@tarojs/taro'
import {getCurrentInstance} from "@tarojs/runtime";
import {Nav} from '../../components/nav/nav'
import toasts from "../../utils/toastutil";

class UpdateDesc extends React.Component {
  config = {
    navigationBarTitleText: '设置简介',
  }

  state = {
    desc: '',
    maxlength: 50,
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
    const {desc, df} = inst.router.params
    if (!validators.isStrNullOrEmpty(df) && df === 'false') {
      this.setState({
        desc: desc
      })
    }
    this.handleChange = this.handleChange.bind(this)
    this.onConfirm = this.onConfirm.bind(this)
  }

  handleChange(e) {
    if (!validators.isNull(e.detail)) {
      let desc = validators.strLength(e.detail.value) > this.state.maxlength
        ? e.detail.value.slice(0, this.state.maxlength) : e.detail.value
      this.setState({
        desc: desc
      })
    }
  }

  onConfirm(e) {
    let desc = validators.isStrNullOrEmpty(this.state.desc) ? '' : this.state.desc
    requests.post(api.getModifyUser(), {
      introduction: desc
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
        {/*{nav}*/}
        <Nav title='修改简介'/>
        <View className='user-desc-update'>
          <Textarea
            className='minput-desc'
            type='text'
            value={this.state.desc}
            onInput={this.handleChange}
            maxlength={this.state.maxlength}
            showConfirmBar={this.state.showConfirmBar}
            focus
          />
          <View className='minput-desc-limit'>
            {validators.isStrNullOrEmpty(this.state.desc) ? 0 : this.state.desc.length}/{this.state.maxlength}
          </View>
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
