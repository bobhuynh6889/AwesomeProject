import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Button from './Avatar3D/components/Button';
import AvatarSimple from './Avatar3D/components/AvatarSimple';
import {SvgXml} from 'react-native-svg';

const xml =
  '<svg width="350" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg"><line stroke-dasharray="5, 5" x1="0" y1="10" x2="350" y2="10" style="stroke: rgb(76, 61, 112);"></line></svg>';

export default function Component3() {
  return (
    <SafeAreaView style={{flex: 1, marginTop: 20}}>
      <View
        style={{
          height: 300,
          flexDirection: 'row',
          marginHorizontal: 30,
        }}>
        <View
          style={{
            flex: 8,
            backgroundColor: '#f6c284',
            borderRadius: 30,
          }}>
          <View
            style={{
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              style={{
                height: 45,
                width: 130,
                borderRadius: 15,
                backgroundColor: '#382d5a',
                marginTop: 12,
              }}
              color="#ffffff"
              fontSize={16}
              title="Receipt"
            />
          </View>
          <View style={{height: 40}}>
            <View style={{flex: 1, marginTop: 10}}>
              <SvgXml xml={xml} height="100%" width="100%" />
            </View>
          </View>
          <View
            style={{
              marginTop: -40,
              height: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                marginLeft: -20,
                height: 40,
                width: 40,
                borderRadius: 20,
                backgroundColor: '#49426D',
              }}></View>
            <View
              style={{
                marginRight: -20,
                height: 40,
                width: 40,
                borderRadius: 20,
                backgroundColor: '#49426D',
              }}></View>
          </View>
          <View
            style={{
              flex: 3,
            }}>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 8}}>
              <View style={{flex: 2, marginLeft: 25}}>
                <Text style={{color: '#49426D', fontSize: 18}}>Title</Text>
                <View style={{height: 10}} />
                <Text
                  style={{color: '#49426D', fontSize: 25, fontWeight: '700'}}>
                  Team Dinner
                </Text>
              </View>
              <View style={{width: 140}}>
                <Text style={{color: '#49426D', fontSize: 18}}>Total Bill</Text>
                <View style={{height: 10}} />
                <Text
                  style={{color: '#49426D', fontSize: 25, fontWeight: '700'}}>
                  $750.86
                </Text>
              </View>
            </View>
            <View style={{flex: 2, margin: 12}}>
              <View
                style={{
                  borderRadius: 25,
                  height: '100%',
                  width: '100%',
                  backgroundColor: '#49426D',
                }}>
                <View
                  style={{
                    flex: 2,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <AvatarSimple
                      style={{
                        borderColor: '#bf91f3',
                        backgroundColor: '#bf91f3',
                      }}
                      source={{
                        uri:
                          'https://firebasestorage.googleapis.com/v0/b/test-app-620dd.appspot.com/o/avatar3D%2Favatar5.png?alt=media&token=8738396c-857d-4781-ba81-b954a3862ba8',
                      }}
                    />
                    <View style={{width: 15}} />
                    <AvatarSimple
                      style={{
                        borderColor: '#f7a392',
                        backgroundColor: '#f7a392',
                      }}
                      source={{
                        uri:
                          'https://firebasestorage.googleapis.com/v0/b/test-app-620dd.appspot.com/o/avatar3D%2Favatar6.png?alt=media&token=2c0b0882-3449-4902-b71e-4b0f42e01fe3',
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: -70,
                    }}>
                    <AvatarSimple
                      style={{
                        borderColor: '#49426D',
                        borderWidth: 1,
                        backgroundColor: '#8cb3e4',
                      }}
                      source={{
                        uri:
                          'https://firebasestorage.googleapis.com/v0/b/test-app-620dd.appspot.com/o/avatar3D%2Favatar3.png?alt=media&token=17b1f6c1-4c16-45a6-b308-7dcdfa38ccc5',
                      }}
                    />
                  </View>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text
                    style={{fontSize: 18, color: '#ffffff', fontWeight: '700'}}>
                    Splitting With
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
