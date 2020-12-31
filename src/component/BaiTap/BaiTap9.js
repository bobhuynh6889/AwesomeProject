import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from './Header';

export default class BaiTap9 extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* HEADER */}
        <View style={{height: 90}}>
          <Header title="Article 2"></Header>
        </View>
        {/* COVER IMAGE */}
        <View style={{height: 200}}>
          <Image
            style={{flex: 1}}
            source={{
              uri:
                'https://3i77hz2byv5n1pii73412ndb-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/iStock-665656116.jpg',
            }}
          />
        </View>

        <View style={{marginLeft: 20, marginRight: 20}}>
          {/* AUTHOR IMAGE */}
          <View style={{height: 50}}>
            <Image
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                marginTop: -20,
                borderStyle: 'solid',
                borderColor: 'white',
                borderWidth: 2,
              }}
              source={{
                uri:
                  'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/122889440_3516700785042695_4194849521649821332_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=2AtZ3p02E3AAX9Zruqp&_nc_ht=scontent.fsgn2-1.fna&oh=b5df099517247396177eee73e419c135&oe=5FE0FA5C',
              }}
            />
          </View>
          {/* TITLE */}
          <View style={{height: 50}}>
            <Text
              style={{
                color: 'black',
                fontSize: 22,
                fontWeight: '700',
              }}>
              How To Eat Healthy
            </Text>
          </View>
          {/* CONTENT */}
          <View style={{height: 150}}>
            <Text>
              Folly words widow one downs few age every seven. If miss part by
              fact he park just shew. Discovered had get considered projection
              who favourable. Necessary up knowledge it tolerably. Unwilling
              departure education is be dashwoods or an. Use off agreeable law
              unwilling sir deficient curiosity instantly. Easy mind life fact
              with see has bore ten. Parish any chatty can elinor direct for
              former. Up as meant widow equal an share least.
            </Text>
          </View>
          {/* TIME - COMMENT - LIKE */}
          <View
            style={{
              height: 60,
              flexDirection: 'row',
              borderStyle: 'solid',
              borderColor: '#969696',
              borderTopWidth: 1,
            }}>
            {/* TIME */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="clockcircleo" size={25} color="#969696" />
              <Text style={{color: '#969696', marginLeft: 8}}>
                Today 12:35 pm
              </Text>
            </View>
            <View style={{flex: 1}}>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                {/* COMMENT */}
                <Icon name="message1" size={25} color="#969696" />
                <View style={{width: 10}}></View>
                <Text>3</Text>
                <View style={{width: 10}}></View>
                {/* LIKE */}
                <Icon name="heart" size={25} color="red" />
                <View style={{width: 10}}></View>
                <Text>320</Text>
              </View>
            </View>
          </View>
          <View style={{flex: 1}}></View>
        </View>
      </View>
    );
  }
}
