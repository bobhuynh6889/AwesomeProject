import React, {Component} from 'react';
import {ImageBackground, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from './Header';

class Articles extends Component {
  render() {
    return (
      <View
        style={{
          flex: 4,
          padding: 15,
        }}>
        {/* IMAGE BACKGROUND */}
        <ImageBackground
          style={{
            height: 230,
            justifyContent: 'center',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
          source={{
            uri: this.props.uriBackground,
          }}>
          <View
            style={{
              flex: 4,
              margin: 20,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}>
            {/* TITLE */}
            <View style={{width: 150}}>
              <Text style={{color: 'white', fontSize: 25, fontWeight: '700'}}>
                {this.props.title}
              </Text>
            </View>
            <View
              style={{
                width: 300,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              {/* TIPS */}
              <Icon name="star" size={20} color="white" />
              <View style={{width: 15}}></View>
              <Text style={{color: 'white', fontWeight: '700'}}>
                10 Useful Tips
              </Text>
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* IMAGE AUTHOR */}
            <Image
              style={{height: 50, width: 50, borderRadius: 25}}
              source={{
                uri: this.props.uriAuthor,
              }}
            />
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
            }}>
            {/* AUTHOR NAME */}
            <Text style={{fontWeight: '700'}}>{this.props.nameAuthor}</Text>
            {/* TIME UPDATE */}
            <Text style={{color: '#a8a8a8'}}>Today 12:35 pm</Text>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'center',
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
    );
  }
}

export default class BaiTap7 extends Component {
  render() {
    return (
      // ** HEADER ** //
      <View style={{flex: 1}}>
        <Header title="Articles List 2"></Header>
        {/* ARTICLES */}
        <View style={{flex: 10, backgroundColor: '#ededed'}}>
          <Articles
            uriBackground="https://3i77hz2byv5n1pii73412ndb-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/iStock-665656116.jpg"
            uriAuthor="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/122889440_3516700785042695_4194849521649821332_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=2AtZ3p02E3AAX9Zruqp&_nc_ht=scontent.fsgn2-1.fna&oh=b5df099517247396177eee73e419c135&oe=5FE0FA5C"
            nameAuthor="Alexa Tenorio"
            title="How To Eat Healthy"></Articles>

          <Articles
            uriBackground="https://image.freepik.com/free-photo/fitness-girl-is-working-out-park_144627-3664.jpg"
            uriAuthor="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/49384899_2092993967413391_3246626969445466112_o.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=IYp33zv6EMoAX_NSsT9&_nc_ht=scontent.fsgn2-5.fna&oh=65019d5ac6ccb81779edaf365e821484&oe=5FE1C853"
            nameAuthor="Isaac Hunt"
            title="Why Is Workout Important?"></Articles>
          <View style={{flex: 1}}></View>
        </View>
      </View>
    );
  }
}
