import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import AppContext from './AppContext';
import themes from './themes';
import Toolbar from './Toolbar';

export default function index() {
  const [theme, setTheme] = React.useState(themes.light);
  const [count, setCount] = React.useState(0);
  return (
    <AppContext.Provider value={{theme, setTheme, count, setCount}}>
      <SafeAreaView style={{flex: 1}}>
        <Toolbar />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 48}}>{count}</Text>
        </View>
      </SafeAreaView>
    </AppContext.Provider>
  );
}
