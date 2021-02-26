import React from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {loginAsync} from '../actions';

export default function Login() {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.authReducer.error);
  const user = useSelector((state) => state.authReducer.user);
  const loading = useSelector((state) => state.authReducer.loading);
  return (
    <View style={{flex: 1}}>
      {loading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      )}
      <Button
        title="Login"
        onPress={() => {
          dispatch(loginAsync('tanthuan211@gmail.com', '1234'));
        }}
      />
    </View>
  );
}
