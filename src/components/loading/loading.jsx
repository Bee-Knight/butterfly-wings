import React from 'react'
import {Text, View} from '@tarojs/components'

class Loading extends React.Component {

  render() {
    return (
      <View className="loading-view">
        <Text>loading</Text>
      </View>
    )
  }
}

export {Loading}
