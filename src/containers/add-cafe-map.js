import {connect} from 'react-redux';
import Map from '../components/map';
import {moveMapMarker} from '../actions/marker';

const mapStateToProps = state => ({
	lat: state.location.lat,
	lng: state.location.lng
});

const mapDispatchToProps = {
	onClick: moveMapMarker
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
