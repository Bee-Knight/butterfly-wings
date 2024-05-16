import Taro from '@tarojs/taro'
import React from 'react'
import {Image, View} from '@tarojs/components'

import './nav.css'
import navutil from "../../utils/navutil";
import arrow from "../../images/arrow.png"

class Nav extends React.Component {
  static defaultProps = {
    left: 20,
  }

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
      const {top, height} = Taro.getMenuButtonBoundingClientRect()
      result =
        <View style={`height: ${navBarHeight}px;width: 100%`}>
          <View style={`padding-top: ${top}px;height: ${height}px;width: 100%`} onClick={this.handleNavigateBack}>
            <Image style={`width: ${height}px;height: ${height}px;margin-left: ${this.props.left}px;`} src={arrow}/>
          </View>
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
