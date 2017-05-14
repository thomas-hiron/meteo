
/* Imports */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MKSpinner } from 'react-native-material-kit';

/**
 * Lance l'application
 */
export default class App extends Component {

	getLocation()
	{
		alert('Location en cours');
	}

	render()
	{
		return (
			<View
				style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'center'}}>
				<MKSpinner 
					style={{alignSelf: 'center'}}
					strokeColor="#0D47A1"/>
				<Text style={{marginLeft: 10}}>Localisation en cours</Text>
			</View>
		);
	}
}