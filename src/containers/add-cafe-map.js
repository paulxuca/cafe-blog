import {connect} from 'react-redux';
import Map from '../components/map';

const mapStateToProps = state => ({
	lat: state.location.latitude,
	lng: state.location.longitude
});

export default connect(mapStateToProps)(Map);
