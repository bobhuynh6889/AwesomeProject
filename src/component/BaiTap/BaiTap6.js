import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Header from './Header';

class ActionButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          height: this.props.height,
          width: this.props.width,
          backgroundColor: 'white',
          borderRadius: 25,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#3464F6',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: this.props.color,
          }}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default class BaiTap6 extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ededed'}}>
        {/* HEADER */}
        <Header title="Rent Apartment"></Header>
        {/* IMAGE COVER */}
        <View style={{flex: 1, backgroundColor: 'purple'}}>
          <Image
            style={{flex: 1}}
            source={{
              uri:
                'https://www.apartments.com/images/default-source/default-album/loft-with-exposed-brick.tmb-featuredim.jpg?sfvrsn=83ac6294_0',
            }}
          />
        </View>
        {/* MIDLLE OPTION BOOKING */}
        <View
          style={{
            height: 300,
            marginTop: -80,
            margin: 15,
          }}>
          {/* TITLE */}
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}>
            <Text style={{fontWeight: '700', fontSize: 16, margin: 10}}>
              Private Rooms with Central Park View
            </Text>
          </View>
          {/* RENT HOUSE */}
          <View
            style={{
              height: 90,
              backgroundColor: 'white',
              flexDirection: 'row',
              marginTop: -50,
              borderStyle: 'solid',
              borderColor: '#b5b5b5',
              borderBottomWidth: 1,
            }}>
            {/* TITLE RENT HOUSE */}
            <View style={{flex: 1, marginLeft: 10}}>
              <View>
                <Text style={{color: '#b5b5b5'}}>Rent House</Text>
              </View>
              {/* 10 / NIGHT */}
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 25, fontWeight: '700'}}>10</Text>
                <Text style={{marginTop: 10}}>/night</Text>
              </View>
            </View>
            {/* BOOK NOW BUTTON */}
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  height: 48,
                  width: 120,
                  backgroundColor: '#3464F6',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontWeight: '900'}}>
                  BOOK NOW
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* FACILITIES */}
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}>
            {/* TITLE FACILITIES */}
            <Text style={{fontWeight: '700', marginLeft: 10, marginTop: 10}}>
              Facilities
            </Text>
            {/* GUESTS - BED - BATHS */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 15,
                marginLeft: 10,
              }}>
              <ActionButton
                height={25}
                width={85}
                text="2 Guests"
                color="#3464F6"></ActionButton>
              <View style={{width: 10}}></View>
              <ActionButton
                height={25}
                width={60}
                text="2 Bed"
                color="#3464F6"></ActionButton>
              <View style={{width: 10}}></View>
              <ActionButton
                height={25}
                width={80}
                text="2 Baths"
                color="#3464F6"></ActionButton>
            </View>
            {/* WIFI - TV - FREE PARKING */}
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                flexDirection: 'row',
                marginTop: 20,
                marginLeft: 30,
                borderBottomRightRadius: 15,
              }}>
              <Text>Wi-Fi</Text>
              <View style={{width: 60}}></View>
              <Text>TV</Text>
              <View style={{width: 60}}></View>
              <Text>Free Parking</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1, margin: 20}}>
          <Text style={{fontWeight: '700'}}>About</Text>
          <Text style={{paddingTop: 20}}>
            In it except to so temper mutual tastes mother. Interested
            cultivated its continuing now yet are. Out interested acceptance our
            partiality affronting unpleasant why add. Esteem garden men yet shy
            course. Consulted up my tolerably sometimes perpetual oh.
          </Text>
        </View>
      </View>
    );
  }
}
