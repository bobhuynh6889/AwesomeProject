import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

// COMPONENT
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

export default function index() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 24}}>
        <Products />
      </View>
      <View style={{flex: 1, padding: 24}}>
        <ShoppingCart />
      </View>
    </SafeAreaView>
  );
}
