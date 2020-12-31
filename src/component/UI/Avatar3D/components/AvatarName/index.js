import React from 'react';
import {View, Text, Image} from 'react-native';
import AvatarSimple from '../AvatarSimple';
import PlusButton from '../PlusButton';
import {FlatList} from 'react-native-gesture-handler';

const dataAvatar = [
  {
    id: 0,
    name: 'Sing',
    backgroundColor: '#8ab5e1',
    source:
      'https://firebasestorage.googleapis.com/v0/b/test-app-620dd.appspot.com/o/avatar3D%2Favatar2.png?alt=media&token=91a21498-c55f-42ff-a225-d99250bc13f9',
  },
  {
    id: 1,
    name: 'Alex',
    backgroundColor: '#bc91f1',
    source:
      'https://firebasestorage.googleapis.com/v0/b/test-app-620dd.appspot.com/o/avatar3D%2Favatar3.png?alt=media&token=17b1f6c1-4c16-45a6-b308-7dcdfa38ccc5',
  },
  {
    id: 2,
    name: 'Brain',
    backgroundColor: '#f8a494',
    source:
      'https://firebasestorage.googleapis.com/v0/b/test-app-620dd.appspot.com/o/avatar3D%2Favatar4.png?alt=media&token=3d3cf7f7-d8dd-480f-8c73-709ec7086b5d',
  },
  {
    id: 3,
    name: 'Mike',
    backgroundColor: '#cecfb8',
    source:
      'https://firebasestorage.googleapis.com/v0/b/test-app-620dd.appspot.com/o/avatar3D%2Favatar6.png?alt=media&token=2c0b0882-3449-4902-b71e-4b0f42e01fe3',
  },
];

const renderItem = ({item, index}) => {
  return (
    <View style={{marginRight: 27}}>
      <View
        style={{
          backgroundColor: item.backgroundColor,
          height: 58,
          width: 58,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 29,
          borderColor: '#ffffff',
          borderWidth: 1,
        }}>
        <Image source={{uri: item.source}} style={{height: 35, width: 35}} />
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={{color: '#ffffff', fontWeight: '700'}}>{item.name}</Text>
      </View>
    </View>
  );
};

export default function index() {
  return (
    <View>
      <FlatList
        numColumns={4}
        data={dataAvatar}
        keyExtractor={(item, index) => 'dataAvatar-' + item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
