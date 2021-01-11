import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';

export default function KiemTra() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{height: 48, width: 120, backgroundColor: 'pink'}}
        onPress={() => {
          console.log('Hello');
        }}>
        <Text>Hello</Text>
      </TouchableOpacity>

      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </View>
  );
}
