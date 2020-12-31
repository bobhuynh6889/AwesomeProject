import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function index({name1, name2, title}) {
  return (
    <View style={styles.container}>
      <View style={styles.drawContainer}>
        <Icon name={name1} color="black" size={24} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.functionButtonContainer}>
        <Icon name={name2} color="black" size={24} />
      </View>
    </View>
  );
}
