
/* Imports */
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { MKSpinner } from 'react-native-material-kit';

/**
 * Lance l'application
 */
export default class Geolocation extends Component {

	constructor(props)
	{
		super(props);

		/* Etats par défaut */
		this.state = {
			localizing: false,
			latitude: 0,
			longitude: 0,
			error: false
		};
	}

	/**
	 * Récupère la localisation
	 */
	getLocation()
	{
		/* Localisation en cours, suppression de l'erreur */
		this.setState({
			localizing: true,
			error: false
		});

		navigator.geolocation.getCurrentPosition(
	      (position) => {

	      	/* Réussi, localisation terminée et ajout des coords */
	        this.setState({
	        	latitude: position.coords.latitude, 
	        	longitude: position.coords.longitude,
				localizing: false
	        });
	      },
	      (error) => {

	      	/* Erreur, localisation terminée et erreur */
	      	this.setState({
	      		error: true,
	      		localizing: false
	      	})
	      },
	      /* Options */
	      {enableHighAccuracy: true, timeout: 1000, maximumAge: 1000}
	    );
	}

	render()
	{
		let spinner = null;
		let error = null;
		let coords = null;

		/* Affichage du spinner */
		if(this.state.localizing === true)
		{
			spinner = <View
						style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'center'}}>
						<MKSpinner 
							style={{alignSelf: 'center'}}
							strokeColor="#0D47A1"/>
						<Text style={{marginLeft: 10}}>Localisation en cours</Text>
					</View>;
		}

		/* Affichage de l'erreur */
		if(this.state.error === true)
		{
			error = <Text
						style={{marginTop: 20}}>
						Une erreur s'est produite, veuillez réésayer
					</Text>;
		}

		/* Affichage des coords */
		if(this.state.latitude !== 0)
		{
			coords = <View
						style={{marginTop: 20}}>
						<Text>Latitude : {this.state.latitude}</Text>
						<Text>Longitude : {this.state.longitude}</Text>
					</View>;
		}

		return (
			<View>
				<Button
					title="Localiser ma position"
					color="#0D47A1"
					onPress={() => this.getLocation()}>
				</Button>
				{spinner}
				{error}
				{coords}
			</View>
		);
	}
}