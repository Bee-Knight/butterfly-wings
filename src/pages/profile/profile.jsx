import React from 'react'
import {Button, Image, View} from '@tarojs/components'
import './profile.css'
import '../../app.scss'
import mocks from '../../utils/mock'

class Profile extends React.Component {
  config = {
    navigationBarTitleText: '我的',
  }

  state = {
    avatar: '',
    nickname: '',
    user_desc: '',
    cover: 'https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/profile-cover.png'
  }

  async componentDidMount() {
    // await requests.get(api.getPostList(), {}).then((res) => {
    //   console.log(res)
    // })
    let {avatar, nickname, desc} = mocks.getMockUserProfile()
    if (avatar === undefined || avatar === '') {
      avatar = "https://pic-artastic.oss-cn-shanghai.aliyuncs.com/flower/deafault-avatar.jpeg"
    }
    if (nickname === undefined || nickname === '') {
      nickname = "微信用户"
    }
    this.setState({
      avatar: avatar,
      nickname: nickname,
      user_desc: desc
    })
  }

  onChooseAvatar(e) {
    console.log(e)
    const {avatarUrl} = e.detail
    if (avatarUrl === undefined || avatarUrl === '') {
      return
    }

    this.setState({
      avatar: avatarUrl
    })
    //todo send request to update
  }

  render() {
    const {avatar, nickname, user_desc, cover} = this.state

    let avatarButton
    if (process.env.TARO_ENV === 'weapp') {
      avatarButton =
        <Button className="profile-avatar-button" openType="chooseAvatar" onChooseAvatar="onChooseAvatar">
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
