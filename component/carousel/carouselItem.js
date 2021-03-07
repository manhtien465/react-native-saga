import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from "react-native"
const { width } = Dimensions.get("window")
let height = width * 0.6
const CarouselItem = (props) => {

  return (

    <Image
      key={props.keys}
      source={props.item.soure}
      style={styles.image}
    >

    </Image>

  )
}
const styles = StyleSheet.create({
  image: {
    width,
    height,
    resizeMode: "cover"
  },
});
export default CarouselItem;
