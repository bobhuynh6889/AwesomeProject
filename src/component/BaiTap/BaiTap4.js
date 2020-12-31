import React, {Component} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import Header from './Header';
import ButtonFinal from './ButtonFinal';

import Icon from 'react-native-vector-icons/AntDesign';

class CircleColor extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          style={{
            height: 30,
            width: 30,
            backgroundColor: this.props.backgroundColor,
            borderRadius: 15,
            borderSpacing: 2,
            borderColor: this.props.borderColor,
            borderWidth: 1,
          }}
        />
        <Text style={{padding: 8, fontWeight: '700'}}>{this.props.text}</Text>
      </View>
    );
  }
}

export default class BaiTap4 extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* HEADER */}
        <Header title="Product Details"></Header>
        {/* INFO */}
        <View style={{flex: 1}}>
          {/* PRODUCT IMAGE */}
          <View style={{flex: 4}}>
            <Image
              style={{flex: 1}}
              source={{
                uri:
                  'https://images-na.ssl-images-amazon.com/images/I/717IcPNf%2BRL._AC_SX522_.jpg',
              }}
            />
          </View>

          <View
            style={{
              flex: 1,

              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {/* PRODUCT NAME */}
            <View style={{flex: 1, paddingLeft: 10}}>
              <Text style={{fontWeight: '700', fontSize: 20}}>Pink Chair</Text>
              <Text>Furniture</Text>
            </View>
            {/* PRICE */}
            <View style={{flex: 1, alignItems: 'flex-end', paddingRight: 10}}>
              <Text style={{fontWeight: '700', fontSize: 20}}>130 $</Text>
            </View>
          </View>
          {/* PRODUCT INFO */}
          <View style={{flex: 1, margin: 10}}>
            <Text>
              In it except to so temper mutual tastes mother. Interested
              cultivated its continuing now yet are. Out interested acceptance
              our partiality affronting unpleasant why add. Esteem garden men
              yet shy course. Consulted up my tolerably sometimes perpetual oh.
            </Text>
          </View>
          {/* SIZE */}
          <View style={{height: 50, margin: 10}}>
            <View style={{height: 30}}>
              <Text style={{fontWeight: '700', fontSize: 20}}>Size</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text>H:80cm</Text>
              <View style={{width: 10}}></View>
              <Text>D:50cm</Text>
              <View style={{width: 10}}></View>
              <Text>W:40cm</Text>
            </View>
          </View>
          {/* COLOR */}
          <View style={{flex: 1, margin: 10}}>
            <View style={{height: 20}}>
              <Text style={{fontWeight: '700', fontSize: 20}}>Color</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                margin: 10,
              }}>
              <CircleColor
                text="pink"
                backgroundColor="pink"
                borderColor="pink"></CircleColor>
              <CircleColor text="blue" backgroundColor="#EDF0F7"></CircleColor>
            </View>
          </View>
          {/* BUY BUTTON */}
          <View style={{flex: 1}}>
            <ButtonFinal
              backgroundColor="#3464F6"
              color="white"
              text="BUY"></ButtonFinal>
          </View>
        </View>
      </View>
    );
  }
}
