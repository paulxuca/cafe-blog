import {Control} from 'react-redux-form';
import {Full} from './div';
import {SmallTitle} from './title';

export default ({label, ...props}) => (
	<Full>
		<SmallTitle>{label}</SmallTitle>
		<Control type="checkbox" {...props}/>
	</Full>
);
