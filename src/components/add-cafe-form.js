import {Component} from 'react';
import autoBind from 'auto-bind';
import formSchema from '../constants/add-cafe-form';
import InputField from './input-field';
import CheckBox from './check-box';
import {Full, Half, Fourths} from './div';
import Form from './form';
import GoogleMapsSearch from './google-maps-search';

export default class AddCafeForm extends Component {
	constructor() {
		super();
		autoBind(this);

		this.state = {hasPassword: false};
	}

	handleSubscribeChange(path, value) {
		if (path === 'wifi.has') {
			this.setState({hasPassword: value});
		}
	}

	render() {
		return (
			<Full>
				<Form
					subscribeTo={['wifi.has']}
					schema={formSchema}
					onSubscribeChange={this.handleSubscribeChange}
					{...this.props}
					>
					<Half>
						<GoogleMapsSearch
							model="address"
							placeholder="123 Cafe Street"
							label="Address"
							/>
					</Half>
					<Half>
						<InputField
							model="name"
							placeholder="Special Cafe"
							label="Name"
							/>
					</Half>
					<Half>
						<InputField
							model="phoneNumber"
							placeholder="1231231234"
							label="Phone number"
							/>
					</Half>
					<Half>
						<InputField
							model="website"
							placeholder="https://cafe.com"
							label="Website"
							/>
					</Half>
					<Full>
						<InputField
							model="hours"
							placeholder="Monday - Friday: 7am - 12pm, SA: 8am - 11pm, ..."
							label="Hours"
							/>
					</Full>
					<Fourths size={2}>
						<Fourths size={1}>
							<CheckBox
								label="Wifi?"
								model="wifi.has"
								/>
						</Fourths>
						{this.state.hasPassword && (
							<Fourths size={3}>
								<Half>
									<InputField
										model="wifi.ssid"
										placeholder="Cafe Wifi 123"
										label="SSID"
										/>
								</Half>
								<Half>
									<InputField
										model="wifi.password"
										placeholder="Secret password 123"
										label="Password"
										/>
								</Half>
							</Fourths>
						)}
					</Fourths>
				</Form>
			</Full>
		);
	}
}
