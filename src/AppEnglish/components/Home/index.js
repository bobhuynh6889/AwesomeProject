import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';

import * as Animatable from 'react-native-animatable';

export default function index({navigation}) {
  const logoRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    logoRef.current.fadeInDown(1000);
    buttonRef.current.fadeInUp(1000);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}>
      <Animatable.View ref={logoRef}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 40,
            fontFamily: 'Arial',
            color: '#2c3e50',
            shadowColor: '#000000',
            shadowOffset: {
              height: 3,
              width: -3,
            },
            shadowOpacity: 0.7,
            shadowRadius: 5,
            elevation: 1,
          }}>
          15' English
        </Text>
      </Animatable.View>
      <View style={{height: 40}} />
      <Animatable.View ref={buttonRef}>
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate('TestScreen2');
            console.log('Go');
          }}>
          Let's go
        </Button>
      </Animatable.View>
    </SafeAreaView>
  );
}
