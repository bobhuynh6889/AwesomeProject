import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export default class HeaderWala extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.back}>
          <FontAwesome name="arrow-left" size={30} color="#61b15a" />
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
        <View style={styles.right}>
          <FontAwesome name={this.props.nameRight} size={30} color="#61b15a" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  back: {
    width: 50,
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
  },
  right: {
    width: 50,
    justifyContent: 'center',

    alignItems: 'flex-end',
  },
});
