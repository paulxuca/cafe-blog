import {Component} from 'react';
import autoBind from 'auto-bind';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

const omitted = ['model'];

export default class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {value: props.defaultValue || ''};

		autoBind(this);
	}

	handleChange(e) {
		const {target: {value}} = e;
		const {model} = this.props;
		this.setState({value});

		this.context.onChange(model, value);
	}

	render() {
		const props = {
			onChange: this.handleChange,
			value: this.state.value,
			...omit(this.props, omitted)
		};

		return <input {...props}/>;
	}
}

Input.contextTypes = {
	onChange: PropTypes.any,
	getValue: PropTypes.any
};



