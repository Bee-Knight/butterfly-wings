import Taro from '@tarojs/taro'
import React from 'react'
import {Image, View} from '@tarojs/components'

import './nav.css'
import navutil from "../../utils/navutil";
// import arrow from "../../images/arrow.png"
import arrow from "../../images/left.png"

class Nav extends React.Component {
  static defaultProps = {
    left: 20,
    title: '',
    visibility: 'visible'
  }

  handleNavigateBack = () => {
    if (Taro.getCurrentPages().length <= 1) {
      Taro.reLaunch({
        url: '/pages/index/index'
      })
    } else {
      Taro.navigateBack({
        delta: 1
      })
    }
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
          <View className="nav-title-view" style={`padding-top: ${top}px;height: ${height}px;`}>
            <View className="nav-title-text-view" style={`height: ${height}px;`}>
              <View style='font-size: 16px;'>{this.props.title}</View>
            </View>
          </View>
      }
      result =
        <View>
          <View className="nav-view" style={`height:${navBarHeight}px;`}>
            {/*标题*/}
            {titleView}

            {/*返回按钮*/}
            <View className="nav-back-view"
                  style={`padding-top:${top}px;height:${height}px;width: 100%;visibility:${this.props.visibility}`}
                  onClick={this.handleNavigateBack}>
              <View className="nav-back-image-view"
                    style={`width:${height}px;height:${height}px;margin-left:${this.props.left}px;`}>
                <Image style={`width: 75%;height: 75%;`} src={arrow}/>
              </View>
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
