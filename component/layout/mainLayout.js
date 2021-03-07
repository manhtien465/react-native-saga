import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Banner from '../banner/banner';
import Carousel from '../carousel/carousel';
import FlashSale from '../flashSale/flashSale';
import Header from "../header/header"
import { Menu } from '../menu/menu';
import TopSearch from '../topSearch/topSearch';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks"
import { useDispatch, useSelector } from "react-redux"
import { ListItem } from '../listItem/listItem';
const MainLayout = (props) => {
  const dispatch = useDispatch()

  const { screen, window } = useDimensions();
  const { portrait } = useDeviceOrientation()
  // const width = useSelector(state => state.layoutReducer.width)
  const portrait1 = useSelector(state => state.layoutReducer.portrait)
  console.log(useDeviceOrientation());
  console.log(useDimensions());
  useEffect(() => {
    if (portrait !== portrait1) {

      dispatch({ type: "LAYOUTCHANGE", payload: { width: screen.width, height: screen.height, portrait } })
    }
  }, [portrait])
  return (
    <SafeAreaView style={{
      width: screen.width, height: screen.height
    }}>

      <ScrollView >

        <View>
          <Header navigation={props.navigation}></Header>
          <Carousel></Carousel>
          <Menu></Menu>
          <Banner></Banner>
          <FlashSale></FlashSale>
          <TopSearch></TopSearch>
          <ListItem></ListItem>
        </View>
      </ScrollView >

    </SafeAreaView >
  )
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Platform.OS === "android" ? 50 : 0,
  },

});

export default MainLayout;
