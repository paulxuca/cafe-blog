/* global google */

import {Component} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import autoBind from 'auto-bind';
import {MAP_CLOSE, MAP_FAR} from '../constants/map';
import loadGoogleMapsScript from '../lib/load-google-maps-script';

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

		if (lat !== this.props.lat || lng !== this.props.lng) {
			this.map.panTo({lat, lng});
			this.map.setZoom(MAP_CLOSE);
		}
	}

	handleOnScriptLoaded() {
		this.map = new google.maps.Map(this.mapRef, {zoom: MAP_FAR, center: {lat: -25.363, lng: 131.044}});
	}

	onMapsRef(map) {
		this.mapRef = map ? findDOMNode(map) : null;
	}

	render() {
		const {className} = this.props;

		return <Container innerRef={this.onMapsRef} className={className} id="google-maps-element"/>;
	}
}

Map.defaultProps = {
	className: ''
};

Map.propTypes = {
	className: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
