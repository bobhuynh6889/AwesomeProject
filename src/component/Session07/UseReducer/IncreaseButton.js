import React from 'react'
import { View, Text, Button } from 'react-native';
import AppContext from './AppContext';

export default function IncreaseButton({text}) {
    const { dispatch } = React.useContext(AppContext);
    return (
        <View>
            <Button title={text} onPress={() => dispatch({ type: 'increment' })} />
        </View>
    )
}
