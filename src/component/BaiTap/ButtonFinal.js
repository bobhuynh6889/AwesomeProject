import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class ButtonFinal extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          marginLeft: 10,
          marginRight: 10,
          height: 55,
          backgroundColor: this.props.backgroundColor,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: this.props.color, fontWeight: '700'}}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
