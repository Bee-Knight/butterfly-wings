import React from "react"
import {Image, View} from "@tarojs/components"
import './dimagecard.css'

class DImageCard extends React.Component {

  render() {
    const {url, theme} = this.props

    return (
      <View className="d-image-card-cover">
        {/*标题*/}
        <View className="d-image-card-theme">{theme}</View>

        {/*封面*/}
        <Image src={url} className="d-image-card-cover-image" mode="scaleToFill"/>
      </View>
    )
  }
}

export {DImageCard}
