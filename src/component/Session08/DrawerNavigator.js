import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SettingScreen from './screens/SettingScreen';
import UserScreen from './screens/UserScreen';
import StackNavigation from './StackNavigation';
import TabNavigator from './TabNavigator';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      activeTintColor="black"
      drawerPosition="right"
      drawerStyle={{backgroundColor: 'pink'}}>
      <Drawer.Screen
        name="Tab"
        component={TabNavigator}
        options={{
          drawerIcon: ({focused, color, size}) => {
            return (
              <Icon name="dock-right" color="black" size={focused ? 35 : 20} />
            );
          },
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerIcon: ({focused, color, size}) => {
            return (
              <Icon name="cog-outline" color="black" size={focused ? 35 : 20} />
            );
          },
        }}
      />
      <Drawer.Screen
        name="User"
        component={UserScreen}
        options={{
          drawerIcon: ({focused, color, size}) => {
            return (
              <Icon name="account" color="black" size={focused ? 35 : 20} />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
}
