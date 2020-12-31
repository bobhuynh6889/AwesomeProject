import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from './Header';
import ButtonFinal from './ButtonFinal';

class ActionButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          height: 36,
          width: 36,
          backgroundColor: '#3464F6',
          borderRadius: 18,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#2c59e0',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
          }}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

class ProductInCart extends Component {
  render() {
    return (
      <View style={{flex: 2, flexDirection: 'row'}}>
        {/* PRODUCT IMAGE */}
        <View
          style={{
            width: 170,
            marginBottom: this.props.marginBottom,
            marginTop: this.props.marginTop,
          }}>
          <Image
            style={{flex: 1}}
            source={{
              uri: this.props.uri,
            }}
          />
        </View>
        {/* PRODUCT INFO */}
        <View
          style={{
            flex: 1,
            borderStyle: 'solid',
            borderTopWidth: 1,
            borderBottomWidth: this.props.borderBottomWidth,
            borderColor: '#e0e0e0',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            {/* PRODUCT NAME */}
            <Text style={{fontWeight: '700', marginBottom: 8}}>
              {this.props.title}
            </Text>
            {/* PRODUCT CATEGORY */}
            <Text style={{fontSize: 12, color: '#b5b5b5', marginBottom: 8}}>
              Furniture
            </Text>
            {/* PRODUCT PRICE */}
            <Text style={{fontWeight: '700', marginBottom: 8}}>
              {this.props.price}
            </Text>
          </View>
          {/* PRODUCT COUNT */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <ActionButton text="-"></ActionButton>
            <View style={{width: 15}}></View>
            <Text style={{fontSize: 16}}>1</Text>
            <View style={{width: 15}}></View>
            <ActionButton text="+"></ActionButton>
          </View>
        </View>
        {/* ICON X */}
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            borderStyle: 'solid',
            borderTopWidth: 1,
            borderBottomWidth: this.props.borderBottomWidth,
            borderColor: '#e0e0e0',
          }}>
          <View style={{padding: 8}}>
            <Icon name="close" size={22} color="#9EA7BB" />
          </View>
        </View>
      </View>
    );
  }
}

export default class BaiTap5 extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* HEADER */}
        <View style={{flex: 1}}>
          <Header title="Shopping Cart"></Header>
        </View>
        {/* PRODUCT SHOW */}
        <View style={{flex: 2, flexDirection: 'row'}}>
          <ProductInCart
            uri="https://cb2.scene7.com/is/image/CB2/SideraChairWhiteSHS17_1x1"
            title="White Chair"
            price="150 $"
            marginBottom={1}></ProductInCart>
        </View>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <ProductInCart
            uri="https://pictureperfecthome.co.uk/wp-content/uploads/2020/03/Light-Pink-Velvet-Shell-Back-Dining-Chair-Armchair-With-Chrome-Legs.jpg"
            title="Pink Chair"
            price="130 $"
            marginTop={1}
            borderBottomWidth={1}></ProductInCart>
        </View>
        {/* TOTAL COST */}
        <View
          style={{
            height: 50,
            flexDirection: 'row',
            padding: 10,
            borderStyle: 'solid',
            borderColor: '#e0e0e0',
            borderBottomWidth: 1,
          }}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{fontWeight: '700', fontSize: 18}}>Total Cost</Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
            <Text style={{fontWeight: '700', fontSize: 18}}>$ 280</Text>
          </View>
        </View>
        {/* CHECK OUT */}
        <View style={{flex: 4, justifyContent: 'flex-end'}}>
          <ButtonFinal
            backgroundColor="#3464F6"
            color="white"
            text="CHECK OUT"></ButtonFinal>
        </View>
        <View style={{height: 40}}></View>
      </View>
    );
  }
}
