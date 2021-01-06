import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './components/Home';
import TestScreen from './TestScreen';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TestScreen" component={TestScreen} />
    </Stack.Navigator>
  );
}
