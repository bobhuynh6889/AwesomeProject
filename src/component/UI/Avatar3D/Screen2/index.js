import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import PlusButton from '../components/PlusButton';
import Button from '../components/Button';
import Arrow from '../components/Arrow';
import Component3 from '../../Component3';
import Component4 from '../../Component4';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <PlusButton
            iconName="left"
            backgroundColor="#342852"
            height={80}
            width={80}
            borderRadius={20}
            borderColor="#342852"
            color="#f6c284"
            size={25}
          />
        </View>
        <View style={styles.textHeader}>
          <Text style={{fontSize: 28, color: '#f6c284'}}>Split Now</Text>
          <View style={{width: 35}} />
          <PlusButton
            iconName="bars"
            size={28}
            borderColor="#49426D"
            color="#f6c284"
          />
        </View>
      </View>
      <View style={{flex: 4}}>
        <Component3 />
      </View>
      <View style={{flex: 4}}>
        <Component4 />
      </View>
      <View style={styles.bottom}>
        <View style={styles.confirmButton}>
          <Button
            title="Confirm Split"
            color="#f5c283"
            style={{borderRadius: 40, width: 140, height: 60}}
          />
        </View>
        <View style={{flex: 1}}>
          <Arrow />
        </View>
      </View>
    </SafeAreaView>
  );
}
