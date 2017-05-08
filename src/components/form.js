import {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'auto-bind';
import set from 'lodash/set';
import get from 'lodash/get';

export default class Form extends Component {
	constructor(props) {
		super(props);
		autoBind(this);
	}

	getChildContext() {
		return {
			onChange: this.handleChange,
			getValue: this.getValue
		};
	}

	handleChange(path, value) {
		const nextState = set(this.props.value, path, value);
		this.props.onChange(nextState);

		if (this.props.subscribeTo.indexOf(path) >= 0) {
			this.props.onSubscribeChange(path, value);
		}
	}

	getValue(path) {
		return get(this.props.value, path);
	}

	render() {
		return (
			<form>
				{this.props.children}
			</form>
		);
	}
}

Form.childContextTypes = {
	onChange: PropTypes.func,
	getValue: PropTypes.func
};

Form.defaultProps = {
	subscribeTo: [],
	onSubscribeChange() {}
};

Form.propTypes = {
	subscribeTo: PropTypes.array,
	onSubscribeChange: PropTypes.func
};

