import React from 'react';
import {View, Text, Button} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {getProduts} from '../actions';

export default function Products() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.sagaReducer.products);
  return (
    <View>
      <Button
        title="Get Products"
        onPress={() => {
          dispatch(getProduts());
        }}
      />
    </View>
  );
}
