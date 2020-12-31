import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Wlogo from './asset/images/wlogo.png';
import Button from './ButtonWala';
import BgLogin from './asset/images/bglogin.jpg';

const {width, height} = Dimensions.get('window');

export default class LoginWala extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/* LOGO */}
        <View style={styles.logoContainer}>
          {/* logo */}
          <View>
            <Image style={styles.logo} source={Wlogo} />
          </View>
          {/* text logo */}
          <View>
            <Text style={styles.textLogo}>Welcome Back!</Text>
          </View>
        </View>
        {/* TEXT INPUT */}
        <View style={styles.textInputContainer}>
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
          <View style={{marginTop: 20}}>
            {/* PASSWORD */}
            <View style={styles.password}>
              <Text style={styles.text}>PASSWORD</Text>

              {/* LOCK ICON */}
              <Icon
                name={this.state.secureTextEntry ? 'lock' : 'unlock'}
                size={25}
                color="gray"
                onPress={() => {
                  let s = !this.state.secureTextEntry;
                  this.setState({secureTextEntry: s});
                }}
              />
            </View>
            {/* PASSWORD INPUT */}
            <View>
              <TextInput
                style={styles.textInput}
                secureTextEntry={this.state.secureTextEntry}></TextInput>
            </View>
          </View>
        </View>
        {/* BUTTON CONTAINER */}
        <View style={{height: 100}}>
          {/* BUTTON */}
          <View>
            <Button text="LOG IN"></Button>
          </View>
          {/* FORGOT PASSWORD */}
          <View style={styles.forgotPassword}>
            <Text style={styles.text2}>Forgot Password?</Text>
          </View>
        </View>
        {/* ACCOUNT & SIGN UP */}
        <View style={styles.support}>
          <Text style={{fontSize: 16}}>Don't have an account?</Text>
          <Text style={[styles.text2, {marginLeft: 5}]}>Sign Up</Text>
        </View>
        <View style={styles.bottomImageContainer}>
          <Image style={styles.image} source={BgLogin} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 120,
  },
  textLogo: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
  },
  textInputContainer: {
    flex: 2,
    marginHorizontal: 30,
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  text2: {
    fontSize: 16,
    color: '#fdaf28',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1',
    padding: 12,
  },
  password: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgotPassword: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  support: {
    height: 180,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 160,
    width: 420,
  },
});
