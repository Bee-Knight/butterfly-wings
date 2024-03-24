import {Image, Swiper, SwiperItem} from '@tarojs/components'
import React from "react";

import './mswiper.css'

class Mswiper extends React.Component {
  render() {
    const {images} = this.props
    return (
      <Swiper
        className='swiper'
        indicatorColor='#ffffff'
        indicatorActiveColor='#ffc062'
        circular
        indicatorDots
        autoplay>
        {
          images.map(image =>
            <SwiperItem>
              <Image src={image} mode="scaleToFill"/>
            </SwiperItem>
          )
        }
      </Swiper>
    )
  }
}

export default Mswiper
