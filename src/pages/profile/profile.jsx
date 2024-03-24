import React from 'react'
import {Text, View} from '@tarojs/components'
import './profile.css'

class Profile extends React.Component {
  config = {
    navigationBarTitleText: '我的',
  }

  render() {
    return (
      <View className='profile'>
        <Text>My Profile!</Text>
      </View>
    )
  }
}

export default Profile
