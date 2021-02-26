import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

// COMPONENT
import Counter from './components/Counter';
import DisplayCount from './components/DisplayCount';

export default function index() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello</Text>
      <Counter />
      <DisplayCount />
    </SafeAreaView>
  );
}
