import React, {Fragment} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AsyncStorageExample() {
  const [loggedInUser, setLoggedInUser] = React.useState(null);
  // async - await
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@LoggedInUser', JSON.stringify(value));
    } catch (e) {
      // saving error
      console.log('Save failed: ', e);
    }
  };

  const getData = async () => {
    try {
      let data = await AsyncStorage.getItem('@LoggedInUser');
      if (data) {
        return JSON.parse(data);
      }
      return null;
    } catch (e) {
      // saving error
      console.log('Get failed: ', e);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {loggedInUser && (
        <React.Fragment>
          <Text>{loggedInUser.email}</Text>
          <Text>{loggedInUser.password}</Text>
        </React.Fragment>
      )}
      <Button
        title="Store data"
        onPress={() => {
          storeData({email: 'tanthuan@gmail.com', password: 'thuan6889'});
        }}
      />
      <Button
        title="Get data"
        onPress={() => {
          getData().then((u) => {
            console.log(u);
            setLoggedInUser(u);
          });
        }}
      />
    </SafeAreaView>
  );
}
