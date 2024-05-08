import Taro from '@tarojs/taro'
import React from 'react'
import {View} from '@tarojs/components'

import './nav.css'
import navutil from "../../utils/navutil";

class Nav extends React.Component {
  handleNavigateBack = () => {
    Taro.navigateBack({
      delta: 1
    })
  }

  render() {
    let result = <View/>
    let navinfo = navutil.getNavInfo()
    if (navinfo) {
      const {id, statusBarHeight, navBarHeight} = navinfo
      result =
        <View style={`height: ${navBarHeight}px`}>
          <View style={`height: ${statusBarHeight}px`}/>
        </View>
    }

    return (
      <View>
        {result}
      </View>
    )
  }
}

export {Nav}
