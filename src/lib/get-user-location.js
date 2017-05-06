export default () => new Promise(resolve => {
	const success = position => {
		const {coords: {latitude, longitude}} = position;

		resolve({
			latitude,
			longitude
		});
	};

	const failed = () => resolve(false);

	return navigator.geolocation.getCurrentPosition(success, failed);
});
