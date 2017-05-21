
/* Imports */
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { MKTextField } from 'react-native-material-kit';

import Geolocation from './components/Geolocation';

/**
 * Lance l'application
 */
export default class App extends Component {

	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<View>
				<View 
					style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#90CAF9'}}>
					<Image
						style={{width: 50, height: 50}} source={require('./images/logo.png')} />
					<Text
						style={{fontSize: 24}}>Où fait-il le plus beau ?</Text>
				</View>

				<View
					style={{padding:20}}>
					<MKTextField
					  tintColor="#0D47A1"
					  placeholder="Entrer ma ville"
					/>
					<Text
						style={{marginBottom: 10, alignSelf: 'center'}}>
						ou
					</Text>

					<Geolocation/>

				</View>
			</View>
		);
	}
}