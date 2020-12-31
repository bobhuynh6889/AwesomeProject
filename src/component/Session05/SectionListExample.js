import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, SectionList} from 'react-native';

const data = [
  {
    title: 'B',
    data: ['Binh', 'Bao', 'Bach'],
  },
  {
    title: 'N',
    data: ['Nguyen', 'Nam', 'Na', 'Ninh'],
  },
  {
    title: 'T',
    data: ['Thuan', 'Thinh', 'Thien', 'Thoa'],
  },
];
// const data = [
//   {
//     title: 'D',
//     data: ['Devin', 'David'],
//   },
//   {
//     title: 'J',
//     data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'],
//   },
// ];

export default class SectionListExample extends Component {
  renderItem = ({item}) => {
    return (
      <View>
        <Text style={styles.item}>{item}</Text>
      </View>
    );
  };

  renderSectionHeader = ({section}) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={data}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={(item, index) => 'person-' + index}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
  item: {
    padding: 10,
    fontSize: 30,
    height: 44,
  },
});
