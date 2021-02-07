import React, { useState, useEffect } from 'react'
// import { FlatList } from 'react-native-gesture-handler'
import CarouselItem from './carouselItem'
import { View, FlatList, Dimensions, StyleSheet, Animated, ScrollView, Text, Image } from "react-native"
import image1 from "../../assets/11.jpg"
import image2 from "../../assets/22.jpg"
import image3 from "../../assets/favicon.png"


const { width } = Dimensions.get("window")
let height = width * 0.6
const MyCarousel = () => {
  const [active, setActive] = useState(0)

  let data = [{
    id: "1",
    title: "ok",
    soure: image1
  },
  {
    id: "2",
    title: "mes",
    soure: image2
  }, {
    id: "3",
    title: "das",
    soure: image3
  }
  ]
  const changeImage = ({ nativeEvent }) => {

    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
    if (slide !== active) {
      setActive(slide)
    }
  }
  return (
    <View style={styles.Carousel}>
      <ScrollView
        horizontal
        scrollEventThrottle={0}
        pagingEnabled
        onScroll={changeImage}
        showsHorizontalScrollIndicator={false}
      // style={{ width, height }}
      >
        {
          data.map((item, key) => {
            return (
              <CarouselItem item={item} key={key}></CarouselItem>
            )

          })
        }
      </ScrollView>
      <View style={styles.wrapdot}>
        {data.map((index, key) => {
          return (
            <Text key={key} style={active === key ? styles.dotActive : styles.dot}>⬤</Text>
          )
        })
        }
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  Carousel: {

  },
  wrapdot: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center"

  },
  dotActive: {
    color: "white"
  },
  dot: {
    color: "#123451"
  }
});
export default MyCarousel
