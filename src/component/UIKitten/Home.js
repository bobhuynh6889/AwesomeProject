import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Header from './components/Header';
import Category from './components/Category';
import Footer from './components/Footer';
import Icon from 'react-native-vector-icons/AntDesign';

export default function home() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F6F8FC'}}>
      <View style={{height: 50, backgroundColor: '#ffffff'}}>
        <Header name1="navicon" title="Kitten Tricks" />
      </View>
      <View style={{flex: 6, marginLeft: 5, marginRight: 5}}>
        <Category />
      </View>
      <View
        style={{
          height: 100,
          backgroundColor: '#ffffff',
          marginBottom: -35,
        }}>
        <Footer />
      </View>
    </SafeAreaView>
  );
}
