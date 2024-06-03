import React from 'react'
import {Text, View} from '@tarojs/components'
import validators from '../../utils/validator'

import './modecard.css'

class ModeCard extends React.Component {

  static defaultProps = {}

  render() {
    const {mode} = this.props
    if (validators.isStrNullOrEmpty(mode) || mode !== '私有') {
      return <View/>
    }

    return (
      <View className='mode-card-view'>
        <Text className='mode-card-text'>私</Text>
      </View>
    )
  }
}

export {ModeCard}
