// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VerticalScrollView from './component/VerticalScrollView';
import Modelbox from './component/modelbox';
import { Provider } from 'react-redux';
import store from './app/store/store';
import { Platform, SafeAreaView, Image, Modal, Button, ScrollView, FlatList, TouchableWithoutFeedback, StyleSheet, Text, TextInput, View, ActivityIndicator, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
import MainLayout from './component/layout/mainLayout';
import Splash from './component/splash/splash';
import MainTabbar from './component/mainTabbar/mainTabbar';
import Cart from './component/cart/cart';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function App() {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          //headerShown: false,
          gestureDirection: "horizontal",
          gestureEnabled: true,
          cardStyleInterpolator: forFade,
          // transitionSpec: {
          //   open: config,
          //   close: config
          // }
        }}>
          <Stack.Screen name="Splash" component={Splash} options={{ headerTitle: "Splash", headerShown: false }} ></Stack.Screen>
          <Stack.Screen name="Main" component={MainTabbar} options={{ headerTitle: "Main", headerShown: false }} />

          <Stack.Screen name="cart" component={Cart} options={{
            title: 'Cart',
            headerRight: () => (
              <AntDesign style={styles.message} name="message1" size={24} color="#eb7434" />
            )
          }}

          />

          <Stack.Screen
            name="Home"
            component={Modelbox}
            options={{ title: 'Welcome' }}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  message: {
    color: "#eb7434",
  }
});
