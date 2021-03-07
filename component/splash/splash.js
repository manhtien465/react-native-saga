import React from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'

const Splash = (props) => {
  console.log(props.navigation);
  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.replace("Main")

    }, 1000);
  }, [])
  return (

    <View style={styles.main}>
      <SafeAreaView style={styles.SafeView}>

        <Text style={styles.animate}>Vinall</Text>
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#de9518"
  },
  SafeView: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center"
  },
  animate: {
    fontSize: 30,
    fontWeight: "600",
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center"
  }
})
export default Splash
