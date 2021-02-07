import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Banner from '../banner/banner';
import Carousel from '../carousel/carousel';
import FlashSale from '../flashSale/flashSale';
import Header from "../header/header"
import { Menu } from '../menu/menu';
import TopSearch from '../topSearch/topSearch';

const MainLayout = () => {
  return (
    <ScrollView>

      <View>
        <Header ></Header>
        <Carousel></Carousel>
        <Menu></Menu>
        <Banner></Banner>
        <FlashSale></FlashSale>
        <TopSearch></TopSearch>
        {/* <Text>Main layout</Text> */}
      </View>
    </ScrollView>
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
