import React from 'react';
import StackNavigation from './StackNavigation';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';

import {NavigationContainer} from '@react-navigation/native';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
      {/* <TabNavigator /> */}
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
