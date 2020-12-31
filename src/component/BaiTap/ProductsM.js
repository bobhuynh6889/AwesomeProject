import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Products extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 3}}>
          <Image
            style={{
              flex: 1,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
            source={{
              uri: this.props.uri,
            }}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', paddingLeft: 12}}>
          <Text style={{fontWeight: '700'}}>{this.props.title}</Text>
          <Text style={{color: 'gray'}}>{this.props.category}</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingLeft: 12,
            // justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              // backgroundColor: 'blue',
              justifyContent: 'center',
              // alignItems: 'center',
            }}>
            <Text style={{fontWeight: '700'}}>{this.props.price}</Text>
          </View>
          <View
            style={{
              flex: 1,

              // backgroundColor: 'red',
              paddingRight: 12,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <Icon
              style={{
                marginRight: 10,
                borderStyle: 'solid',
                borderWidth: 3,
                borderColor: '#3464F6',
                borderRadius: 5,
                backgroundColor: '#3464F6',
              }}
              name="shoppingcart"
              size={25}
              color="white"
            />
          </View>
        </View>
      </View>
    );
  }
}
