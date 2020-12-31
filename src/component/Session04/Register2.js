import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {SvgXml} from 'react-native-svg';
import Logo from './logo.png';

const xmlWave1 =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#51288F" fill-opacity="1" d="M0,224L130.9,96L261.8,288L392.7,64L523.6,224L654.5,32L785.5,0L916.4,64L1047.3,224L1178.2,288L1309.1,288L1440,160L1440,320L1309.1,320L1178.2,320L1047.3,320L916.4,320L785.5,320L654.5,320L523.6,320L392.7,320L261.8,320L130.9,320L0,320Z"></path></svg>';
const xmlWave2 =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#51288F" fill-opacity="0.5" d="M0,224L84.7,128L169.4,224L254.1,224L338.8,256L423.5,192L508.2,96L592.9,192L677.6,32L762.4,160L847.1,0L931.8,128L1016.5,64L1101.2,160L1185.9,192L1270.6,288L1355.3,64L1440,128L1440,320L1355.3,320L1270.6,320L1185.9,320L1101.2,320L1016.5,320L931.8,320L847.1,320L762.4,320L677.6,320L592.9,320L508.2,320L423.5,320L338.8,320L254.1,320L169.4,320L84.7,320L0,320Z"></path></svg>';
const xmlWave3 =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#51288F" fill-opacity="1" d="M0,128L0,128L57.6,128L57.6,32L115.2,32L115.2,192L172.8,192L172.8,64L230.4,64L230.4,160L288,160L288,128L345.6,128L345.6,224L403.2,224L403.2,224L460.8,224L460.8,224L518.4,224L518.4,256L576,256L576,128L633.6,128L633.6,64L691.2,64L691.2,160L748.8,160L748.8,32L806.4,32L806.4,128L864,128L864,32L921.6,32L921.6,32L979.2,32L979.2,288L1036.8,288L1036.8,64L1094.4,64L1094.4,160L1152,160L1152,256L1209.6,256L1209.6,192L1267.2,192L1267.2,64L1324.8,64L1324.8,32L1382.4,32L1382.4,288L1440,288L1440,0L1382.4,0L1382.4,0L1324.8,0L1324.8,0L1267.2,0L1267.2,0L1209.6,0L1209.6,0L1152,0L1152,0L1094.4,0L1094.4,0L1036.8,0L1036.8,0L979.2,0L979.2,0L921.6,0L921.6,0L864,0L864,0L806.4,0L806.4,0L748.8,0L748.8,0L691.2,0L691.2,0L633.6,0L633.6,0L576,0L576,0L518.4,0L518.4,0L460.8,0L460.8,0L403.2,0L403.2,0L345.6,0L345.6,0L288,0L288,0L230.4,0L230.4,0L172.8,0L172.8,0L115.2,0L115.2,0L57.6,0L57.6,0L0,0L0,0Z"></path></svg>';
const xmlWave4 =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#51288F" fill-opacity="0.5" d="M0,0L0,256L57.6,256L57.6,128L115.2,128L115.2,192L172.8,192L172.8,224L230.4,224L230.4,32L288,32L288,32L345.6,32L345.6,320L403.2,320L403.2,64L460.8,64L460.8,128L518.4,128L518.4,288L576,288L576,256L633.6,256L633.6,288L691.2,288L691.2,224L748.8,224L748.8,128L806.4,128L806.4,96L864,96L864,128L921.6,128L921.6,160L979.2,160L979.2,160L1036.8,160L1036.8,32L1094.4,32L1094.4,224L1152,224L1152,160L1209.6,160L1209.6,320L1267.2,320L1267.2,96L1324.8,96L1324.8,64L1382.4,64L1382.4,224L1440,224L1440,0L1382.4,0L1382.4,0L1324.8,0L1324.8,0L1267.2,0L1267.2,0L1209.6,0L1209.6,0L1152,0L1152,0L1094.4,0L1094.4,0L1036.8,0L1036.8,0L979.2,0L979.2,0L921.6,0L921.6,0L864,0L864,0L806.4,0L806.4,0L748.8,0L748.8,0L691.2,0L691.2,0L633.6,0L633.6,0L576,0L576,0L518.4,0L518.4,0L460.8,0L460.8,0L403.2,0L403.2,0L345.6,0L345.6,0L288,0L288,0L230.4,0L230.4,0L172.8,0L172.8,0L115.2,0L115.2,0L57.6,0L57.6,0L0,0L0,0Z"></path></svg>';

class BottomWave extends Component {
  render() {
    return (
      <React.Fragment>
        <View
          style={{
            height: 100,
            width: '100%',
            position: 'absolute',
          }}>
          <SvgXml xml={xmlWave1} height="100%" width="100%" />
        </View>
        <View
          style={{
            height: 100,
            width: '100%',
            position: 'absolute',
          }}>
          <SvgXml xml={xmlWave2} height="100%" width="100%" />
        </View>
      </React.Fragment>
    );
  }
}

class TopWave extends Component {
  render() {
    return (
      <React.Fragment>
        <View
          style={{
            height: 100,
            width: '100%',
            position: 'absolute',
          }}>
          <SvgXml xml={xmlWave3} height="100%" width="100%" />
        </View>
        <View
          style={{
            height: 100,
            width: '100%',
            position: 'absolute',
          }}>
          <SvgXml xml={xmlWave4} height="100%" width="100%" />
        </View>
      </React.Fragment>
    );
  }
}

