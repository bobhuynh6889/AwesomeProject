import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

class CircleButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          height: 48,
          width: 48,
          borderRadius: 24,
          backgroundColor: this.props.backgroundColor,
          borderColor: this.props.borderColor,
          borderWidth: 1,
          borderStyle: 'solid',
          marginHorizontal: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

class ActionButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          height: 40,
          width: 150,
          borderRadius: 24,
          backgroundColor: this.props.backgroundColor,
          marginHorizontal: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{color: this.props.color, fontWeight: '700', fontSize: 16}}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default function Product1DetailScreen({navigation, route}) {
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      {/* COVER IMAGE */}
      <View style={{height: 300, alignItems: 'center'}}>
        <Image
          style={{height: 300, width: 250}}
          source={{
            uri: route.params.item.coverImageUrl,
          }}
        />
      </View>
      {/* INFOR */}
      <View style={{flex: 1, marginTop: 0}}>
        {/* NAME */}
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: '700'}}>
            {route.params.item.name}
          </Text>
        </View>
        {/* PRICE & STATUS */}
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{fontWeight: '700', color: '#7331C6', fontSize: 20}}>
            Price: ${route.params.item.price}
          </Text>
          <Text style={{fontWeight: '700'}}>{route.params.item.status}</Text>
        </View>
        {/* COLOR & SIZES */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <View>
            <CircleButton
              backgroundColor={route.params.item.color}
              borderColor={route.params.item.color}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            {route.params.item.sizes.map((s) => {
              return (
                <CircleButton
                  key={s}
                  backgroundColor="#ffffff"
                  borderColor="black"
                  text={s}
                />
              );
            })}
          </View>
        </View>
        {/* ACCTION BUTTON */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <ActionButton
            color="white"
            backgroundColor="#7331C6"
            text="Buy now"
          />
          <ActionButton
            color="#7331C6"
            backgroundColor="#eeeeee"
            text="Add to cart"
          />
        </View>
        {/* FREESHIP */}
        <View style={{alignItems: 'center', marginTop: 10}}>
          {route.params.item.freeShip && (
            <Text
              style={{
                fontSize: 18,
                color: '#757575',
              }}>
              Free shipping on all orders
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
