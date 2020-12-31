import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, SafeAreaView} from 'react-native';
import PlusButton from './Avatar3D/components/PlusButton';
import AvatarPlus from './Avatar3D/components/AvatarPlus';
import AvatarName from './Avatar3D/components/AvatarName';

export default function Component2() {
  return (
    <SafeAreaView style={{height: 420, backgroundColor: '#49426D'}}>
      <View style={styles.searchContainer}>
        <View style={styles.searchContainerTop}>
          <View style={styles.searchButton}>
            <PlusButton
              iconName="search1"
              height={80}
              width={80}
              borderRadius={20}
              borderColor="#f6c284"
              backgroundColor="#f6c284"
              color="#382b56"
              size={30}
            />
          </View>
          <View style={styles.nearbyTextContainer}>
            <View style={styles.nearbyText}>
              <Text style={{fontSize: 18, color: '#f6c284'}}>
                Nearby Friends
              </Text>
              <Text style={{color: '#ffffff'}}>See all</Text>
            </View>
          </View>
        </View>

        <View style={styles.searchButtonBottom}>
          <View style={styles.avatarPlus}>
            <AvatarPlus />
          </View>
          <View style={styles.recentlyText}>
            <Text style={{fontSize: 18, color: '#f6c284'}}>Recently Split</Text>
          </View>
          <View style={styles.avatarName}>
            <AvatarName />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 5,
    marginHorizontal: 30,
    marginTop: 45,
  },
  searchContainerTop: {
    flex: 1,
    flexDirection: 'row',
  },
  searchButton: {
    height: 90,
    width: 90,
    shadowColor: '#000000',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1,
  },
  nearbyTextContainer: {
    flex: 1,
    backgroundColor: '#392e5b',
    marginBottom: -15,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 30,
    marginLeft: -10,
  },
  nearbyText: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchButtonBottom: {
    flex: 3,
    backgroundColor: '#392e5b',
    marginTop: 8,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
  avatarPlus: {
    flex: 2,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: -40,
    marginRight: 6,
    shadowColor: '#000000',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1,
  },
  recentlyText: {
    flex: 1,
    marginTop: 55,
    marginLeft: 20,
  },
  avatarName: {
    flex: 2,
    marginHorizontal: 20,
    marginTop: -10,
  },
});
