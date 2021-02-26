import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Button, TextInput, Checkbox} from 'react-native-paper';
import moment from 'moment';
import {SvgXml} from 'react-native-svg';

const xml = '<svg width="414" height="102" viewBox="0 0 414 102" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M0 22H136.532C147.626 22 157.815 28.1225 163.022 37.9184L168.314 47.8741C174.555 59.6142 186.222 67.4859 199.444 68.8786L201.657 69.1117C203.744 69.3315 205.844 69.3814 207.939 69.2611C221.113 68.5042 232.997 61.0943 239.475 49.5972L246.418 37.2737C251.735 27.8377 261.725 22 272.555 22H414V102H0V22Z" fill="white"/></g><defs><filter id="filter0_d" x="-30" y="0" width="474" height="140" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="8"/><feGaussianBlur stdDeviation="15"/><feColorMatrix type="matrix" values="0 0 0 0 0.423529 0 0 0 0 0.494118 0 0 0 0 0.576471 0 0 0 0.16 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>';

const xml2 = '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><circle cx="50" cy="44" r="30" fill="#40AA54"/></g><path d="M41.9182 55.0365L42.8126 54.5893L42.8126 54.5893L41.9182 55.0365ZM58.0814 55.0365L58.9759 55.4837L58.9759 55.4837L58.0814 55.0365ZM39.1249 41.7998H60.8747V39.7998H39.1249V41.7998ZM60.1998 41.1249V41.8269H62.1998V41.1249H60.1998ZM57.8173 54.1998H42.1824V56.1998H57.8173V54.1998ZM39.7998 41.8269V41.1249H37.7998V41.8269H39.7998ZM42.8126 54.5893C40.8313 50.6267 39.7998 46.2572 39.7998 41.8269H37.7998C37.7998 46.5677 38.9036 51.2434 41.0237 55.4837L42.8126 54.5893ZM42.1824 54.1998C42.4493 54.1998 42.6932 54.3506 42.8126 54.5893L41.0237 55.4837C41.2432 55.9226 41.6917 56.1998 42.1824 56.1998V54.1998ZM57.187 54.5893C57.3064 54.3506 57.5504 54.1998 57.8173 54.1998V56.1998C58.3079 56.1998 58.7564 55.9226 58.9759 55.4837L57.187 54.5893ZM60.1998 41.8269C60.1998 46.2572 59.1683 50.6267 57.187 54.5893L58.9759 55.4837C61.096 51.2434 62.1998 46.5677 62.1998 41.8269H60.1998ZM60.8747 41.7998C60.502 41.7998 60.1998 41.4976 60.1998 41.1249H62.1998C62.1998 40.3931 61.6065 39.7998 60.8747 39.7998V41.7998ZM39.1249 39.7998C38.3931 39.7998 37.7998 40.3931 37.7998 41.1249H39.7998C39.7998 41.4976 39.4976 41.7998 39.1249 41.7998V39.7998ZM44.4573 41.3143L49.2573 33.3143L47.5423 32.2853L42.7423 40.2853L44.4573 41.3143ZM50.7423 33.3143L55.5423 41.3143L57.2573 40.2853L52.4573 32.2853L50.7423 33.3143ZM48.9998 43.1998V51.1998H50.9998V43.1998H48.9998ZM45.9998 48.1998H53.9998V46.1998H45.9998V48.1998Z" fill="white"/><defs><filter id="filter0_d" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="6"/><feGaussianBlur stdDeviation="10"/><feColorMatrix type="matrix" values="0 0 0 0 0.25098 0 0 0 0 0.666667 0 0 0 0 0.329412 0 0 0 0.2 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>';

export default function index() {
  const [text, setText] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,

        marginHorizontal: 10,
        backgroundColor:'pink',
      }}>
      <Button
        color="pink"
        icon="bell"
        mode="contained"
        style={{
          width: '100%',
          height: 48,
          borderRadius: 10,
          justifyContent: 'center',
        }}
        labelStyle={{color: 'white', fontSize: 18}}
        onPress={() => console.log('OKE')}>
        BUY
      </Button>

      <TextInput
        style={{borderColor: 'red'}}
        // multiline={true}
        selectionColor="green"
        mode="outlined"
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />

      <Text>{moment('02/11/1995').format('DD / MM / YYYY hh:mm:ss a')}</Text>
      <SvgXml xml={xml2} height="30%" width="30%" />
      
      <SvgXml xml={xml} height="100%" width="100%" />
    </SafeAreaView>
  );
}
