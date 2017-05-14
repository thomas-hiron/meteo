
/* Imports */
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

/**
 * Lance l'application
 */
export default class App extends Component {

	render()
	{
		return (
			<View>
				<View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#BBDEFB'}}>
					<Image style={{width: 50, height: 50}} source={require('./images/logo.png')} />
					<Text style={{fontSize: 24, paddingLeft: 15}}>Où fait-il le plus beau ?</Text>
				</View>
			</View>
		);
	}
}