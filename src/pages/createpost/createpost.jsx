import React from 'react'
import {View} from '@tarojs/components'
import {AtButton, AtForm, AtInput} from 'taro-ui'

import './createpost.css'

class CreatePost extends React.Component {
  config = {
    navigationBarTitleText: '创建',
  }

  state = {
    data: {},
  }

  handleChange (value) {
    this.setState({
      value
    })
  }

  onSubmit (event) {
    console.log(this.state.value)
  }

  onReset (event) {
    this.setState({
      value: '',
    })
  }

  async componentDidMount() {
  }

  render() {
    const {loading, posts, images} = this.state
    return (
      <View>
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
          onReset={this.onReset.bind(this)}
        >
          <AtInput
            name='value'
            title='文本'
            type='text'
            placeholder='单行文本'
            value={this.state.value}
            onChange={this.handleChange.bind(this, 'value')}
          />
          <AtInput
            name='value'
            title='文本'
            type='text'
            placeholder='单行文本'
            value={this.state.value}
            onChange={this.handleChange.bind(this, 'value')}
          />
          <AtButton formType='submit'>提交</AtButton>
          <AtButton formType='reset'>重置</AtButton>
        </AtForm>
      </View>
    )
  }
}

export default CreatePost
