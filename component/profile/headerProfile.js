import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from "react-redux"
import { AntDesign } from '@expo/vector-icons';
const HeaderProfile = () => {
  const portrait = useSelector(state => state.layoutReducer.portrait)
  return (
    <View style={portrait ? { height: 100 } : { height: 70 }}>
      <View style={styles.container}>
        <View style={styles.leftButton}
        ><Text style={styles.leftButton__text}>
            Bắt đầu bán
          </Text>
        </View>
        <View style={styles.group__icon}>
          <AntDesign style={styles.icon} name="setting" size={24} color="#eb7434" />
          <AntDesign style={styles.icon} name="shoppingcart" size={24} color="#eb7434" onPress={() => props.navigation.navigate("cart")} />
          <AntDesign style={styles.icon} name="message1" size={24} color="#eb7434" />
        </View>
      </View>

      <View style={styles.container2}>
        <Text>row 2</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",


  },
  container2: {

  },
  leftButton: {
    width: "75%",
    padding: 10
  },
  leftButton__text: {
    //  padding: 10
  },
  group__icon: {
    flex: 1,
    flexDirection: "row"
  },
  icon: {
    marginHorizontal: 5
  }
})
export default HeaderProfile
