import glamorous from 'glamorous';
import Input from './input';
import {SmallTitle} from './title';

const BasicInput = glamorous(Input)({
	padding: '5px 10px',
	fontFamily: 'Inconsolata, monospace',
	fontSize: 15,
	outline: 0,
	border: 0,
	borderBottom: '1px solid #b9b9b9',
	width: 'calc(100% - 20px)',
	transition: 'all 0.3s ease',
	':active': {borderColor: '#000'},
	':focus': {borderColor: '#000'}
});

export default ({label, ...props}) => (
	<div>
		<SmallTitle>{label}</SmallTitle>
		<BasicInput {...props}/>
	</div>
);
