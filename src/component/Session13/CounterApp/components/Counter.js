import React from 'react';
import {View, Text, Button} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {increaseCountAction, decreaseCountAction} from '../actions';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{count}</Text>
      <View height={6} />
      <Button
        title="Increase"
        onPress={() => {
          dispatch(increaseCountAction(5, 2));
        }}
      />

      <Button
        title="Decrease"
        onPress={() => {
          dispatch(decreaseCountAction(5));
        }}
      />
    </View>
  );
}
