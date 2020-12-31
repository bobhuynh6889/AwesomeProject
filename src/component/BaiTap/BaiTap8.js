import React, {Component} from 'react';
import {ImageBackground, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from './Header';

class Articles extends Component {
  render() {
    return (
      <View style={{flex: 5, padding: 15}}>
        {/* IMAGE COVER */}
        <View style={{flex: 4}}>
          <Image
            style={{
              height: 240,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
            source={{
              uri: this.props.uriCover,
            }}
          />
        </View>
        {/* TITLE */}
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 22,
              fontWeight: '700',
              padding: 16,
            }}>
            {this.props.title}
          </Text>
        </View>
        {/* DESCRIPTION */}
        <View style={{flex: 1, backgroundColor: 'white', paddingLeft: 16}}>
          <Text>{this.props.description}</Text>
        </View>
        {/* AUTHOR - COMMENT - LIKE */}
        <View
          style={{
            height: 80,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderStyle: 'solid',
            borderTopWidth: 1,
            borderColor: '#d1d1d1',
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

export default class BaiTap8 extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* HEADER */}
        <Header title="Article List 1"></Header>
        {/* ARTICLES */}
        <View style={{flex: 10, backgroundColor: '#ededed'}}>
          <View style={{flex: 5}}>
            <Articles
              uriCover="https://3i77hz2byv5n1pii73412ndb-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/iStock-665656116.jpg"
              title="How To Eat Healthy"
              description="The easiest way to make sure your inter meal nibbling stays on track is to have"
              uriAuthor="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/122889440_3516700785042695_4194849521649821332_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=2AtZ3p02E3AAX9Zruqp&_nc_ht=scontent.fsgn2-1.fna&oh=b5df099517247396177eee73e419c135&oe=5FE0FA5C"
              nameAuthor="Alexa Tenorio"></Articles>
          </View>
          <View style={{flex: 5, marginTop: -10}}>
            <Articles
              uriCover="https://image.freepik.com/free-photo/fitness-girl-is-working-out-park_144627-3664.jpg"
              title="Why Is The Workout Important"
              description="The easiest way to make sure your inter meal nibbling stays on track is to have"
              uriAuthor="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/49384899_2092993967413391_3246626969445466112_o.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=IYp33zv6EMoAX_NSsT9&_nc_ht=scontent.fsgn2-5.fna&oh=65019d5ac6ccb81779edaf365e821484&oe=5FE1C853"
              nameAuthor="Isaac Hunt"></Articles>
          </View>
        </View>
      </View>
    );
  }
}
