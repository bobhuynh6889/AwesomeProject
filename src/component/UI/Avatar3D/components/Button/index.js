import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function index({title, color, style, fontSize}) {
  return (
    <View>
      <TouchableOpacity style={[styles.container, style]}>
        <Text style={{color: color, fontWeight: '700', fontSize: fontSize}}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
