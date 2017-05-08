import {connect} from 'react-redux';
import {setValue} from '../actions/form';
import {receiveResultGoogleMapsForm} from '../actions/add-cafe';
import AddCafeForm from '../components/add-cafe-form';

const mapStateToProps = state => ({
	value: state.form
});

const mapDispatchToProps = {
	onChange: setValue,
	onGoogleResult: receiveResultGoogleMapsForm
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCafeForm);
