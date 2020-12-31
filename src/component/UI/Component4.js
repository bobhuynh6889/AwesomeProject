import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AvatarSimple from './Avatar3D/components/AvatarSimple';
import Dot from './Avatar3D/components/Dot';

const data = [
  {
    id: 0,
    name: 'Me',
    source:
      'https://firebasestorage.googleapis.com/v0/b/test-app-620dd.appspot.com/o/avatar3D%2Favatar2.png?alt=media&token=91a21498-c55f-42ff-a225-d99250bc13f9',
    backgroundColor: '#8cb6e1',
    price: '$200.86',
  },
  {
    id: 1,
    name: 'Cody',
    source:
      'https://firebasestorage.googleapis.com/v0/b/test-app-620dd.appspot.com/o/avatar3D%2Favatar6.png?alt=media&token=2c0b0882-3449-4902-b71e-4b0f42e01fe3',
    backgroundColor: '#be8ff6',
    price: '$450',
  },
  {
    id: 2,
    name: 'Khalifa',
    source:
      'https://firebasestorage.googleapis.com/v0/b/test-app-620dd.appspot.com/o/avatar3D%2Favatar4.png?alt=media&token=3d3cf7f7-d8dd-480f-8c73-709ec7086b5d',
    backgroundColor: '#f5a694',
    price: '$100',
  },
];

const renderItem = ({item, index}) => {
  return (
    <View style={{height: 100}}>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          width: '100%',
        }}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <AvatarSimple
            style={{
              backgroundColor: item.backgroundColor,
              height: 44,
              width: 44,
              borderRadius: 22,
            }}
            source={{uri: item.source}}
          />
          <View style={{width: 13}} />
          <Text
            style={{
              fontSize: 22,
              color: '#ffffff',
              fontWeight: '600',
            }}>
            {item.name}
          </Text>
        </View>
        <View
          style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
          <Text style={{fontSize: 18, color: '#ffffff', fontWeight: '700'}}>
            {item.price}
          </Text>
        </View>
      </View>
      <View>
        <Dot />
      </View>
      {item.name === 'Me' && (
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: -35}}>
          <View
            style={{
              width: 130,
              height: 30,
              backgroundColor: '#94c3f5',
              borderRadius: 18,
              opacity: 0.5,
            }}></View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: '#f6c384',
              borderStyle: 'solid',
              borderColor: '#ffffff',
              borderWidth: 2,
              marginLeft: -40,
              shadowColor: '#000000',
              shadowOffset: {
                height: 0,
                width: 0,
              },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              elevation: 1,
            }}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor: '#f6c384',
                borderStyle: 'dotted',
                borderColor: '#ffffff',
                borderWidth: 2,
              }}></View>
          </View>
        </View>
      )}
      {item.name === 'Cody' && (
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: -35}}>
          <View
            style={{
              width: 300,
              height: 30,
              backgroundColor: '#bf91f6',
              borderRadius: 18,
              opacity: 0.5,
            }}></View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: '#f6c384',
              borderStyle: 'solid',
              borderColor: '#ffffff',
              borderWidth: 2,
              marginLeft: -40,
              shadowColor: '#000000',
              shadowOffset: {
                height: 0,
                width: 0,
              },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              elevation: 1,
            }}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor: '#f6c384',
                borderStyle: 'dotted',
                borderColor: '#ffffff',
                borderWidth: 2,
              }}></View>
          </View>
        </View>
      )}
      {item.name === 'Khalifa' && (
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: -35}}>
          <View
            style={{
              width: 130,
              height: 30,
              backgroundColor: '#f3a192',
              borderRadius: 18,
              opacity: 0.5,
            }}></View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: '#f6c384',
              borderStyle: 'solid',
              borderColor: '#ffffff',
              borderWidth: 2,
              marginLeft: -40,
              shadowColor: '#000000',
              shadowOffset: {
                height: 0,
                width: 0,
              },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              elevation: 1,
            }}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor: '#f6c384',
                borderStyle: 'dotted',
                borderColor: '#ffffff',
                borderWidth: 2,
              }}></View>
          </View>
        </View>
      )}
    </View>
  );
};

export default function Component4() {
  return (
    <View style={{flex: 1, backgroundColor: '#49426D'}}>
      <View style={{marginHorizontal: 30, marginTop: 18}}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'dataAvatar-' + item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
