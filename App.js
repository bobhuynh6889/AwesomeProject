/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  SectionList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
// SESSION 04
// import Login from './src/wala/WelcomeWala';
// import HeartButton from './src/component/HeartButton';
// import Product from './src/component/Product';
// import HeartButton from './src/component/HeartButton';
// import Product from './src/component/Product';
// import ProductM from './src/component/ProductM';

// BAI TAP UI
// import BaiTap1 from './src/component/BaiTap/BaiTap1';
// import BaiTap2 from './src/component/BaiTap2';
// import BaiTap3 from './src/component/BaiTap3';
// import BaiTap4 from './src/component/BaiTap4';
// import BaiTap5 from './src/component/BaiTap5';
// import BaiTap6 from './src/component/BaiTap6';
// import BaiTap7 from './src/component/BaiTap7';
// import BaiTap8 from './src/component/BaiTap8';
// import BaiTap9 from './src/component/BaiTap9';
// import Login1 from './src/component/Session04/Login1';
// import Category from './src/component/Session04/Category';
// import Baicuathay from './src/component/Baicuathay';
// import Register from './src/component/Session04/Register';
// import Baicuathay2 from './src/component/Baicuathay2';
// import GalleryHome from './src/component/Session06/GalleryHome';
// import GalleryThay from './src/component/Session06/GalleryThay';
// import Register2 from './src/component/Session04/Register2';
// import FlatList from './src/component/Session05/FlatList';
// import SectionListExample from './src/component/Session05/SectionListExample';
// import SectionListAdvancedExample from './src/component/Session05/SectionListAdvancedExample';
// import ScrollViewExample from './src/component/Session05/ScrollViewExample';
// import WelcomeWala from './src/wala/WelcomeWala';
// import Started from './src/wala/Started';
// import LoginWala from './src/wala/LoginWala';
// import ForgotPassword from './src/wala/ForgotPassword';
// import HeaderWala from './src/wala/HeaderWala';
// import RecoveryPassword from './src/wala/RecoveryPassword';

// import LoginPM from './src/component/Session06/LoginwithPM/LoginPM';
// import PassChangeSucced from './src/wala/PassChangeSucced';
// import LoginWala2 from './src/wala/LoginWala2';
// import StackNavigation from './src/component/Session08/StackNavigation';
// import Product from './src/component/Product';
// import Product1Screen from './src/component/Session08/screens/Product1Screen';
// import Product2 from './src/component/Product2';
// import AppNavigator from './src/component/Session08/AppNavigator';

// import ClickPicture from './src/component/Session07/ClickPicture';

// import Session09 from './src/component/Session09';
// import AsyncStorageExample from './src/component/Session09/AsyncStorageExample';

// import LoginFormikExample from './src/component/Session10/LoginFormikExample';

// import ReactNativePaper from './src/ReactNativePaper';

//SESSION 11

// import FireStoreExample from './src/component/Session11/FireStoreExample';
// import FirestoreQuiz from './src/component/Session11/FirestoreQuiz';
// import FireStoreRealtimeExample from './src/component/Session11/FireStoreRealtimeExample';
// import BaiThay from './src/component/Session11/BaiThay';
// import FireStoreChatRealTime from './src/component/Session11/FireStoreChatRealTime';
// import ImageCropPiker from './src/component/Session11/ImageCropPiker';
// import RemoteConfig from './src/component/Session11/RemoteConfig';
// import EmailAuthenExample from './src/component/Session11/AuthenticationExample/EmailAuthenExample';
// import PhoneAuthenExample from './src/component/Session11/AuthenticationExample/PhoneAuthenExample';
// import AppNavigator2 from './src/component/Session11/AuthenticationExample/AuthenticationFlow/AppNavigator';

// SESSION 12

// import KiemTra from './src/component/Session12/KiemTra'
import OneSignalExample from './src/component/Session12/OneSignalExample';


// UI Kitten
import Home from './src/component/UIKitten/Home';
// import Category2 from './src/component/UIKitten/components/Category';

