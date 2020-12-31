import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

export default function index({source, style}) {
  return (
    <View style={[styles.container, style]}>
      <Image source={source} style={styles.imageStyle} />
    </View>
  );
}
