import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

export default function index({
  iconName,
  backgroundColor,
  height,
  width,
  borderRadius,
  borderColor,
  color,
  size,
}) {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: backgroundColor,
          height: height,
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: borderRadius,
          borderColor: borderColor,
          borderWidth: 1,
        }}>
        <Icon name={iconName} color={color} size={size} />
      </TouchableOpacity>
    </View>
  );
}
