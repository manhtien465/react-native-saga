import React from 'react'
import { View, Text, ScrollView, Dimensions, StyleSheet, Image } from 'react-native'
import item from "../../assets/item.jpg"
import { AntDesign } from '@expo/vector-icons';
const { width } = Dimensions.get("window")
let height = width * 0.6
const TopSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerMain}>
          <Text style={styles.headerMain__text}>TÌM KIẾM HÀNG ĐẦU </Text>
        </View>
        <View style={styles.headerbutton}>
          <Text style={styles.headerButton__text}> xem thêm {'>'} </Text>

        </View>
      </View>
      <ScrollView
        horizontal
        scrollEventThrottle={0}
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        style={{ height, width }}>
        <View style={styles.item}>
          <View style={styles.item__box}>
            <Image style={styles.item__box__image} source={item} />
            <Text style={styles.item__box__name}> Đồng hồ Rolex</Text>
            <Text style={styles.item__box__sold}> Đã bán 150k</Text>

          </View>
          <View style={styles.item__box}>
            <Image style={styles.item__box__image} source={item} />
            <Text style={styles.item__box__name}> Đồng hồ Rolex</Text>
            <Text style={styles.item__box__sold}> Đã bán 150k</Text>
          </View>
          <View style={styles.item__box}>
            <Image style={styles.item__box__image} source={item} />
            <Text style={styles.item__box__name}> Đồng hồ Rolex</Text>
            <Text style={styles.item__box__sold}> Đã bán 150k</Text>
          </View>
          <View style={styles.item__box}>
            <Image style={styles.item__box__image} source={item} />
            <Text style={styles.item__box__name}> Đồng hồ Rolex</Text>
            <Text style={styles.item__box__sold}> Đã bán 150k</Text>
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
    // borderColor: "#c2bbb6",
    // borderWidth: 1
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
    //alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",

  },
  item__box__image: {
    height: 150,
    width: 150
  },
  item__box__name: {
    paddingHorizontal: 3,
    marginTop: 6,
    color: "#cc290c",
    fontWeight: "bold",
  },
  item__box__sold: {
    paddingHorizontal: 3,
    marginTop: 3,
    color: "#6e6b67",
    fontWeight: "bold",
  },
  item__box__icon: {
    color: "#de9518"
  },
  item__box__text: {
    color: "#de9518"
  }
})
export default TopSearch