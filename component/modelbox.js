import React, { useRef } from 'react'
import { Button, Platform, Text, View, StyleSheet } from 'react-native'
import Modal from 'react-native-modalbox'
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
const Tab = createBottomTabNavigator();


const Hitagana = () => {
  return (
    <View>

      <Text>
        hitagana
    </Text>
    </View>
  )
}
const Katagana = () => {
  return (
    <View>

      <Text>
        Katagana
    </Text>
    </View>
  )
}

const Modelbox = ({ navigation }) => {
  const { width } = useDimensions();
  console.log(useDeviceOrientation());
  console.log(useDimensions());
  const ref = useRef()

  return (
    <View>

      <Text> model box</Text>

      <Button title="change" onPress={() => { navigation.navigate("Home") }}></Button>

      <Tab.Navigator styles={styles.tabBar} tabBarOptions={{
        labelStyle: {
          fontSize: 34,

        },
        activeTintColor: "red",
        activeBackgroundColor: "yellow",
        inactiveTintColor: "blue",
        inactiveBackgroundColor: "gray"

      }}
      >
        <Tab.Screen name="hitagana" component={Hitagana} options={{
          tabBarLabel: "hitagana!!!"
        }
        }

        />
        <Tab.Screen name="Katagana" component={Katagana} />
      </Tab.Navigator>

    </View>
  )
}
const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
});
export default Modelbox