import React from "react";
import {Image, View} from "@tarojs/components";

class DImageCard extends React.Component {

  render() {
    const {url, theme} = this.props

    return (
      <View>
        <View className="d-image-card-cover">
          {/*封面*/}
          <Image src={url} mode="scaleToFill" className="d-image-card-cover-image"/>
          {/*标题*/}
          <View className="d-image-card-theme">{theme}</View>
        </View>
      </View>
    )
  }
}

export {DImageCard}
