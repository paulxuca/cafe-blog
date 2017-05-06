import {connect} from 'react-redux';
import GetUserLocation from '../components/get-user-location';
import {requestUserLocation} from '../actions/location';

const mapDispatchToProps = {
	requestUserLocation
};

export default connect(null, mapDispatchToProps)(GetUserLocation);
