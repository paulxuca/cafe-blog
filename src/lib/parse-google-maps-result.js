export default data => {
	return {
		name: data.name,
		address: data.formatted_address,
		phoneNumber: data.international_phone_number,
		website: data.website
	};
};
