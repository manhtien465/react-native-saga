import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderProfile from './headerProfile';

const Profile = () => {
  const [token, settoken] = useState()
  const storeData = async (key, value) => {

    try {
      await AsyncStorage.setItem(key, value)
      // let newtoken = await AsyncStorage.getItem(key)
      settoken(value)
      console.log(token);
      // alert("sucess")
    } catch (e) {
      console.log(e);
    }
  }
  const getData = async (key) => {
    try {
      let newtoken = await AsyncStorage.getItem(key)
      settoken(newtoken)
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getData("token")
  }, [])
  return (
    <SafeAreaView>
      <HeaderProfile></HeaderProfile>
      <Text>{token}</Text>
      <Text>profile</Text>

      <Button title="save data" onPress={() => storeData("token", "toen1234")}></Button>
    </SafeAreaView>
  )
}
export default Profile;
