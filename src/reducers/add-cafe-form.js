import {combineForms} from 'react-redux-form';

const formSchemaAndInitialState = {
	name: '',
	address: '',
	phoneNumber: '',
	website: '',
	hours: '',
	wifi: {
		has: 'false',
		password: ''
	},
	vibe: ''
};

export default () => combineForms({
	cafe: formSchemaAndInitialState
});
