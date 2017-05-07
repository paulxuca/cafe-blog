import {connect} from 'react-redux';
import {setValue} from '../actions/form';
import AddCafeForm from '../components/add-cafe-form';

const mapStateToProps = state => ({
	value: state.form
});

const mapDispatchToProps = {onChange: setValue};

export default connect(mapStateToProps, mapDispatchToProps)(AddCafeForm);
