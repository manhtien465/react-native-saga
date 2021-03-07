import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
const Header = (props) => {
  const [search, setSearch] = useState("")
  return (
    <View style={styles.main}>
      <View style={styles.searchbar}>
        <EvilIcons style={styles.iconSearch} name="search" size={24} color="#eb7434" />
        <TextInput
          style={styles.textInput}
          onChangeText={text => setSearch(text)}
          placeholder="search in here" />
      </View>
      <View style={styles.icon}>

        <AntDesign style={styles.cart} name="shoppingcart" size={24} color="#eb7434" onPress={() => props.navigation.navigate("cart")} />

        <AntDesign style={styles.message} name="message1" size={24} color="#eb7434" />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: 40,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: "center"

  },
  textInput: {
    width: "90%",
    paddingLeft: 10,
  },
  iconSearch: {
    paddingLeft: 7,
    alignSelf: "center",
    color: "#eb7434",
    width: "10%"

  },
  searchbar: {
    backgroundColor: "white",
    width: "80%",
    height: 40,
    // paddingLeft: 20,
    // paddingRight: 20,
    // paddingBottom: 15,
    // paddingTop: 15,
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignContent: "center"
  },
  icon: {
    // flex: 1
    width: "15%",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-around",
    alignContent: "center"
  },
  cart: {
    alignSelf: 'center'

  },
  message: {
    alignSelf: 'center'
  }
});
export default Header
