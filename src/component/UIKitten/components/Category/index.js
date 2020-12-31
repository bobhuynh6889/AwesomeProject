import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const data = [
  {
    id: 0,
    iconName: 'lock',
    title: 'Auth',
  },
  {
    id: 1,
    iconName: 'team',
    title: 'Social',
  },
  {
    id: 2,
    iconName: 'form',
    title: 'Articles',
  },
  {
    id: 3,
    iconName: 'message1',
    title: 'Messaging',
  },
  {
    id: 4,
    iconName: 'layout',
    title: 'Dashboards',
  },
  {
    id: 5,
    iconName: 'shoppingcart',
    title: 'Ecommerce',
  },
];

const renderItem = ({item, index}) => {
  return (
    <View style={styles.categorySimpleContainer}>
      <TouchableOpacity style={styles.touchableopacity}>
        <View style={styles.icontextContainer}>
          <View>
            <Icon name={item.iconName} color="#F5AE5B" size={60} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item, index) => 'data-' + item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
