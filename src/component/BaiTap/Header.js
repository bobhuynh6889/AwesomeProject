import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Header extends Component {
  render() {
    return (
      <View style={{height: 95, backgroundColor: 'white'}}>
        <View
          style={{
            height: 70,
            alignItems: 'flex-end',
            flexDirection: 'row',
          }}>
          {/* BACK BUTTON */}
          <View style={{flex: 1}}>
            <Icon name="left" size={25} color="black" />
          </View>
          {/* TITLE TAG */}
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{fontWeight: '700'}}>{this.props.title}</Text>
          </View>
          {/* ICON: SEARCH & SHOPPING CART  */}
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <Icon
              style={{marginRight: 10}}
              name="search1"
              size={25}
              color="black"
            />
            <Icon
              style={{marginRight: 10}}
              name="shoppingcart"
              size={25}
              color="blue"
            />
          </View>
        </View>
      </View>
    );
  }
}
