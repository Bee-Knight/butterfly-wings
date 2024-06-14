import React from 'react'
import {Button, Image, View} from '@tarojs/components'
import './profile.css'
import '../../app.scss'
import api from '../../utils/api'
import requests from '../../utils/requtil'
import validators from "../../utils/validator";
import convertors from "../../utils/convertor";
import Taro from "@tarojs/taro";
import refreshtokenutil from "../../utils/refreshtokenutil";
import base64 from "../../utils/base64util"

class Profile extends React.Component {
  config = {
    navigationBarTitleText: '我的',
  }

  state = {
    avatar: '',
    nickname: '',
    user_desc: '',
    cover: '',
    default_nn: false,
    default_desc: false
  }

  async load(refreshToken) {
    await requests.get(api.getUserProfile(), {}).then((res) => {
      if (validators.isTrue(refreshToken)) {
        refreshtokenutil.checkResultAndRefreshToken(res)
      }
      if (!validators.isNull(res.data) && validators.isTrue(res.data.success)) {
        let result = convertors.getUserProfile(res.data.data)
        if (!validators.isNull(result)) {
          this.setState({
            avatar: result.avatar,
            nickname: result.nickname,
            user_desc: result.desc,
            cover: result.bg,
            default_nn: result.default_nn,
            default_desc: result.default_desc
          })
        }
      }
    })
  }

  async componentDidShow() {
    await this.load(true)
  }

  async componentDidMount() {
    // await this.load()

    this.onChooseAvatar = this.onChooseAvatar.bind(this)
    this.handleNavigateUpdateNickname = this.handleNavigateUpdateNickname.bind(this)
    this.handleNavigateUpdateDesc = this.handleNavigateUpdateDesc.bind(this)

    Taro.eventCenter.on('LOGIN', (res) => {
      this.load(false)
    })
  }

  onChooseAvatar(e) {
    const {avatarUrl} = e.detail
    if (validators.isStrNullOrEmpty(avatarUrl)) {
      return
    }

    console.log(avatarUrl)
    this.setState({
      avatar: avatarUrl
    })

    requests.post(api.getModifyUser(), {
      avatar: avatarUrl
    }).then((res) => {
      console.log(res)
    })
  }

  handleNavigateUpdateNickname = () => {
    Taro.navigateTo({
      url: '/pages/updatenickname/updatenickname?nickname=' + base64.weEncode(this.state.nickname) + '&df=' + this.state.default_nn,
    })
  }

  handleNavigateUpdateDesc = () => {
    Taro.navigateTo({
      url: '/pages/updatedesc/updatedesc?desc=' + base64.weEncode(this.state.user_desc) + '&df=' + this.state.default_desc,
    })
  }

  render() {
    const {avatar, nickname, user_desc, cover} = this.state

    let avatarView = ''
    if (!validators.isStrNullOrEmpty(avatar)) {
      if (process.env.TARO_ENV === 'weapp') {
        avatarView =
          <View className='profile-avatar'>
            <Button className="profile-avatar-button" openType="chooseAvatar" onChooseAvatar={this.onChooseAvatar}>
              <Image mode='scaleToFill' src={avatar} className='profile-avatar-image'/>
            </Button>
          </View>
      } else {
        avatarView =
          <View className='profile-avatar'>
            <Image mode='scaleToFill' src={avatar} className='profile-avatar-image'/>
          </View>
      }
    }

    return (
      <View>
        <View className='profile-cover'>
          <Image mode='scaleToFill' src={cover} className='profile-cover-image'/>
        </View>

        {avatarView}

        <View className='profile-nickname' onClick={this.handleNavigateUpdateNickname}>
          {nickname}
        </View>

        <View className='profile-userdesc' onClick={this.handleNavigateUpdateDesc}>
          {user_desc}
        </View>
      </View>
    )
  }
}

export default Profile
