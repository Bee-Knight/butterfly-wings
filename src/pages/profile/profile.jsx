import React from 'react'
import {Button, Image, View} from '@tarojs/components'
import './profile.css'
import '../../app.scss'
import api from '../../utils/api'
import requests from '../../utils/requtil'
import validators from "../../utils/validator";
import convertors from "../../utils/convertor";

class Profile extends React.Component {
  config = {
    navigationBarTitleText: '我的',
  }

  state = {
    avatar: '',
    nickname: '',
    user_desc: '',
    cover: ''
  }

  async componentDidMount() {
    await requests.get(api.getUserProfile(), {}).then((res) => {
      console.log(res.data)
      if (!validators.isNull(res.data) && validators.isTrue(res.data.success)) {
        let result = convertors.getUserProfile(res.data.data)
        console.log(result)
        if (!validators.isNull(result)) {
          this.setState({
            avatar: result.avatar,
            nickname: result.nickname,
            user_desc: result.desc,
            cover: result.bg
          })
        }
      }
    })

    this.onChooseAvatar = this.onChooseAvatar.bind(this)
    //todo change nickname, desc
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

  render() {
    const {avatar, nickname, user_desc, cover} = this.state

    let avatarButton
    if (process.env.TARO_ENV === 'weapp') {
      avatarButton =
        <Button className="profile-avatar-button" openType="chooseAvatar" onChooseAvatar={this.onChooseAvatar}>
          <Image mode='scaleToFill' src={avatar} className='profile-avatar-image'/>
        </Button>
    } else {
      avatarButton =
        <Image mode='scaleToFill' src={avatar} className='profile-avatar-image'/>
    }

    return (
      <View>
        <View className='profile-cover'>
          <Image mode='scaleToFill' src={cover} className='profile-cover-image'/>
        </View>
        <View className='profile-avatar'>
          {avatarButton}
          {/*<Image mode='scaleToFill' src={avatar} className='profile-avatar-image'/>*/}
        </View>
        <View className='profile-nickname'>
          {nickname}
        </View>
        <View className='profile-userdesc'>
          {user_desc}
        </View>
      </View>
    )
  }
}

export default Profile
