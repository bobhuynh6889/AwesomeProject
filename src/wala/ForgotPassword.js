import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import HeaderWala from './HeaderWala';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button2 from './ButtonWala';

export default class ForgotPassword extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderWala title="Forgot Password"></HeaderWala>
        </View>
        <View style={styles.imageLock}>
          <Ionicons name="ios-lock-closed-outline" size={200} color="#61b15a" />
        </View>
        <View style={styles.textContainer}>
          <Text style={{fontSize: 15}}>
            Please enter your e-mail below to receive your
          </Text>
          <Text style={{fontSize: 15}}>password reset instructions.</Text>
        </View>
        <View style={styles.inputContainer}>
          <View>
            {/* EMAIL */}
            <View>
              <Text style={styles.text}>EMAIL</Text>
            </View>
            {/* EMAIL INPUT */}
            <View>
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"></TextInput>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button2 text="SEND REQUEST"></Button2>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  inputContainer: {
    flex: 1,
    marginHorizontal: 30,
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
  buttonContainer: {
    flex: 4,
    marginTop: 20,
  },
});
