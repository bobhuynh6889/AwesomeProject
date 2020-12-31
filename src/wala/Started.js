import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  Pressable,
  Swiper,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BgFruit from './asset/images/bgfruit.jpg';
import BgImg from './asset/images/bgimg.jpg';
import ButtonWala from './ButtonWala';

const {width, height} = Dimensions.get('window');

// const background = [
//   {
//     id: 1,
//     uri:
//       'https://image.freepik.com/free-photo/colorful-healthy-fresh-berries-row-white-background_449-19325449.jpg',
//   },
//   {
//     id: 2,
//     uri:
//       'https://www.wallpaperflare.com/static/674/272/1017/berry-black-blackberry-blueberry-wallpaper.jpg',
//   },
// ];

export default class Started extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* TITLE */}
        <ScrollView style={{height: 350}} horizontal pagingEnabled={true}>
          {/* FRESH INGREDIENT */}
          <Pressable
            onPress={() => {
              this.setState({touch: true});
            }}>
            <View style={styles.headerContainer}>
              <View>
                <Text style={styles.title}>Fresh</Text>
              </View>
              <View>
                <Text style={styles.title}>Ingredient</Text>
              </View>
              <View>
                {/* DESCRIPTION */}
                <Text style={styles.description}>
                  Fresh ingredients for tasty,
                </Text>
              </View>
              <View>
                <Text style={styles.description}>home-cooked dinners.</Text>
              </View>
            </View>
          </Pressable>

          {/* DELIVERY SERVICE */}
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.title}>Delivery</Text>
            </View>
            <View>
              <Text style={styles.title}>Service</Text>
            </View>
            <View>
              {/* DESCRIPTION */}
              <Text style={styles.description}>Delivery 7 days a week.</Text>
            </View>
            <View>
              <Text style={styles.description}>Pause or ship anytime.</Text>
            </View>
          </View>

          {/* DISCOVERY TIPS */}
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.title}>Discovery</Text>
            </View>
            <View>
              <Text style={styles.title}>Tips</Text>
            </View>
            <View>
              {/* DESCRIPTION */}
              <Text style={styles.description}>
                Cook perfect meals with professional tips.
              </Text>
            </View>
          </View>

          {/* PERFECT MEALS */}
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.title}>Perfect</Text>
            </View>
            <View>
              <Text style={styles.title}>Meals</Text>
            </View>
            <View>
              {/* DESCRIPTION */}
              <Text style={styles.description}>
                Tasty home cooked meals, without all
              </Text>
            </View>
            <View>
              <Text style={styles.description}>the fuss.</Text>
            </View>
          </View>
        </ScrollView>

        {/* BUTTON GET STARTED*/}
        <View>
          <ButtonWala text="GET STARTED"></ButtonWala>
        </View>

        {/* SUPPORT ACCOUNT */}
        <View style={styles.supportContariner}>
          <Text style={styles.support}>Have an Account?</Text>
          <View style={{width: 8}} />
          <Button
            title="Login"
            onPress={() => {
              navigation.navigate('Welcomeback');
            }}
          />
        </View>

        {/* BACKGROUND */}
        <View style={styles.bgContainer}>
          <Image
            style={styles.background}
            source={{
              uri:
                'https://www.wallpaperflare.com/static/674/272/1017/berry-black-blackberry-blueberry-wallpaper.jpg',
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    height: 460,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 65,
    marginBottom: 10,
    color: '#3c875f',
    fontFamily: 'Cochin',
    fontWeight: '700',
  },
  description: {
    fontSize: 18,
    marginHorizontal: 20,
    marginTop: 10,
  },
  buttonContainer: {
    height: 60,
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
  supportContariner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  support: {
    fontSize: 18,
  },
  bgContainer: {
    flex: 3,
  },
  background: {
    height: 300,
    width: '100%',
  },
});
