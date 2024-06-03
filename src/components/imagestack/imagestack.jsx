import React from 'react'
import {Image, View} from '@tarojs/components'
import validators from '../../utils/validator'

import './imagestack.css'

class ImageStack extends React.Component {

  static defaultProps = {
    size: 28,
    padding: 8,
  }

  render() {
    const {size, padding, images} = this.props
    if (validators.isArrayNullOrEmpty(images)) {
      return <View/>
    }

    let len = images.length
    let element = []
    images.map((url, index) => {
      let item = <View style={`transform:translateX(${-index * padding}px)`}>
        <Image src={url}
               style={`display: inline-block;width: ${size}px;height: ${size}px;border-radius: 50%;z-index:${index}`}
               mode='aspectFill'
        />
      </View>
      element.push(item)
    })
    return (
      <View
        style={`overflow:hidden; width: ${len * size - padding * (len - 1)}px;height: ${size}px;position: relative;display: flex;flex-direction: row;justify-content: flex-start;box-sizing: border-box;`}>
        {element}
      </View>
    )
  }
}

export {ImageStack}
