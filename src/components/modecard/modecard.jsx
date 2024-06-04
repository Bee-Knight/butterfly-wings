import React from 'react'
import {Text, View} from '@tarojs/components'
import validators from '../../utils/validator'

import './modecard.css'

class ModeCard extends React.Component {

  static defaultProps = {
    mode: ''
  }

  render() {
    const {mode} = this.props
    if (validators.isStrNullOrEmpty(mode)) {
      return <View/>
    }

    return (
      <View className='mode-card-view'>
        <Text className='mode-card-text'>{mode}</Text>
      </View>
    )
  }
}

export {ModeCard}
