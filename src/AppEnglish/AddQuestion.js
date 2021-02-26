import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';


export default function AddQuestion() {
  const addUser = () => {
    firestore()
      .collection('Questions')
      .add({
        id: 1,
        content: 'This shirt is made .... cotton.',
        options: [
          {
            text: 'A. of',
            corret: true,
          },
          {
            text: 'B. from',
          },
          {
            text: 'C. in',
          },
          {
            text: 'D. by',
          },
        ],
      })
      .then(() => {
        console.log('User added!');
        setRefresh(refresh + 1);
      });
  };
  return (
    <SafeAreaView>
      <Button title="Add user" onPress={addUser} />
    </SafeAreaView>
  );
}
