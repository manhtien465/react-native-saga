import React, { useState } from 'react'
import { Animated, View, Text } from 'react-native'

export const ProcessBar = ({ height, step, steps }) => {
  const [width, setWidth] = useState(0)
  const animateValue = React.useRef(new Animated.Value(-1000)).current
  const reactive = React.useRef(new Animated.Value(-1000)).current
  React.useEffect(() => {
    Animated.timing(animateValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true
    }).start()
  }, [])
  React.useEffect(() => {
    reactive.setValue(-width + (width * step) / steps)
  }, [step, width])
  return (
    <View style={{
      height,
      width: "80%",
      alignSelf: "center",
      backgroundColor: 'rgba(0,0,0,0.1)',
      borderRadius: height,
      overflow: "hidden"
    }}
      onLayout={(e) => {
        const newwidth = e.nativeEvent.layout.width
        setWidth(newwidth)
      }}
    >
      <Animated.View style={{
        height,
        borderRadius: height,
        backgroundColor: '#cc8c0c',
        transform: [{
          translateX: animateValue
        }]
      }}

      >
      </Animated.View>
      <Text style={{
        position: "absolute",
        left: 15,
        // alignSelf: "center"
      }}>Đã bán {step}/{steps}</Text>
    </View>
  )
}
