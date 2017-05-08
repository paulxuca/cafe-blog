/* global google */

import {Component} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import autoBind from 'auto-bind';
import {MAP_CLOSE, MAP_FAR} from '../constants/map';
import loadGoogleMapsScript from '../lib/load-google-maps-script';
import MapPin from '../containers/add-cafe-pin';

const Container = glamorous.div({
	width: '100%',
	height: '100%'
});

export default class Map extends Component {
	constructor() {
		super();
		autoBind(this);

		this.map = null;
	}

	componentDidMount() {
		if (process.browser) {
			loadGoogleMapsScript().then(this.handleOnScriptLoaded);
		}
	}

	componentWillReceiveProps(newProps) {
		const {lat, lng} = newProps;

		if (lat && lng) {
			this.panMap({lat, lng});
		}
	}

	panMap({lat, lng}) {
		if (this.map) {
			this.map.panTo({lat, lng});
			this.map.setZoom(MAP_CLOSE);
		}
	}

	handleOnScriptLoaded() {
		this.map = new google.maps.Map(this.mapRef, {zoom: MAP_FAR, center: {lat: -25.363, lng: 131.044}});

		if (this.props.onClick) {
			this.map.addListener('click', this.handleClick);
		}
	}

	handleClick(e) {
		const {latLng: {lat, lng}} = e;
		this.props.onClick({
			lat: lat(),
			lng: lng()
		});
	}

	onMapsRef(map) {
		this.mapRef = map ? findDOMNode(map) : null;
	}

	render() {
		const {className, lat, lng} = this.props;
		const hasPosition = lat && lng;

		return (
			<Container innerRef={this.onMapsRef} className={className} id="google-maps-element">
				{hasPosition && <MapPin map={this.map}/>}
			</Container>
		);
	}
}

Map.defaultProps = {
	className: ''
};

Map.propTypes = {
	className: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
