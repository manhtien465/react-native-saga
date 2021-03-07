import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { itemActions } from '../../app/store/ducks/itemReducer'
import item1 from "../../assets/item.jpg"
import { useDispatch, useSelector } from "react-redux"
export const ListItem = ({ navigation }) => {
  const dispatch = useDispatch()
  const item = useSelector(state => state.itemReducer.item)
  console.log(item);
  useEffect(() => {
    dispatch(itemActions.loadingitem(1, "_id"))
  }, [])
  return (
    <View style={styles.item}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.header__left}>
            <Text> Gợi ý hôm nay</Text>
          </View>
          <View style={styles.header__right}>
            <Text onPress={() => navigation.natigate("/xemthem")}> xem thêm </Text>
          </View>
        </View>
        {/* nen su dung listView */}
        <View style={styles.item__main}>
          {
            item && item.map((v, i) => {
              return (
                <View style={styles.item__main__wrapper} key={i}>
                  <Image style={styles.image} source={{ uri: v.tier_variations[0].images[0].replace("public", "http://localhost:4000") }}></Image>
                  <Text style={styles.name} >{v.name} rhewirfhdsiofhyaiosdfhpwhyfiooewgfrtewgtiuew</Text>
                  {/* <Text style={styles.name}> {v.priceMin}-{v.priceMax}</Text> */}
                </View>
              )
            })
          }
          <View style={styles.item__main__wrapper}>
            <Image style={styles.image} source={item1}></Image>
            <Text style={styles.name} >name dai ra de tran ta bviern  sdfa sd asdfd sfais</Text>
          </View>

        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  item: {
    // marginTop: ,
    borderColor: "#c2bbb6",
    // borderTopWidth: 1
  },
  header: {
    display: 'flex',
    flexDirection: "row",
    alignSelf: 'center',
    justifyContent: "flex-start"
  },
  header__left: {
    width: "75%",
    padding: 10
  },
  header__right: {
    padding: 10,
    display: 'flex',
    justifyContent: "flex-end"
  },
  item__main__wrapper: {
    width: "50%",
    paddingHorizontal: 10,

  },
  item__main: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  image: {
    resizeMode: "cover",
    height: 150,
    width: "100%"

  },
  name: {
    textAlign: "center",
  }
})
