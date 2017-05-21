
/**
 * Gère la localisation
 */
export default class GeolocationService {

	/**
	 * Récupère la localisation
	 *
	 * @param {function} successCB Callback success
	 * @param {function} errorCB Callback error
	 */
	getLocation(successCB, errorCB)
	{
		navigator.geolocation.getCurrentPosition(
			position => successCB(position),
			error => errorCB(error),
			/* Options */
			{
				enableHighAccuracy: true,
				timeout: 10000,
				maximumAge: 1000
			}
	    );
	}
}