import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default function Button({
  title,
  style,
  titleStyle,
  iconName,
  disabled,
  loading,
  icon,
}) {
  const TocuhComponent = disabled ? View : TouchableOpacity;
  return (
    <TocuhComponent
      style={[
        styles.defaultStyleContainer,
        style,
        disabled ? styles.defauDisableStyle : null,
      ]}>
      {!loading && iconName && <Icon name={iconName} size={25} color="white" />}
      {!loading && icon}
      {loading && <ActivityIndicator style={{marginRight: 10}} />}
      <Text style={[styles.defaultTextStyle, titleStyle]}>{title}</Text>
    </TocuhComponent>
  );
}
