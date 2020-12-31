import React, {Component} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Input extends Component {
  render() {
    return (
      <TextInput
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: this.props.marginTop,
          borderRadius: 5,
          borderColor: '#ededed',
          borderStyle: 'solid',
          height: 50,
          borderWidth: 1,
          backgroundColor: '#F8F9FC',
          padding: 8,
        }}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default class BaiTap1 extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* Background Image */}
        <ImageBackground
          blurRadius={8}
          source={{
            uri: 'https://wallpaperaccess.com/full/2225348.jpg',
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          {/* HEADER */}
          <View
            style={{
              flex: 3,
              // backgroundColor: '#3464F6',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontWeight: '600',
                fontSize: 40,
                paddingVertical: 20,
              }}>
              Hello
            </Text>
            <Text style={{color: '#ffffff'}}>Sign in to your account</Text>
          </View>
          <View style={{flex: 3}}>
            {/* USER NAME */}
            <Input placeholder="User Name" marginTop={30}></Input>
            {/* PASSWORD */}
            <Input placeholder="Password" marginTop={20}></Input>
            {/* FORGOT PASS */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 20,
                marginTop: 20,
              }}>
              <Text style={{color: '#ffffff'}}>Forgot your password?</Text>
            </View>
          </View>
          {/* SIGN UP */}
          <View
            style={{
              flex: 4,
              justifyContent: 'flex-end',
              alignContent: 'center',
              alignItems: 'stretch',
            }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                marginLeft: 20,
                marginRight: 20,
                height: 55,
                backgroundColor: '#ededed',
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'gray', fontWeight: '700'}}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
          {/* SOCIAL ICONS */}
          <View
            style={{
              flex: 1,

              flexDirection: 'row',
              padding: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Icon name="google" size={25} color="#ffffff" />
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Icon name="facebook" size={25} color="#ffffff" />
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Icon name="twitter" size={25} color="#ffffff" />
            </View>
          </View>
          {/* Don't have an account? Create */}
          <View style={{height: 50, alignItems: 'center', marginTop: 5}}>
            <Text style={{color: '#ffffff'}}>
              Don't have an account? Create
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
