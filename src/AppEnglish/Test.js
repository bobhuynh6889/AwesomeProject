import React, { Component } from 'react';
import { SafeAreaView, Text, View, TextInput } from 'react-native';




export default class Test extends Component {
    render() {
        var payments = [1, 2, 3];

	for(let i = 0; i < 5; i++){
        console.log(i);
		payments.push(
			<View key = {i}>
				<View>
					<TextInput />
				</View>
				<View>
					<TextInput />
				</View>
				<View>
					<TextInput />
				</View>
			</View>
		)
	}
	
	return (
		<SafeAreaView style={{flex: 1}}>
			<View>
				<View><Text>No</Text></View>
				<View><Text>Name</Text></View>
				<View><Text>Preference</Text></View>
			</View>

           

			<Text>{ payments }</Text>
		</SafeAreaView>
	)
        
    }
}
