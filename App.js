// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VerticalScrollView from './component/VerticalScrollView';
import Modelbox from './component/modelbox';
import { Provider } from 'react-redux';
import store from './app/store/store';
import { Platform, SafeAreaView, Image, Modal, ScrollView, FlatList, TouchableWithoutFeedback, StyleSheet, Text, TextInput, View, ActivityIndicator, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
import MainLayout from './component/layout/mainLayout';
// import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks"

const Stack = createStackNavigator();

export default function App() {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainLayout} />
          <Stack.Screen
            name="Home"
            component={VerticalScrollView}
            options={{ title: 'Welcome' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
