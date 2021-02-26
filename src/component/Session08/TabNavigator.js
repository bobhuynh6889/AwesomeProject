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
      shifting={true}
      activeColor="#f9ca24"
      inactiveColor="#ecf0f1"
      barStyle={{
        
    }}
      >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarColor: "#e056fd",
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon name="home" color={focused ? '#f9ca24' : '#ecf0f1'} size={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Product"
        component={Product1Screen}
        options={{
          tabBarColor: "#f0932b",
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon name="apps" color={focused ? '#f9ca24' : '#ecf0f1'} size={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarBadge: 99,
          tabBarColor: "#eb4d4b",
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon name="bell" color={focused ? '#f9ca24' : '#ecf0f1'} size={24} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarColor: "#6ab04c",
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name="account"
                color={focused ? '#f9ca24' : '#ecf0f1'}
                size={24}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