// class Form extends Component {
//   render() {
//     return (
//       <View
//         style={{
//           borderBottomColor: 'white',
//           borderBottomWidth: 1.5,
//           marginVertical: 8,
//           flexDirection: 'row',
//           alignItems: 'center',
//           paddingVertical: 12,
//           marginHorizontal: 20,
//         }}>
//         <FontAwesome5Icon name={this.props.nameIcon} size={25} color="white" />
//         <TextInput
//           style={{
//             fontSize: 19,
//             color: 'white',
//             marginLeft: 10,
//           }}
//           placeholder={this.props.placeholder}
//           placeholderTextColor="white"
//         />
//       </View>
//     );
//   }
// }

// class PasswordInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       secureTextEntry: true,
//     };
//   }
//   render() {
//     return (
//       <View
//         style={{
//           borderBottomColor: 'white',
//           borderBottomWidth: 1.5,
//           marginVertical: 8,
//           flexDirection: 'row',
//           alignItems: 'center',
//           paddingVertical: 12,
//           marginHorizontal: 20,
//         }}>
//         <FontAwesome5Icon
//           name={this.state.secureTextEntry ? 'lock' : 'unlock'}
//           size={25}
//           color="white"
//           onPress={() => {
//             let s = !this.state.secureTextEntry;
//             this.setState({secureTextEntry: s});
//           }}
//         />
//         <TextInput
//           style={{
//             fontSize: 19,
//             color: 'white',
//             marginLeft: 10,
//           }}
//           secureTextEntry={this.state.secureTextEntry}
//           placeholder="Password"
//           placeholderTextColor="white"
//         />
//       </View>
//     );
//   }
// }

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      fullname: '',
      phone: '',
      password: '',
      secureTextEntry: true,
    };
  }
  render() {
    let disabled = !(
      this.state.username.length > 0 &&
      this.state.fullname.length > 0 &&
      this.state.phone.length > 0 &&
      this.state.password.length > 0
    );
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        <LinearGradient
          style={{flex: 1}}
          // BACKGROUND GRADIENT
          colors={['#7B1FA2', '#9C27B0', '#7B1FA2']}>
          <View style={{flex: 1}}>
            {/* TOP WAVE */}
            <View style={{height: 100, marginTop: -4}}>
              <TopWave></TopWave>
            </View>
            {/* LOGO */}
            <View style={styles.logoView}>
              <LinearGradient
                borderRadius={95}
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}
                colors={['#673AB7', '#E040FB', '#673AB7']}>
                <View style={styles.logoViewOut}>
                  <View style={styles.logoViewIn}>
                    <Image source={Logo} />
                  </View>
                </View>
              </LinearGradient>
            </View>
            {/* FORM REGISTION */}
            <View style={{flex: 2}}>
              <View
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: 1.5,
                  marginVertical: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 12,
                  marginHorizontal: 20,
                }}>
                <FontAwesome5Icon
                  name="clipboard-list"
                  size={25}
                  color="white"
                />
                <TextInput
                  style={{
                    fontSize: 19,
                    color: 'white',
                    marginLeft: 10,
                  }}
                  placeholder="Username"
                  placeholderTextColor="white"
                  onChangeText={(text) => {
                    this.setState({username: text});
                  }}
                />
              </View>
              <View
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: 1.5,
                  marginVertical: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 12,
                  marginHorizontal: 20,
                }}>
                <FontAwesome5Icon name="user" size={25} color="white" />
                <TextInput
                  style={{
                    fontSize: 19,
                    color: 'white',
                    marginLeft: 10,
                  }}
                  placeholder="Fullname"
                  placeholderTextColor="white"
                  onChangeText={(text) => {
                    this.setState({fullname: text});
                  }}
                />
              </View>
              <View
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: 1.5,
                  marginVertical: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 12,
                  marginHorizontal: 20,
                }}>
                <FontAwesome5Icon name="phone" size={25} color="white" />
                <TextInput
                  style={{
                    fontSize: 19,
                    color: 'white',
                    marginLeft: 10,
                  }}
                  placeholder="Phone"
                  placeholderTextColor="white"
                  onChangeText={(text) => {
                    this.setState({phone: text});
                  }}
                />
              </View>
              <View
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: 1.5,
                  marginVertical: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 12,
                  marginHorizontal: 20,
                }}>
                <FontAwesome5Icon
                  name={this.state.secureTextEntry ? 'lock' : 'unlock'}
                  size={25}
                  color="white"
                  onPress={() => {
                    let s = !this.state.secureTextEntry;
                    this.setState({secureTextEntry: s});
                  }}
                />
                <TextInput
                  style={{
                    fontSize: 19,
                    color: 'white',
                    marginLeft: 10,
                  }}
                  placeholder="Password"
                  placeholderTextColor="white"
                  secureTextEntry={this.state.secureTextEntry}
                  onChangeText={(text) => {
                    this.setState({password: text});
                  }}
                />
              </View>
            </View>
            {/* REGISTER BUTTON */}
            <View style={{height: 100}}>
              <TouchableOpacity
                style={[
                  styles.button,
                  {backgroundColor: disabled ? 'white' : '#4C278D'},
                ]}
                disabled={disabled}>
                <Text
                  style={[
                    styles.textButton,
                    {color: disabled ? '#4C278D' : 'white'},
                  ]}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
            {/* BOTTOM WAVE */}
            <View style={{height: 100, marginBottom: -4}}>
              <BottomWave></BottomWave>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoViewOut: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 190,
    width: 190,
  },
  logoViewIn: {
    height: 150,
    width: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
  },
  button: {
    height: 60,
    backgroundColor: '#4C278D',
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});
