import React from 'react'
import { Image, View, Dimensions } from 'react-native';
import banner from "../../assets/banner.jpg"
const { width } = Dimensions.get("window")
let height = width * 0.35
const Banner = () => {
  return (
    <View>
      <Image source={banner} style={{ height, width, resizeMode: "cover" }}></Image>

    </View>
  )
}
export default Banner;
