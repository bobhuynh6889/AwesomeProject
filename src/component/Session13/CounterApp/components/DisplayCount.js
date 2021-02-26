import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

export default function DisplayCount() {
  const count = useSelector((state) => state.counterReducer.count);
  return (
    <View>
      <Text style={{color: 'red', fontSize: 40}}>DISPLAY COUNT: {count}</Text>
    </View>
  );
}
