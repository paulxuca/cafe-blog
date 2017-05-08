import {Component} from 'react';
import autoBind from 'auto-bind';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

const omitted = ['model', 'changeValue'];

export default class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {value: props.defaultValue || ''};

		autoBind(this);
	}

	componentWillMount() {
		this.applyChanges();
	}

	componentWillUpdate() {
		this.applyChanges();
	}

	applyChanges() {
		const nextValue = this.context.getValue(this.props.model);

		if (nextValue !== this.state.value) {
			this.setState({value: nextValue});
		}
	}

	handleChange(e) {
		const {model, changeValue} = this.props;
		const {target} = e;
		const value = target[changeValue];

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

Input.defaultProps = {
	changeValue: 'value'
};

Input.contextTypes = {
	onChange: PropTypes.any,
	getValue: PropTypes.any
};



