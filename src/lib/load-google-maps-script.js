export default () => new Promise(resolve => {
	if (document.getElementById('google-maps-script')) {
		resolve();
		return;
	}

	const googleMapsScript = document.createElement('script');
	googleMapsScript.async = true;
	googleMapsScript.defer = true;
	googleMapsScript.id = 'google-maps-script';
	googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBMD6O5-SNzak7RfiPfFK6nlA6iYNxAI-M&libraries=places';
	googleMapsScript.onload = () => resolve();

	document.body.insertBefore(googleMapsScript, document.body.lastChild);
});
