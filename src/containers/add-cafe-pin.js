import {connect} from 'react-redux';
import MapPin from '../components/map-pin';

const mapStateToProps = state => ({
	lat: state.location.lat,
	lng: state.location.lng
});

export default connect(mapStateToProps)(MapPin);
