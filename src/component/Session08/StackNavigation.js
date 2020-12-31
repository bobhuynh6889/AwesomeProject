import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeWala from '../../wala/WelcomeWala';
import Started from '../../wala/Started';
import LoginWala from '../../wala/LoginWala';
import Product1Screen from './screens/Product1Screen';
import Product1DetailScreen from './screens/Product1DetailScreen';
import Product2Screen from './screens/Product2Screen';
import Product2DetailScreen from './screens/Product2DetailScreen';
import TabNavigator from './TabNavigator';
import LoginScreen from './screens/LoginScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      {/* <Stack.Screen
          options={{headerShown: false}}
          name="Welcome"
          component={WelcomeWala}
        />
        <Stack.Screen name="Started" component={Started} />
        <Stack.Screen name="Welcomeback" component={LoginWala} /> */}
      <Stack.Screen name="Product1" component={Product1Screen} />
      <Stack.Screen
        name="Product1Detail"
        component={Product1DetailScreen}
        options={{title: 'Product 1 Detail'}}
      />
      <Stack.Screen name="Product2" component={Product2Screen} />
      <Stack.Screen
        name="Product2Detail"
        component={Product2DetailScreen}
        options={{title: 'Product 2 Detail'}}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}
