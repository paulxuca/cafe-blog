import {BasicControlledInput} from './input';
import {SmallTitle} from './title';

export default ({label, ...props}) => (
	<div>
		<SmallTitle>{label}</SmallTitle>
		<BasicControlledInput {...props}/>
	</div>
);
