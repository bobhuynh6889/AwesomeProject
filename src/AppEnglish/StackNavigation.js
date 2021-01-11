import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './components/Home';
import TestScreen2 from './TestScreen2';
import FinishScreen from './FinishScreen';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TestScreen2" component={TestScreen2} />
      <Stack.Screen name="FinishScreen" component={FinishScreen} />
    </Stack.Navigator>
  );
}
