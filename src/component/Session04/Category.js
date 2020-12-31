import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const HeaderBlock = () => (
  <View>
    <LinearGradient
      colors={['#f48fb1', '#ff4081']}
      style={styles.headerBlock}
    />
  </View>
);

const styles = StyleSheet.create({
  LinearGradient: {
    height: 70,
    width: 70,
    // borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerBlock: {
    position: 'absolute',
    marginLeft: -85,
    marginTop: -240,
    width: W * 0.9,
    height: H * 0.6,
    backgroundColor: '#ff4081',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    transform: [{rotateX: '0deg'}, {rotateY: '0deg'}, {rotateZ: '-40deg'}],
  },
});

class Categories extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#2B2C4C',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 30,
          marginRight: 5,
          borderRadius: 30,
        }}>
        <LinearGradient
          style={{borderRadius: 35}}
          colors={[this.props.color1, this.props.color2]}>
          <View style={styles.LinearGradient}>
            <Icon name={this.props.nameIcon} size={30} color="white" />
          </View>
        </LinearGradient>

        <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
          <Text style={{color: this.props.textColor}}>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}

export default class Category extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#222140'}}>
        <StatusBar barStyle="light-content" />
        <View style={{flex: 1}}>
          <HeaderBlock></HeaderBlock>
        </View>
        <View style={{flex: 2}}>
          <View style={{padding: 25}}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 30}}>
              Classify transaction
            </Text>
            <Text style={{color: 'white', fontSize: 20}}>
              Classify this transaction into a particular category
            </Text>
          </View>
        </View>
        <View style={{flex: 8}}>
          <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
            <View style={{flex: 1, marginRight: 5}}>
              <Categories
                nameIcon="windows"
                textColor="#2169A6"
                backgroundColor="blue"
                text="General"
                color1="#BBDEFB"
                color2="#1976D2"></Categories>
            </View>
            <View
              style={{
                flex: 1,
                marginLeft: 5,
              }}>
              <Categories
                nameIcon="rocket1"
                textColor="#7B1FA2"
                backgroundColor="#5534A6"
                text="Transport"
                color1="#E1BEE7"
                color2="#7B1FA2"></Categories>
            </View>
          </View>
          <View
            style={{flex: 1, flexDirection: 'row', padding: 10, marginTop: -5}}>
            <View style={{flex: 1, marginRight: 5}}>
              <Categories
                nameIcon="shoppingcart"
                textColor="#9E3597"
                backgroundColor="#9E3597"
                text="Shopping"
                color1="#F8BBD0"
                color2="#C2185B"></Categories>
            </View>
            <View
              style={{
                flex: 1,
                marginLeft: 5,
              }}>
              <Categories
                nameIcon="profile"
                textColor="#f4af46"
                backgroundColor="#f4af46"
                text="Bills"
                color1="#FFE0B2"
                color2="#F57C00"></Categories>
            </View>
          </View>
          <View
            style={{flex: 1, flexDirection: 'row', padding: 10, marginTop: -5}}>
            <View style={{flex: 1, marginRight: 5}}>
              <Categories
                nameIcon="youtube"
                textColor="#3751A6"
                backgroundColor="#3751A6"
                text="Entertaiment"
                color1="#BBDEFB"
                color2="#303F9F"></Categories>
            </View>
            <View style={{flex: 1, marginLeft: 5}}>
              <Categories
                nameIcon="yuque"
                textColor="#13f268"
                backgroundColor="#13f268"
                text="Grocery"
                color1="#C8E6C9"
                color2="#388E3C"></Categories>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#2B2C4C',
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="calendar" size={30} color="#4D4C67" />
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="barschart" size={30} color="#4D4C67" />
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="user" size={30} color="#4D4C67" />
          </View>
        </View>
      </View>
    );
  }
}
