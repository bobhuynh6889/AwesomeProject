import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Product from '../../Product';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';

// const products = [
//   {
//     id: 1,
//     name: 'Iphone 12 Pro Max',
//     coverImageUrl:
//       'https://vcdn-sohoa.vnecdn.net/2020/11/09/14102-1604890703-1681-1604890903.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=5bKzjzmF_Eo09PdAlVGpxQ',
//     price: 1299,
//     status: 'In stock',
//     color: ['#8B8989', '#4F7C97', '#C0C0C0', '#fcd849'],
//     freeShipp: true,
//   },
//   {
//     id: 2,
//     name: 'Iphone 12 Pro',
//     coverImageUrl:
//       'https://vcdn-sohoa.vnecdn.net/2020/11/09/14102-1604890703-1681-1604890903.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=5bKzjzmF_Eo09PdAlVGpxQ',
//     price: 1000,
//     status: 'In stock',
//     color: ['#8B8989', '#4F7C97', '#C0C0C0', '#fcd849'],
//     freeShipp: true,
//   },
//   {
//     id: 3,
//     name: 'Iphone 12',
//     coverImageUrl:
//       'https://vcdn-sohoa.vnecdn.net/2020/11/09/14102-1604890703-1681-1604890903.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=5bKzjzmF_Eo09PdAlVGpxQ',
//     price: 799,
//     status: 'In stock',
//     color: ['black', 'gray', 'white', 'red', 'green', 'blue'],
//     freeShipp: true,
//   },
//   {
//     id: 4,
//     name: 'Iphone 12 mini',
//     coverImageUrl:
//       'https://vcdn-sohoa.vnecdn.net/2020/11/09/14102-1604890703-1681-1604890903.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=5bKzjzmF_Eo09PdAlVGpxQ',
//     price: 599,
//     status: 'In stock',
//     color: ['black', 'gray', 'white', 'red', 'green', 'blue'],
//     freeShipp: true,
//   },
// ];

export default function Product1Screen({navigation}) {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);

    const url = 'https://training.softech.cloud/api/products';
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {loading && <ActivityIndicator />}
      <FlatList
        data={products}
        keyExtractor={(item) => {
          return 'product-' + item.id;
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Product1Detail', {item: item});
              }}>
              <Product data={item} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}
