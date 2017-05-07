import {Component} from 'react';
import InputField from './input-field';
import CheckBox from './check-box';
import {Full, Half, Fourths} from './div';

export default class AddCafeForm extends Component {
	render() {
		return (
			<Full>
				<form>
					<Half>
						<InputField
							model="form.name"
							placeholder="Special Cafe"
							label="Name"
							/>
					</Half>
					<Half>
						<InputField
							model="form.address"
							placeholder="123 Cafe Street"
							label="Address"
							/>
					</Half>
					<Half>
						<InputField
							model="form.phoneNumber"
							placeholder="1231231234"
							label="Phone number"
							/>
					</Half>
					<Half>
						<InputField
							model="form.website"
							placeholder="https://cafe.com"
							label="Website"
							/>
					</Half>
					<Full>
						<InputField
							model="form.hours"
							placeholder="Monday - Friday: 7am - 12pm, SA: 8am - 11pm, ..."
							label="Hours"
							/>
					</Full>
					<Full>
						<Fourths size={1}>
							<CheckBox
								label="Wifi?"
								model="form.wifi.has"
								/>
						</Fourths>
						<Fourths size={3}>
							<InputField
								model="form.wifi.password"
								placeholder="Monday - Friday: 7am - 12pm, SA: 8am - 11pm, ..."
								label="Hours"
								/>
						</Fourths>
					</Full>
				</form>
			</Full>
		);
	}
}
