import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import HeaderWala from './HeaderWala';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button2 from './ButtonWala';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        {/* HEADER */}
        <View style={styles.header}>
          <HeaderWala title="Recovery Password"></HeaderWala>
        </View>
        <View style={styles.imageLock}>
          <Ionicons name="ios-lock-open-outline" size={200} color="#61b15a" />
        </View>
        <View style={styles.textContainer}>
          <Text style={{fontSize: 15}}>
            Reset code was send to your email. Please enter
          </Text>
          <Text style={{fontSize: 15}}>the code and create new password.</Text>
        </View>
        <View style={styles.resetcode}>
          {/* RESET CODE */}
          <View>
            <Text style={styles.text}>RESET CODE</Text>
          </View>
          {/* INPUT */}
          <View>
            <TextInput
              style={styles.textInput}
              autoCapitalize="characters"></TextInput>
          </View>
        </View>
        <View style={styles.newpasswordCon}>
          {/* NEW PASSWORD */}
          <View style={styles.newPassAndLock}>
            <Text style={styles.text}>NEW PASSWORD</Text>
            <AntDesign
              name={this.state.secureTextEntry ? 'lock' : 'unlock'}
              size={25}
              color="gray"
              onPress={() => {
                let s = !this.state.secureTextEntry;
                this.setState({secureTextEntry: s});
              }}
            />
          </View>
          {/* INPUT */}
          <View>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={this.state.secureTextEntry}></TextInput>
          </View>
        </View>
        <View style={styles.button}>
          <Button2 text="CHANGE PASSWORD"></Button2>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  imageLock: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetcode: {
    flex: 1,
    marginHorizontal: 30,
  },
  newpasswordCon: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 20,
  },
  newPassAndLock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1',
    padding: 12,
  },
  button: {
    flex: 4,
    marginTop: 20,
  },
});
