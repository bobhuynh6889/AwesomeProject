/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Button from './Avatar3D/components/Button';
import Avatar from './Avatar3D/components/Avatar';
import PlusButton from './Avatar3D/components/PlusButton';

export default function Test() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 4,
          flexDirection: 'row',
          marginHorizontal: 30,
          shadowColor: '#000000',
          shadowOffset: {
            height: 0,
            width: 0,
          },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 1,
        }}>
        <View style={{flex: 3}}>
          <View
            style={{
              height: 252,
              backgroundColor: '#f5c283',
              borderTopLeftRadius: 35,
              borderBottomLeftRadius: 35,
            }}>
            <View style={{flex: 1, margin: 30}}>
              <Text style={{color: '#40315a', fontSize: 16}}>Total Bill</Text>
              <Text style={{color: '#40315a', fontSize: 40, fontWeight: '700'}}>
                $750.86
              </Text>
            </View>
            <View style={{flex: 1, marginLeft: 30}}>
              <Button title="Split Now" color="#f6c384" />
            </View>
          </View>
          <View
            style={{
              height: 90,
              width: 355,
              backgroundColor: '#382b56',
              marginTop: 20,
              flexDirection: 'row',
              borderRadius: 20,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 8,
                shadowColor: '#000000',
                shadowOffset: {
                  height: 0,
                  width: 0,
                },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 1,
              }}>
              <PlusButton
                iconName="exclamationcircleo"
                height={70}
                width={70}
                borderRadius={35}
                borderColor="#4c3d70"
                backgroundColor="#4c3d70"
                color="#f6c284"
                size={28}
              />
            </View>
            <View style={{flex: 3, justifyContent: 'center', marginLeft: 10}}>
              <Text style={{fontSize: 18, color: '#f6c284'}}>
                Your previous split
              </Text>
              <Text style={{fontSize: 18, color: '#ffffff'}}>$678.56</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#f5c283',
            height: 252,
            borderTopRightRadius: 35,
            borderBottomRightRadius: 35,
          }}>
          <View
            style={{
              alignItems: 'center',
              height: 30,
              marginRight: 30,
              marginTop: 30,
            }}>
            <Text style={{color: '#40315a', fontSize: 16}}>Split with</Text>
          </View>
          <View
            style={{
              height: 235,
              width: 80,
              marginRight: 30,
              backgroundColor: 'white',
              alignItems: 'center',

              borderRadius: 25,
              shadowColor: '#000000',
              shadowOffset: {
                height: 0,
                width: 0,
              },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              elevation: 1,
            }}>
            <Avatar />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
