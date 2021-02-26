import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import CountDown from 'react-native-countdown-component';

export default function TestScreen2({navigation}) {
  const [checked, setChecked] = React.useState();
  const [number, setNumber] = React.useState(1);
  const [index, setIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [questions, setQuestions] = React.useState(null);
  const [time, setTime] = React.useState(10);
  const [id, setId] = React.useState(0);

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
      <View style={{height: 100}}>
        <CountDown
          until={time}
          size={30}
          onFinish={() => Alert.alert('Hoàn thành', 'Xem kết quả')}
          digitStyle={{backgroundColor: '#ecf0f1'}}
          digitTxtStyle={{color: 'green'}}
          timeToShow={['M', 'S']}
          timeLabels={{m: null, s: null}}
        />
      </View>
      {questions && (
        <View style={{flex: 1}}>
          <View style={{height: 50, flexDirection: 'row'}}>
            <Text style={{fontSize: 16, color: 'red'}}>{number}. </Text>
            <Text style={{fontWeight: '700', fontSize: 16}}>
              {questions[index].content}
            </Text>
          </View>

          <View style={{height: 180}}>
            <TouchableOpacity
              style={{height: 40, flexDirection: 'row', alignItems: 'center'}}
              onPress={() => setChecked('0')}>
              <RadioButton
                color="black"
                value="0"
                status={checked === '0' ? 'checked' : 'unchecked'}
              />
              <Text>{questions[index].options[id].text}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{height: 40, flexDirection: 'row', alignItems: 'center'}}
              onPress={() => setChecked('1')}>
              <RadioButton
                color="black"
                value="1"
                status={checked === '1' ? 'checked' : 'unchecked'}
              />
              <Text>{questions[index].options[id + 1].text}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{height: 40, flexDirection: 'row', alignItems: 'center'}}
              onPress={() => setChecked('2')}>
              <RadioButton
                color="black"
                value="2"
                status={checked === '2' ? 'checked' : 'unchecked'}
              />
              <Text>{questions[index].options[id + 2].text}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{height: 40, flexDirection: 'row', alignItems: 'center'}}
              onPress={() => setChecked('3')}>
              <RadioButton
                color="black"
                value="3"
                status={checked === '3' ? 'checked' : 'unchecked'}
              />
              <Text>{questions[index].options[id + 3].text}</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 50,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {number > 1 && (
              <Button
                title="Previous"
                onPress={() => {
                  setIndex(index - 1);
                  setNumber(number - 1);
                }}
              />
            )}

            {number < 3 && (
              <Button
                title="Next"
                onPress={() => {
                  firestore()
                    .collection('Answers')
                    .add({
                      name: 'Thuan',
                      questionId: questions[index].id,
                      checked: checked,
                    })
                    .then(() => {
                      setIndex(index + 1);
                      setNumber(number + 1);
                      setChecked();
                    });
                }}
              />
            )}
            {number == 3 && (
              <Button
                title="Finish"
                onPress={() => {
                  setTime(0);
                  firestore()
                    .collection('Answers')
                    .add({
                      name: 'Thuan',
                      questionId: questions[index].id,
                      checked: checked,
                    })
                    .then(() => {
                      setChecked();
                      navigation.navigate('FinishScreen');
                      console.log('Finish');
                    });
                }}
              />
            )}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
