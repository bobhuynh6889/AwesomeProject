import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Button, TextInput, Checkbox} from 'react-native-paper';
import moment from 'moment';

export default function index() {
  const [text, setText] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,

        marginHorizontal: 10,
      }}>
      <Button
        color="pink"
        icon="bell"
        mode="contained"
        style={{
          width: '100%',
          height: 48,
          borderRadius: 10,
          justifyContent: 'center',
        }}
        labelStyle={{color: 'white', fontSize: 18}}
        onPress={() => console.log('OKE')}>
        BUY
      </Button>

      <TextInput
        style={{borderColor: 'red'}}
        // multiline={true}
        selectionColor="green"
        mode="outlined"
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />

      <Text>{moment('02/11/1995').format('DD / MM / YYYY hh:mm:ss a')}</Text>
    </SafeAreaView>
  );
}
