import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from './components/Button';

export default function index() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Button
        loading={true}
        disabled={true}
        title="Home"
        // iconName="home"
        icon={<Icon name="bell" size={24} color="white" />}
        //   style={{backgroundColor: 'green'}}
      />
    </SafeAreaView>
  );
}
