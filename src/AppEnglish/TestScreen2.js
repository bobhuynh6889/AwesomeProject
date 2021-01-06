import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import {FlatList} from 'react-native-gesture-handler';

export default function TestScreen2() {
  const [checked, setChecked] = React.useState();
  const [number, setNumber] = React.useState(1);
  const [index, setIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [questions, setQuestions] = React.useState(null);

  const getQuestion = () => {
    const data = [];
    firestore()
      .collection('Questions')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          const item = documentSnapshot.data();
          item.id = documentSnapshot.id;
          data.push(item);
        });
        setLoading(false);
        setQuestions(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setQuestions([]);
      });
  };
  React.useEffect(getQuestion, []);

  // const renderItem = ({item, index}) => {
  //   return (
  //     <View>
  //       <TouchableOpacity>
  //         <Text>{item.options.text}</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 10}}>
      {questions && (
        <View style={{flex: 1}}>
          <Text style={{fontSize: 20, color: 'red'}}>{number}</Text>
          <Text style={{fontWeight: '700', fontSize: 16}}>
            {questions[index].content}
          </Text>
          <View style={{height: 25}} />

          <TouchableOpacity
            style={{height: 40, flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              firestore()
                .collection('Answers')
                .add({
                  name: 'Thuan',
                  questionId: questions[index].id,
                  options: 'an',
                  correct: 'correct',
                })
                .then(() => {
                  setChecked('first');
                });
            }}>
            <RadioButton
              color="black"
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
            />
            <Text>A. an</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{height: 40, flexDirection: 'row', alignItems: 'center'}}
            onPress={() => setChecked('second')}>
            <RadioButton
              color="black"
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
            />
            <Text>B. a</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{height: 40, flexDirection: 'row', alignItems: 'center'}}
            onPress={() => setChecked('third')}>
            <RadioButton
              color="black"
              value="third"
              status={checked === 'third' ? 'checked' : 'unchecked'}
            />
            <Text>C. the</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{height: 40, flexDirection: 'row', alignItems: 'center'}}
            onPress={() => setChecked('fourth')}>
            <RadioButton
              color="black"
              value="fourth"
              status={checked === 'fourth' ? 'checked' : 'unchecked'}
            />
            <Text>D. in</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={{flex: 1}}>
            <Text>{questions[index].options.text}</Text>
          </TouchableOpacity>

          <View style={{flex: 1}}>
            <FlatList
              data={questions[index]}
              keyExtractor={(item, index) => 'questions-' + item.id}
              renderItem={renderItem}
            />
          </View> */}

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {number > 1 && (
              <Button
                title="Previous"
                onPress={() => {
                  setIndex(index - 1);
                  setNumber(number - 1);
                }}
              />
            )}
            {number < 2 && (
              <Button
                title="Next"
                onPress={() => {
                  setIndex(index + 1);
                  setNumber(number + 1);
                }}
              />
            )}
          </View>
        </View>
      )}
      {/* <RadioButton
        color="red"
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
      />
      <RadioButton
        color="red"
        value="second"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      /> */}
    </SafeAreaView>
  );
}
