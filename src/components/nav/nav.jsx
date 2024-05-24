import Taro from '@tarojs/taro'
import React from 'react'
import {Image, View} from '@tarojs/components'

import './nav.css'
import navutil from "../../utils/navutil";
import arrow from "../../images/arrow.png"

class Nav extends React.Component {
  static defaultProps = {
    left: 20,
    title: ''
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
      const {statusBarHeight, navBarHeight} = navinfo
      const {top, height} = Taro.getMenuButtonBoundingClientRect()
      let titleView = <View/>
      if (this.props.title !== '') {
        titleView =
          <View
            style={`padding-top: ${top}px;height: ${height}px;width: 100%;position: absolute;z-index: 99;pointer-events: none;`}>
            <View
              style={`display:flex;height: ${height}px;width: 100%;align-items: center;text-align: center;justify-content: center;`}>
              <View style='font-size: 16px;'>{this.props.title}</View>
            </View>
          </View>
      }
      result =
        <View>
          <View
            style={`height: ${navBarHeight}px;width: 100%;position:fixed;display:flex;background-color:white;z-index: 99`}>
            {/*标题*/}
            {titleView}

            {/*返回按钮*/}
            <View style={`padding-top: ${top}px;height: ${height}px;width: 100%;`} onClick={this.handleNavigateBack}>
              <Image style={`width: ${height}px;height: ${height}px;margin-left: ${this.props.left}px;`} src={arrow}/>
            </View>
          </View>
          {/*填充*/}
          <View style={`height: ${navBarHeight}px;width: 100%;`}/>
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