// UI
// import Screen1 from './src/component/UI/Avatar3D/Screen1';
// import Screen2 from './src/component/UI/Avatar3D/Screen2';
// import Component1 from './src/component/UI/Component1';
// import Component2 from './src/component/UI/Component2';
// import Component3 from './src/component/UI/Component3';
// import Component4 from './src/component/UI/Component4';
// import Arrow from './src/component/UI/Avatar3D/components/Arrow';

// App English
import TestScreen from './src/AppEnglish/TestScreen';
// import HomeEnglish from './src/AppEnglish/components/Home';
import AppNavigatorEnglish from './src/AppEnglish/AppNavigatorEnglish';
import TestScreen2 from './src/AppEnglish/TestScreen2';
import AddQuestion from './src/AppEnglish/AddQuestion';
import FinishScreen from './src/AppEnglish/FinishScreen';


const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <BaiTap1></BaiTap1> */}
      {/* <BaiTap2></BaiTap2> */}
      {/* <BaiTap3></BaiTap3> */}
      {/* <BaiTap4></BaiTap4> */}
      {/* <BaiTap5></BaiTap5> */}
      {/* <BaiTap6></BaiTap6> */}
      {/* <BaiTap7></BaiTap7> */}
      {/* <BaiTap8></BaiTap8> */}
      {/* <BaiTap9></BaiTap9> */}

      {/* <Login1></Login1> */}
      {/* <Category></Category> */}
      {/* <Register></Register> */}
      {/* <Register2></Register2> */}
      {/* <Baicuathay2></Baicuathay2> */}
      {/* <GalleryHome></GalleryHome> */}
      {/* <GalleryThay></GalleryThay> */}

      {/* <ScrollViewExample></ScrollViewExample> */}
      {/* <FlatList></FlatList> */}
      {/* <SectionListExample></SectionListExample> */}
      {/* <SectionListAdvancedExample></SectionListAdvancedExample> */}

      {/* <WelcomeWala></WelcomeWala> */}
      {/* <Started></Started> */}
      {/* <LoginWala></LoginWala> */}
      {/* <ForgotPassword></ForgotPassword> */}
      {/* <HeaderWala></HeaderWala> */}
      {/* <RecoveryPassword></RecoveryPassword> */}
      {/* <PassChangeSucced></PassChangeSucced> */}
      {/* <LoginWala2></LoginWala2> */}

      {/* <LoginPM></LoginPM> */}
      {/* <ClickPicture></ClickPicture> */}
      {/* <Product></Product> */}
      {/* <Product1Screen></Product1Screen> */}
      {/* <Product2></Product2> */}

      {/* <StackNavigation></StackNavigation> */}
      {/* <AppNavigator /> */}

      {/* <Session09 /> */}
      {/* <AsyncStorageExample /> */}

      {/* <ReactNativePaper /> */}

      {/* <LoginFormikExample /> */}

      {/* <FireStoreExample /> */}
      {/* <FirestoreQuiz /> */}
      {/* <FireStoreRealtimeExample /> */}
      {/* <BaiThay /> */}
      {/* <FireStoreChatRealTime /> */}
      {/* <ImageCropPiker /> */}
      {/* <RemoteConfig /> */}
      {/* <EmailAuthenExample /> */}
      {/* <PhoneAuthenExample /> */}
      {/* <AppNavigator2 /> */}

      {/* <KiemTra/> */}
      {/* <OneSignalExample/> */}

      {/* <Home /> */}
      {/* <Category2 /> */}

      {/* <Screen1 /> */}
      {/* <Screen2 /> */}
      {/* <Component1 /> */}
      {/* <Component2 /> */}
      {/* <Component3 /> */}
      {/* <Component4 /> */}
      {/* <Arrow /> */}

      {/* <TestScreen /> */}
      {/* <HomeEnglish /> */}
      <AppNavigatorEnglish />
      {/* <TestScreen2 /> */}
      {/* <AddQuestion/> */}
      {/* <FinishScreen/> */}
    </View>
  );
};

export default App;
