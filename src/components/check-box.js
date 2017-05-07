import glamorous from 'glamorous';
import {Full} from './div';
import {SmallTitle} from './title';
import Input from './input';

const CheckBox = glamorous(Input)({
	margin: '10px 0'
});

export default ({label, ...props}) => (
	<Full>
		<SmallTitle>{label}</SmallTitle>
		<CheckBox type="checkbox" changeValue="checked" {...props}/>
	</Full>
);
