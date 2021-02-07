import React from 'react'
import { Button, ScrollView, Text, View, StyleSheet, Dimensions } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const { width } = Dimensions.get("window")
let height = width * 0.5
export const Menu = () => {
  return (
    <ScrollView
      horizontal
      scrollEventThrottle={0}
      pagingEnabled
      showsHorizontalScrollIndicator={true}
      style={{ height, width }}
    >
      <View style={styles.container}>
        <View style={styles.wrapButton}>

          <View style={styles.button}>
            <Entypo style={styles.icon} name="flash" size={24} color="black" />
            <Text style={styles.textButton} numberOfLines={2}>
              khung giờ săn sale
          </Text>
          </View>

          <View style={styles.button}>
            <Entypo style={styles.icon} name="shopping-cart" size={24} color="black" />
            <Text style={styles.textButton} >
              Shopee Mart
          </Text>
          </View>



          <View style={styles.button}>
            <Feather style={styles.icon} name="truck" size={24} color="black" />
            <Text style={styles.textButton} >
              FreeShip
          </Text>
          </View>
          <View style={styles.button}>
            <Feather style={styles.icon} name="truck" size={24} color="black" />
            <Text style={styles.textButton} >
              FreeShip
          </Text>
          </View>
          <View style={styles.button}>
            <Feather style={styles.icon} name="truck" size={24} color="black" />
            <Text style={styles.textButton} >
              FreeShip
          </Text>
          </View>
          <View style={styles.button}>
            <Feather style={styles.icon} name="truck" size={24} color="black" />
            <Text style={styles.textButton} >
              FreeShip
          </Text>
          </View>
        </View>


        <View style={styles.wrapButton}>

          <View style={styles.button}>
            <Entypo style={styles.icon} name="flash" size={24} color="black" />
            <Text style={styles.textButton} numberOfLines={2}>
              khung giờ săn sale
        </Text>
          </View>

          <View style={styles.button}>
            <Entypo style={styles.icon} name="shopping-cart" size={24} color="black" />
            <Text style={styles.textButton} >
              Shopee Mart
        </Text>
          </View>



          <View style={styles.button}>
            <Feather style={styles.icon} name="truck" size={24} color="black" />
            <Text style={styles.textButton} >
              FreeShip
        </Text>
          </View>
          <View style={styles.button}>
            <Feather style={styles.icon} name="truck" size={24} color="black" />
            <Text style={styles.textButton} >
              FreeShip
        </Text>
          </View>
          <View style={styles.button}>
            <Feather style={styles.icon} name="truck" size={24} color="black" />
            <Text style={styles.textButton} >
              FreeShip
          </Text>
          </View>
          <View style={styles.button}>
            <Feather style={styles.icon} name="truck" size={24} color="black" />
            <Text style={styles.textButton} >
              FreeShip
          </Text>
          </View>
        </View>

      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "column",
    // zIndex: 100
  },
  wrapButton: {
    height: 30,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    alignContent: "stretch"

  },
  button: {
    width: 100,
    fontSize: 12,
    alignSelf: "baseline",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  icon: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderColor: "#a87932",
    borderWidth: 1,
    borderRadius: 15,
    color: "#a87932"
  },
  textButton: {
    textAlign: 'center',
  }
})