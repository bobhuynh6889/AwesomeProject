import React from 'react'
import { View, Text } from 'react-native';
import AppContext from './AppContext'

export default function Label() {
    const {state} = React.useContext(AppContext);
    return (
        <View>
            <Text style={{color: '#8e44ad'}}>COUNT: {state.c}</Text>
        </View>
    )
}
