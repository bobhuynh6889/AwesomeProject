import React from 'react';
import {View, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Product2 from '../../Product2';

const width = Dimensions.get('screen').width;

const products = [
  {
    id: 1,
    name: 'Wood Lamp',
    coverImageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz14PBfiEJcDUTCkgv754F_xqlMOlqbMc7Mw&usqp=CAU',
    price: 25,
    categoryName: 'Lamp',
    size: 'H:80cm W:50cm D:40cm',
    description:
      'One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but.',
    color: ['#8B8989', '#4F7C97', '#C0C0C0', '#fcd849'],
  },
  {
    id: 2,
    name: 'Modern Lamp',
    coverImageUrl:
      'https://cb2.scene7.com/is/image/CB2/AdaIIWhiteTableLampSHF16',
    price: 39,
    categoryName: 'Lamp',
    size: 'H:180cm W:70cm D:60cm',
    description:
      'One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but.',
    color: ['#8B8989', '#4F7C97', '#C0C0C0'],
  },
  {
    id: 3,
    name: 'White Chair',
    coverImageUrl:
      'https://cb2.scene7.com/is/image/CB2/SideraChairWhiteSHS17_1x1',
    price: 59,
    categoryName: 'Chair',
    size: 'H:80cm W:50cm D:40cm',
    description:
      'One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but.',
    color: ['#8B8989', '#4F7C97'],
  },
  {
    id: 4,
    name: 'Pink Chair',
    coverImageUrl:
      'https://pictureperfecthome.co.uk/wp-content/uploads/2020/03/Light-Pink-Velvet-Shell-Back-Dining-Chair-Armchair-With-Chrome-Legs.jpg',
    price: 99,
    categoryName: 'Chair',
    size: 'H:90cm W:50cm D:60cm',
    description:
      'One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but.',
    color: ['#8B8989'],
  },
];

export default function ProductsScreen({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 8,
      }}>
      <FlatList
        data={products}
        keyExtractor={(item) => {
          return 'product-' + item.id;
        }}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={{width: width / 2 - 8}}
              onPress={() => {
                navigation.navigate('Product2Detail', {item: item});
              }}>
              <Product2 data={item} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}
