import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// ** TEXt INPUT ** //
class Input extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <TextInput
            style={{
              marginTop: 20,
              marginLeft: 20,
              marginRight: 40,
              paddingHorizontal: 10,
              // marginTop: this.props.marginTop,
              borderRadius: 5,
              borderColor: '#ededed',
              borderStyle: 'solid',
              height: 50,
              borderWidth: 1,
              backgroundColor: '#F8F9FC',
            }}
            placeholder={this.props.placeholder}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: -20,
          }}>
          <Icon
            name={this.props.name}
            size={25}
            color="#C5CDE3"
            style={{marginHorizontal: 8, marginLeft: -65}}
          />
        </View>
      </View>
    );
  }
}

export default class BaiTap1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        {/* HEADER */}
        <View
          style={{
            flex: 3,
            backgroundColor: '#3464F6',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* HELLO */}
          <Text
            style={{
              color: 'white',
              fontWeight: '600',
              fontSize: 40,
              paddingVertical: 20,
            }}>
            Hello
          </Text>
          {/* SIGN IN TO YOUR ACCOUNT */}
          <Text style={{color: 'white'}}>Sign in to your account</Text>
        </View>

        <View style={{flex: 2, backgroundColor: 'white'}}>
          {/* USER NAME */}
          <Input name="account" placeholder="User Name"></Input>

          {/* PASSWORD */}
          <Input
            name={this.state.secureTextEntry ? 'eye-off' : 'eye'}
            placeholder="Password"
            onPress={() => {
              let s = !this.state.secureTextEntry;
              this.setState({secureTextEntry: s});
            }}></Input>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginRight: 20,
              marginTop: 20,
            }}>
            {/* FORGOT PASS */}
            <Text style={{color: 'gray'}}>Forgot your password?</Text>
          </View>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: 'flex-end',
            alignContent: 'center',
            alignItems: 'stretch',
          }}>
          {/* SIGN UP BUTTON */}
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
        {/* DONT HAVE AN ACCOUNT? CREATE */}
        <View style={{height: 50, alignItems: 'center', marginTop: 5}}>
          <Text style={{color: 'gray'}}>Don't have an account? Create</Text>
        </View>
      </View>
    );
  }
}
