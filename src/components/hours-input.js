import {Component} from 'react';
import {weekDays} from '../constants/dates';
import {Full, Fourths, Styled} from './div';
import {SmallTitle} from './title';

// WIP

export default class HoursInput extends Component {
	render() {
		return (
			<Full>
				<SmallTitle>Hours</SmallTitle>
				{weekDays.map(day => (
					<Styled component={Full} key={day.toLowerCase()} style={{marginLeft: 0}}>
						<Styled component={Fourths} size={2} style={{marginLeft: 0}}>{day}</Styled>
						<Fourths size={1}/>
						<Fourths size={1}/>
					</Styled>
				))}
			</Full>
		);
	}
}
