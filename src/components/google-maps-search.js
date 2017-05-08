/* global google */

import {Component} from 'react';
import {findDOMNode} from 'react-dom';
import omit from 'lodash/omit';
import autoBind from 'auto-bind';
import loadGoogleMapsScript from '../lib/load-google-maps-script';
import InputField from './input-field';

export default class GoogleMapsSearch extends Component {
	constructor() {
		super();
		autoBind(this);

		this.googleInput = null;
	}

	componentDidMount() {
		if (process.browser && self.google) {
			loadGoogleMapsScript().then(this.handleOnScriptLoad);
			return;
		}

		this.createCheck();
	}

	createCheck() {
		this.loop = setInterval(this.handleOnScriptLoad, 300);
	}

	handleOnScriptLoad() {
		if (!self.google) {
			return;
		}

		clearInterval(this.loop);

		this.googleInput = new google.maps.places.SearchBox(this.inputRef);
		this.googleInput.addListener('places_changed', this.handleChange);
	}

	handleChange() {
		this.props.onChange(this.googleInput.getPlaces()[0]);
	}

	handleInputRef(ref) {
		this.inputRef = ref ? findDOMNode(ref) : null;
	}

	render() {
		return (
			<InputField innerRef={this.handleInputRef} {...omit(this.props, ['onChange'])}/>
		);
	}
}
