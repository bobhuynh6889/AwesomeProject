import React from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HeartButton() {
    const [state, setState] = React.useState({ status: false});
    return (
        <View>
           <Icon name="heart" size={30} 
           color={state.status ? 'red' : 'gray'}
           onPress={() => {
               let newStatus = !state.status;
               setState({ status: newStatus });
           }}
           />
        </View>
    )
}
