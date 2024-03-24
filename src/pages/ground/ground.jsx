import React from 'react'
import {Text, View} from '@tarojs/components'
import './ground.css'

class Ground extends React.Component {
  config = {
    navigationBarTitleText: '发现',
  }

  render() {
    return (
      <View className='ground'>
        <Text>Ground!</Text>
      </View>
    )
  }
}

export default Ground
