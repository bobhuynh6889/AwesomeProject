import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  StyleSheet,
  Button,
} from 'react-native';

import LogoWala from './asset/images/logowala.png';
import Bgimg from './asset/images/bgimg.jpg';

export default function WelcomeWala({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View>
          <Image source={LogoWala} />
        </View>
        <View>
          <Text style={styles.sologan}>Eating healthy and happy!</Text>
        </View>
      </View>
      <View>
        <Button
          title="Start Now"
          onPress={() => {
            navigation.navigate('Started');
          }}
        />
      </View>
      <View>
        <View>
          <Image style={styles.image} source={Bgimg} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sologan: {
    fontSize: 20,
  },
  image: {
    height: 300,
    width: '100%',
  },
});
