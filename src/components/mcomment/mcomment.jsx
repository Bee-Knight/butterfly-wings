import React from 'react'
import {Textarea, View} from '@tarojs/components'

import './mcomment.css'

class MComment extends React.Component {

  state = {
    bottomHeight: 0,
    showConfirmBar: false,
    adjustPosition: false,
    cursorSpacing: 0,
    maxLen: 100,
    autoHeight: false,
    autoFocus: false
  }

  componentDidMount() {
    this.bindFocus = this.bindFocus.bind(this)
    this.bindBlur = this.bindBlur.bind(this)
  }

  bindFocus(e) {
    this.setState({
      bottomHeight: e.detail.height
    })
  }

  bindBlur(e) {
    this.setState({
      bottomHeight: 0
    })
  }

  render() {
    return (
      <View className="mcomment" style={`bottom:${this.state.bottomHeight}px;`}>
        <Textarea
          className="mcomment-input"
          showConfirmBar={this.state.showConfirmBar}
          autoHeight={this.state.autoHeight}
          autoFocus={this.state.autoFocus}
          cursorSpacing={this.state.cursorSpacing}
          placeholder="快来飞一句吧～"
          adjustPosition={this.state.adjustPosition}
          maxlength={this.state.maxLen}
          onFocus={this.bindFocus}
          onBlur={this.bindBlur}
        />
        <View className="mcomment-button">
          发送
        </View>
      </View>
    )
  }
}

export {MComment}
