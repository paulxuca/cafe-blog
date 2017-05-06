import {Component} from 'react';

export default class GetUserLocation extends Component {
	componentDidMount() {
		if (process.browser) {
			this.props.requestUserLocation();
		}
	}

	render() {
		return this.props.children;
	}
}

