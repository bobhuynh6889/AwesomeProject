/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import AvatarTop from '../asset/images/avatar1.png';
import Button from '../components/Button';
import Avatar from '../components/Avatar';
import PlusButton from '../components/PlusButton';
import Component1 from '../../Component1';
import AvatarPlus from '../components/AvatarPlus';
import AvatarName from '../components/AvatarName';

import styles from './styles';

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={{flex: 2}}>
          <Text style={{color: '#EFC18D', fontSize: 30}}>Orix</Text>
          <Text style={{color: '#EFC18D', fontSize: 30, fontWeight: '700'}}>
            Bill Splitter
          </Text>
        </View>
        <View style={styles.avatarHeader}>
          <View style={styles.avatarImage}>
            <Image style={styles.imageStyle} source={AvatarTop} />
          </View>
          <View style={styles.avatarText}>
            <Text style={{color: '#ffffff', fontWeight: '700', fontSize: 12}}>
              Kris
            </Text>
          </View>
        </View>
      </View>

      {/* TOTAL BILL */}
      <View style={{flex: 5}}>
        <Component1 />
      </View>
      {/* SEARCH */}
      <View style={styles.searchContainer}>
        <View style={styles.searchContainerTop}>
          <View style={styles.searchButton}>
            <PlusButton
              iconName="search1"
              height={80}
              width={80}
              borderRadius={20}
              borderColor="#f6c284"
              backgroundColor="#f6c284"
              color="#382b56"
              size={30}
            />
          </View>
          <View style={styles.nearbyTextContainer}>
            <View style={styles.nearbyText}>
              <Text style={{fontSize: 18, color: '#f6c284'}}>
                Nearby Friends
              </Text>
              <Text style={{color: '#ffffff'}}>See all</Text>
            </View>
          </View>
        </View>

        <View style={styles.searchButtonBottom}>
          <View style={styles.avatarPlus}>
            <AvatarPlus />
          </View>
          <View style={styles.recentlyText}>
            <Text style={{fontSize: 18, color: '#f6c284'}}>Recently Split</Text>
          </View>
          <View style={styles.avatarName}>
            <AvatarName />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
