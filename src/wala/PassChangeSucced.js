import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from './ButtonWala';

export default class PassChangeSucced extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
          <Ionicons name="ios-shield-checkmark" size={180} color="#61b15a" />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 15, marginBottom: 20}}>
            You have successfully change password.
          </Text>
          <Text style={{fontSize: 15}}>
            Please use new password when logging in.
          </Text>
        </View>
        <View style={{flex: 4, marginHorizontal: 80, marginTop: 20}}>
          <Button text="LOGIN NOW"></Button>
        </View>
      </View>
    );
  }
}
