import React, {Component} from 'react';
import {
  Keyboard,
  Platform,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {Formik} from 'formik';
import * as Yup from 'yup';
import * as Animatable from 'react-native-animatable';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

let schema = Yup.object().shape({
  email: Yup.string()
    .email('Địa chỉ email chưa đúng')
    .required('Bắt buộc nhập email'),
  password: Yup.string()
    .min(8, 'Mật khẩu ngắn hơn 8 ký tự')
    .required('Bắt buộc nhập mật khẩu'),
});

const PRIMARY_COLOR = '#3466FE';

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  button: {
    height: 48,
    width: '100%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
  },

  formContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#F0F0F5',
    height: 60,
    backgroundColor: '#F7F9FC',
    // backgroundColor: 'red',
    marginTop: 24,
    marginHorizontal: 12,
  },
});

class LoginHeader extends Component {
  render() {
    return (
      <View
        style={{
          height: 240,
          backgroundColor: PRIMARY_COLOR,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[styles.text, {fontSize: 48, fontWeight: '700'}]}>
          Hello
        </Text>
        <View style={{height: 16}} />
        <Text style={[styles.text, {fontSize: 16}]}>
          Sign in to your account
        </Text>
      </View>
    );
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
    };
  }

  // onSignIn = () => {
  //   // before
  //   this.setState({loading: true});
  //   // fetch
  //   const url = 'https://training.softech.cloud/api/users/login';
  //   const data = {
  //     email: this.state.email,
  //     password: this.state.password,
  //   };

  //   // send a request
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       this.setState({loading: false});
  //       console.log(json);
  //       if (json.length === 0) {
  //         Alert.alert('Thông báo', 'Đăng nhập không thành công');
  //       } else {
  //         Alert.alert('Thông báo', 'Đăng nhập thành công');
  //       }
  //     })
  //     .catch((error) => {
  //       this.setState({loading: false});
  //       console.log(error);
  //       Alert.alert('Thông báo', 'Có lỗi xảy ra');
  //     });
  // };

  // onSignInWithAxios = () => {
  //   // before
  //   this.setState({loading: true});
  //   // axios
  //   const url = 'https://training.softech.cloud/api/users/login';
  //   const data = {
  //     email: this.state.email,
  //     password: this.state.password,
  //   };

  //   axios
  //     .post(url, data)
  //     .then((response) => {
  //       this.setState({loading: false});
  //       console.log(response.data);
  //       if (response.data.length === 0) {
  //         Alert.alert('Thông báo', 'Đăng nhập không thành công');
  //       } else {
  //         Alert.alert('Thông báo', 'Đăng nhập thành công');
  //       }
  //     })
  //     .catch((error) => {
  //       this.setState({loading: false});
  //       console.log(error);
  //       Alert.alert('Thông báo', 'Có lỗi xảy ra');
  //     });
  // };

  render() {
    // let disabled = !(
    //   this.state.email.length > 0 && this.state.password.length > 0
    // );
    let disabled = false;

    return (
      <React.Fragment>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={schema}
          validateOnMount={true}
          onSubmit={(values) => {
            axios
              .post('https://training.softech.cloud/api/users/login', values)
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => {
                console.log(err);
              });
            console.log(values);
          }}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View style={{flex: 1}}>
              <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                  <View style={{flex: 1}}>
                    <TextInput
                      style={{flex: 1, paddingHorizontal: 12}}
                      autoCapitalize="none"
                      placeholder="Email"
                      onChangeText={handleChange('email')}
                      value={values.email}
                    />
                  </View>
                  <View style={{justifyContent: 'center'}}>
                    <Icon
                      name="account"
                      size={24}
                      color="#CCD1DD"
                      style={{marginHorizontal: 8}}
                    />
                  </View>
                </View>
                {errors.email && (
                  <Text style={{marginHorizontal: 12, color: 'red'}}>
                    {errors.email}
                  </Text>
                )}
                <View style={styles.inputContainer}>
                  <View style={{flex: 1}}>
                    <TextInput
                      secureTextEntry={this.state.secureTextEntry}
                      style={{flex: 1, paddingHorizontal: 12}}
                      placeholder="Password"
                      onChangeText={handleChange('password')}
                    />
                  </View>
                  <View style={{justifyContent: 'center'}}>
                    <Icon
                      name={this.state.secureTextEntry ? 'eye-off' : 'eye'}
                      size={24}
                      color={this.state.secureTextEntry ? '#CCD1DD' : 'black'}
                      style={{marginHorizontal: 8}}
                      onPress={() => {
                        let s = !this.state.secureTextEntry;
                        this.setState({secureTextEntry: s});
                      }}
                    />
                  </View>
                </View>
                {errors.password && (
                  <Text
                    style={{
                      marginHorizontal: 12,
                      color: 'red',
                    }}>
                    {errors.password}
                  </Text>
                )}
                <View style={{marginTop: 12, alignItems: 'flex-end'}}>
                  <Text style={{marginRight: 12, color: 'gray'}}>
                    Forgot your password?
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 120,
                  backgroundColor: 'white',
                }}>
                <View
                  style={{
                    flex: 1,
                    marginHorizontal: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {this.state.loading && <ActivityIndicator />}
                  {!this.state.loading && (
                    <TouchableOpacity
                      style={[
                        styles.button,
                        {backgroundColor: disabled ? 'gray' : PRIMARY_COLOR},
                      ]}
                      disabled={disabled}
                      onPress={handleSubmit}>
                      <Text
                        style={[
                          styles.text,
                          {
                            fontSize: 16,
                            fontWeight: '700',
                            alignSelf: 'center',
                          },
                        ]}>
                        SIGN IN
                      </Text>
                    </TouchableOpacity>
                  )}
                  <View height={12} />
                  <Text>Don't have an account? Create</Text>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </React.Fragment>
    );
  }
}

export default function Login() {
  const [height, setHeight] = React.useState(240);
  const headerRef = React.useRef(null);
  const formRef = React.useRef(null);

  React.useEffect(() => {
    formRef.current.bounceInUp(1000);

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        headerRef.current.transitionTo({height: 160}, 750);
        headerRef.current.fadeInUp(500);
        // setHeight(160);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        headerRef.current.transitionTo({height: 240}, 250);
        // setHeight(240);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback
      activeOpacity={1}
      style={{flex: 1, backgroundColor: 'white'}}
      onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}>
        <Animatable.View style={{flex: 1}} ref={formRef}>
          <Animatable.View
            ref={headerRef}
            style={{
              height: height,
              backgroundColor: PRIMARY_COLOR,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={[styles.text, {fontSize: 48, fontWeight: '700'}]}>
              Hello
            </Text>
            <View style={{height: 16}} />
            <Text style={[styles.text, {fontSize: 16}]}>
              Sign in to your account
            </Text>
          </Animatable.View>
          <LoginForm />
        </Animatable.View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
