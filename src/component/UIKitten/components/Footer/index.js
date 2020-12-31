import React from 'react';
import {View, Text} from 'react-native';

export default function index() {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, backgroundColor: 'pink'}}></View>
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
      <View style={{flex: 1, backgroundColor: 'black'}}></View>
    </View>
  );
}
