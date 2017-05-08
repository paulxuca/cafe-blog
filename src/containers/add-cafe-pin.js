import {connect} from 'react-redux';
import MapPin from '../components/map-pin';

const mapStateToProps = state => ({
	lat: state.mapPin.lat,
	lng: state.mapPin.lng
});

export default connect(mapStateToProps)(MapPin);
