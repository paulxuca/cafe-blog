/* global google */

import {Component} from 'react';

export default class MapPin extends Component {
	componentDidMount() {
		const {lat, lng, map} = this.props;

		this.pin = new google.maps.Marker({
			position: {lat, lng},
			map
		});
	}

	componentWillReceiveProps(newProps) {
		const {lat, lng} = newProps;

		if (lat !== this.props.lat || lng !== this.props.lng) {
			this.pin.setPosition({lat, lng});
		}
	}

	render() {
		return <div/>;
	}
}
