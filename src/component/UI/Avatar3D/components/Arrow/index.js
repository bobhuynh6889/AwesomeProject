import React from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function index() {
  const data = [
    {
      id: 0,
      size: 19,
      opacity: 0.5,
    },
    {
      id: 1,
      size: 20,
      opacity: 0.6,
    },
    {
      id: 2,
      size: 21,
      opacity: 0.7,
    },
    {
      id: 3,
      size: 22,
      opacity: 0.8,
    },
    {
      id: 4,
      size: 23,
      opacity: 0.9,
    },
    {
      id: 5,
      size: 24,
      opacity: 1,
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={{justifyContent: 'center', marginLeft: 3}}>
        <Icon
          name="chevron-right"
          color="#7b7593"
          size={item.size}
          style={{opacity: item.opacity}}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        numColumns={6}
        data={data}
        keyExtractor={(item, index) => 'data-' + item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
