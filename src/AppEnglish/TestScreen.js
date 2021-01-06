import React from 'react';
import {View, Text, SafeAreaView, Alert, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';

export default function index() {
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

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 10}}>
      <CountDown
        until={24}
        size={30}
        onFinish={() => Alert.alert('Hoàn thành', 'Xem kết quả')}
        digitStyle={{backgroundColor: '#ecf0f1'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeToShow={['D', 'H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
      />
      {questions && (
        <View style={{flex: 1}}>
          <Text style={{fontSize: 20, color: 'red'}}>{number}</Text>
          <Text style={{fontWeight: '700', fontSize: 16}}>
            {questions[index].content}
          </Text>
          <View style={{height: 25}} />

          {questions[index].options.map((o) => {
            return (
              <TouchableOpacity
                style={{
                  marginBottom: 8,
                }}
                key={o.questionId}
                onPress={() => {
                  firestore()
                    .collection('Answers')
                    .add({
                      name: 'Thuan',
                      questionId: questions[index].id,
                      options: o.text,
                      correct: o.correct,
                    })
                    .then(() => {
                      // setIndex(index + 1);
                      // setNumber(number + 1);
                    });
                }}>
                <Text style={{fontSize: 20, marginLeft: 10}}>{o.text}</Text>
              </TouchableOpacity>
            );
          })}
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
    </SafeAreaView>
  );
}
