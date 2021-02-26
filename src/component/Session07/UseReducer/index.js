import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import AppContext from './AppContext';
import { initialState, reducer } from './reducer';
import Label from './Label';
import IncreaseButton from './IncreaseButton';
import DecreaseButton from './DecreaseButton';

export default function index() {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
        <SafeAreaView style={{flex: 1}}>
        <Label />
        <DecreaseButton text="Decrease" />
        <IncreaseButton text="Increase" />
        </SafeAreaView>
        </AppContext.Provider>
    )
}
