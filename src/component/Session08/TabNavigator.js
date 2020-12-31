import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import NotificationScreen from './screens/NotificationScreen';
import Product2Screen from './screens/Product2Screen';
import Product1Screen from './screens/Product1Screen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor="black"
      inactiveColor="gray"
      barStyle={{backgroundColor: 'pink'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon name="home" color={focused ? 'black' : 'gray'} size={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product1Screen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon name="apps" color={focused ? 'black' : 'gray'} size={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarBadge: 100,
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon name="bell" color={focused ? 'black' : 'gray'} size={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name="account"
                color={focused ? 'black' : 'gray'}
                size={24}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
