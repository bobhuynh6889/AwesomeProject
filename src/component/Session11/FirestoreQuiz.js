import React from 'react';
import {View, Text, SafeAreaView, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function FriestoreQuiz() {
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
      {questions && (
        <View style={{flex: 1}}>
          <Text style={{fontSize: 16, color: 'red'}}>{number}</Text>
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
                onPress={() => {
                  firestore()
                    .collection('Answers')
                    .add({
                      name: 'Hoang',
                      questionId: questions[index].id,
                      options: o.text,
                      correct: o.correct,
                    })
                    .then(() => {
                      setIndex(index + 1);
                      setNumber(number + 1);
                    });
                }}>
                <Text style={{fontSize: 20, marginLeft: 10}}>{o.text}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </SafeAreaView>
  );
}
