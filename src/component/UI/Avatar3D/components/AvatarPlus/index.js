import React from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AvatarSimple from '../AvatarSimple';
import PlusButton from '../PlusButton';

const data = [
  {
    id: 0,
    name: 'Cody',
    backgroundColor: '#ba8ee7',
    source:
      'https://firebasestorage.googleapis.com/v0/b/test-app-620dd.appspot.com/o/avatar3D%2Favatar4.png?alt=media&token=3d3cf7f7-d8dd-480f-8c73-709ec7086b5d',
  },
  {
    id: 1,
    name: 'Khalifa',
    backgroundColor: '#f8a291',
    source:
      'https://firebasestorage.googleapis.com/v0/b/test-app-620dd.appspot.com/o/avatar3D%2Favatar3.png?alt=media&token=17b1f6c1-4c16-45a6-b308-7dcdfa38ccc5',
  },
  {
    id: 2,
    name: 'Lisa',
    backgroundColor: '#cdcebb',
    source:
      'https://firebasestorage.googleapis.com/v0/b/test-app-620dd.appspot.com/o/avatar3D%2Favatar6.png?alt=media&token=2c0b0882-3449-4902-b71e-4b0f42e01fe3',
  },
];

const renderItem = ({item, index}) => {
  return (
    <View
      style={{
        height: 120,
        width: 65,
        backgroundColor: '#49426D',
        borderRadius: 50,
        alignItems: 'center',
        marginRight: 12,
      }}>
      <View style={{height: 60, marginTop: 10}}>
        <AvatarSimple
          style={{
            borderWidth: 0,
            borderColor: '#49426D',
            backgroundColor: item.backgroundColor,
          }}
          source={{
            uri: item.source,
          }}
        />
      </View>
      <View style={{height: 20}}>
        <Text style={{color: '#ffffff', fontWeight: '700'}}>{item.name}</Text>
      </View>
      <View style={{flex: 1, marginTop: 16}}>
        <PlusButton
          iconName="plus"
          backgroundColor="#f6c384"
          height={24}
          width={24}
          borderRadius={12}
          borderColor="#f6c384"
          color="#ffffff"
        />
      </View>
    </View>
  );
};

export default function index() {
  return (
    <View style={{flexDirection: 'row', height: 140}}>
      <FlatList
        numColumns={3}
        data={data}
        keyExtractor={(item, index) => 'data-' + item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
