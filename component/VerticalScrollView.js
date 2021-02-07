import React from 'react'
import { View, Text, FlatList } from 'react-native';

const VerticalScrollView = () => {
  let array = [
    {
      id: "1",
      todo: "word"
    }, {
      id: "2",
      todo: "hoc",
    }, {
      id: "3",
      todo: "learn"
    }
  ]
  return (

    <FlatList data={array}
      renderItem={({ item, index, separators }) => (
        <View>
            
          <Text key={item.key} style={{ color: "black" }}>{index}</Text>
        </View>

      )}
    >

    </FlatList>

  )
}
export default VerticalScrollView;
