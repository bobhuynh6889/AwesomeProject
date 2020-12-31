import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonFinal from '../../BaiTap/ButtonFinal';
import Header from '../../BaiTap/Header';

class CircleButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          height: 36,
          width: 36,
          borderRadius: 18,
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

export default function Product2DetailScreen({navigation, route}) {
  return (
    <View style={{flex: 1}}>
      <View>
        <Header title="Product Details" />
      </View>
      <View style={{fheight: 360}}>
        <Image
          source={{uri: route.params.item.coverImageUrl}}
          style={{height: 360}}
        />
      </View>
      <View style={{flex: 1, marginHorizontal: 20}}>
        <View
          style={{
            height: 70,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
          }}>
          <View>
            <Text style={{fontSize: 18, fontWeight: '700'}}>
              {route.params.item.name}
            </Text>
            <Text style={{color: 'gray'}}>
              {route.params.item.categoryName}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 18, fontWeight: '700'}}>
              {route.params.item.price} $
            </Text>
          </View>
        </View>
        <View style={{height: 100}}>
          <Text style={{color: 'gray'}}>{route.params.item.description}</Text>
        </View>
        <View style={{height: 70}}>
          <Text style={{fontSize: 18, fontWeight: '700', marginBottom: 10}}>
            Size
          </Text>
          <Text style={{color: 'gray'}}>{route.params.item.size}</Text>
        </View>
        <View style={{height: 90}}>
          <View>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Color</Text>
          </View>
          <View style={{height: 10}}></View>
          <View style={{flexDirection: 'row', marginLeft: 20}}>
            {route.params.item.color.map((s) => {
              return (
                <CircleButton key={s} backgroundColor={s} borderColor={s} />
              );
            })}
          </View>
        </View>
        <View style={{height: 70}}>
          <ButtonFinal
            backgroundColor="#3464F6"
            color="white"
            text="BUY"></ButtonFinal>
        </View>
      </View>
    </View>
  );
}
