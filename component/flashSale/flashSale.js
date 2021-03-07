import React from 'react'
import { View, Text, ScrollView, Dimensions, StyleSheet, Image } from 'react-native'
import item from "../../assets/item.jpg"
import { ProcessBar } from './processBar'
import { AntDesign } from '@expo/vector-icons';
const { width } = Dimensions.get("window")
let height = width * 0.5
const FlashSale = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerMain}>
          <Text style={styles.headerMain__text}>FLASH SALE</Text>
          <Text>10/11/2020</Text>

        </View>
        <View style={styles.headerbutton}>
          <Text style={styles.headerButton__text}> xem tất cả {'>'} </Text>

        </View>
      </View>
      <ScrollView
        horizontal
        scrollEventThrottle={0}
        pagingEnabled
        showsHorizontalScrollIndicator={true}
      // style={{ height, width }}
      >
        <View style={styles.item}>
          <View style={styles.item__box}>
            <Image style={styles.item__box__image} source={item} />
            <Text style={styles.item__box__price}> đ8000</Text>
            <ProcessBar steps={10} step={1} height={20}></ProcessBar>
          </View>
          <View style={styles.item__box}>
            <Image style={styles.item__box__image} source={item} />
            <Text style={styles.item__box__price}> đ8000</Text>
            <ProcessBar steps={10} step={2} height={20}></ProcessBar>
          </View>
          <View style={styles.item__box}>
            <Image style={styles.item__box__image} source={item} />
            <Text style={styles.item__box__price}> đ8000</Text>
            <ProcessBar steps={10} step={4} height={20}></ProcessBar>
          </View>
          <View style={styles.item__box}>
            <Image style={styles.item__box__image} source={item} />
            <Text style={styles.item__box__price}> đ8000</Text>
            <ProcessBar steps={50} step={9} height={20}></ProcessBar>
          </View>
          <View style={styles.item__box}>
            <AntDesign style={styles.item__box__icon} name="rightcircle" size={24} color="black" />
            <Text style={styles.item__box__text}> Xem Tất Cả </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#c2bbb6",
    borderTopWidth: 1
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
    height: 60,

  },
  headerMain: {
    width: "75%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",

  },
  headerMain__text: {
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: "#de6d16",
    fontSize: 20
  },
  headerbutton: {
    width: "25%"
  },
  headerButton__text: {
    color: "#595755"
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-evenly"

  },
  item__box: {
    width: 150,
    height: 150,
    marginHorizontal: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  item__box__image: {
    height: 150,
    width: 150
  },
  item__box__price: {
    textAlign: "center",
    marginTop: 6,
    color: "#cc290c",
    fontWeight: "bold",
  },
  item__box__icon: {
    color: "#de9518"
  },
  item__box__text: {
    color: "#de9518"
  }
})
export default FlashSale
