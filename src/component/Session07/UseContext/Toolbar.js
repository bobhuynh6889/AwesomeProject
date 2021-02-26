import React from 'react';
import {View, Text} from 'react-native';
import AppContext from './AppContext';
import themes from './themes';
import ThemesButton from './ThemesButton';

export default function Toolbar() {
  const {count, setCount, theme, setTheme} = React.useContext(AppContext);
  return (
    <View>
      <ThemesButton
        text="Change Theme"
        onPress={() => {
          setTheme(theme === themes.light ? themes.dark : themes.light);
        }}
      />
      <ThemesButton text={count} onPress={() => setCount(count + 1)} />
      <ThemesButton text={count} onPress={() => setCount(count - 1)} />
    </View>
  );
}
