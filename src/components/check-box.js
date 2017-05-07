import {Full} from './div';
import {SmallTitle} from './title';
import Input from './input';

export default ({label, ...props}) => (
	<Full>
		<SmallTitle>{label}</SmallTitle>
		<Input type="checkbox" {...props}/>
	</Full>
);
