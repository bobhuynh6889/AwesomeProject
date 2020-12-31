import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

export default class GalleryHome extends Component {
  static navigationOptions = {
    title: 'Picsum Photos',
    headerBackTitle: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: false,
      mode: 'grid',
      selectedImage: null,
      loadedHighQualityImage: false,
      groupPhotos: [],
    };
  }

  getPhotosAsync = () => {
    this.setState({loading: true});
    fetch('https://picsum.photos/v2/list')
      .then((response) => response.json())
      .then((json) => {
        this.setState({photos: json});

        this.setState({loading: false});
      })
      .catch((error) => {
        this.setState({loading: false});
      });
  };
  componentDidMount() {
    this.getPhotosAsync();
  }

  renderItem = ({item, index}) => {
    return (
      <SafeAreaView style={{flex: 1, margin: 2}}>
        <View
          style={{
            width: '100%',
            height: this.state.mode === 'list' ? height / 3 : height / 6,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                mode: 'view',
                groupPhotos: this.state.photos.slice(item.id, 5),
                selectedImage: item,
                loadedHighQualityImage: false,
              });
              console.log(this.state.groupPhotos);
            }}>
            <Image
              resizeMode="cover"
              source={{
                uri: 'https://picsum.photos/400/400/?image=' + item.id,
              }}
              style={{height: '100%', width: '100%'}}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  componentWillUnmount() {
    this.setState({albums: []});
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* SELECT MODE */}
        <View
          style={{
            height: 45,
            backgroundColor: '#B9BBC0',
            marginBottom: 5,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({mode: 'grid'});
              }}>
              <Icon
                name="grid"
                size={27}
                style={{
                  color: this.state.mode === 'grid' ? '#2980b9' : '#f2f2f2',
                }}
              />
            </TouchableOpacity>
            <View style={{width: 10}}></View>
            <TouchableOpacity
              onPress={() => {
                this.setState({mode: 'list'});
              }}>
              <Icon
                name="list"
                size={27}
                style={{
                  color: this.state.mode === 'list' ? '#2980b9' : '#f2f2f2',
                }}
              />
            </TouchableOpacity>
            <View style={{width: 10}}></View>
            <TouchableOpacity
              onPress={() => {
                this.setState({mode: 'slide'});
              }}>
              <Icon
                name="image-sharp"
                size={27}
                style={{
                  color: this.state.mode === 'slide' ? '#2980b9' : '#f2f2f2',
                }}
              />
            </TouchableOpacity>
            <View style={{width: 10}}></View>
          </View>
        </View>

        {/* SLIDE MODE */}
        {!this.state.loading && this.state.mode === 'slide' && (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <FlatList
              style={{marginLeft: 2, marginRight: 2}}
              data={this.state.photos}
              renderItem={({item}) => (
                <Image
                  resizeMode="contain"
                  source={{
                    uri: 'https://picsum.photos/1600/1200/?image=' + item.id,
                  }}
                  style={{height: '100%', width: width - 4}}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              pagingEnabled={true}
              horizontal={true}
            />
          </View>
        )}
        {/* LIST | GRID MODE */}
        {!this.state.loading && this.state.mode !== 'slide' && (
          <View>
            <FlatList
              style={{marginLeft: 2, marginRight: 2}}
              data={this.state.photos}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={this.state.mode === 'list' ? 1 : 3}
              key={this.state.mode === 'list' ? 1 : 0}
            />
          </View>
        )}

        {/* VIEW MODE */}
        {this.state.mode === 'view' && (
          <View
            style={{
              zIndex: 999,
              position: 'absolute',
              height: '100%',
              width: width,
              backgroundColor: '#000000',
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({mode: 'grid'});
                }}>
                <Image
                  onLoad={() => {
                    this.setState({loadedHighQualityImage: 'true'});
                  }}
                  resizeMode="contain"
                  source={{
                    uri:
                      'https://picsum.photos/1600/1200/?image=' +
                      this.state.selectedImage.id,
                  }}
                  style={{height: '100%', width: '100%'}}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        {this.state.mode === 'view' &&
          this.state.loadedHighQualityImage === false && (
            <View
              style={{
                zIndex: 999,
                position: 'absolute',
                height: '100%',
                width: width,
                backgroundColor: '#000000',
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ActivityIndicator size="large" color="#ffffff" />
              </View>
            </View>
          )}
        {/* WAITING MODE */}
        {this.state.loading && (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" color="#2d3436" />
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
