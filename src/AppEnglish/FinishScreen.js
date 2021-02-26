import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function FinishScreen() {
  const [questions, setQuestions] = React.useState(null);
  const [index, setIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [answers, setAnswers] = React.useState(null);
  const [id, setId] = React.useState(0);
  // const [diem, setDiem] = React.useState(0);
  const [i, setI] = React.useState(0);

 

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
 

  const getAnswer = () => {
    const data = [];
    firestore()
      .collection('Answers')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          const item = documentSnapshot.data();
          item.id = documentSnapshot.id;
          data.push(item);
        });
        setLoading(false);
        setAnswers(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setAnswers([]);
      });
  };

  React.useEffect(() => {
    getQuestion();
    getAnswer();
  }, []);



  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 10}}>
      <Button
        title="Xem ket qua"
        onPress={() => {
          setId(answers[i].checked);
         console.log(id);
        }}
      />
      {answers && (
        <View style={{flex: 1}}>
          <Text>{answers[i].questionId}</Text>
          <Text>{answers[i].checked}</Text>
        </View>
      )}
      {questions && (
        <View style={{flex: 1}}>
          <Text>{questions[2].id}</Text>
          <Text>{questions[2].stt}</Text>
        </View>
      )}

      <View style={{flex: 1}}></View>
    </SafeAreaView>
  );
}
