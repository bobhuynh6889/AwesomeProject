import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class button extends Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <LinearGradient
          style={{
            marginHorizontal: 20,
          }}
          borderRadius={35}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#4EAC62', '#58BF58', '#7AD14C']}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{this.props.text}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 60,
    shadowColor: '#000000',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.39,
    shadowRadius: 5,
    elevation: 1,
  },
  button: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});
