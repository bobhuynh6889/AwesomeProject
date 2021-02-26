import React from 'react';
import {View, Text, Pressable} from 'react-native';
import AppContext from './AppContext';

export default function ThemesButton({text, onPress}) {
  const {count, theme, setTheme} = React.useContext(AppContext);
  return (
    <View>
      <Pressable
        style={{
          margin: 4,
          justifyContent: 'center',
          alignItems: 'center',
          height: 48,
          backgroundColor: theme.background,
        }}
        onPress={onPress}>
        <Text style={{color: theme.foreground}}>{text}</Text>
      </Pressable>
      {/* <Text style={{fontSize: 48}}>{count}</Text> */}
    </View>
  );
}
