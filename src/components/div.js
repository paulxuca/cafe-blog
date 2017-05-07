import glamorous from 'glamorous';

const Base = glamorous.div({
	display: 'inline-block',
	margin: '10px 5px'
});
const Full = glamorous(Base)({width: 'calc(100% - 10px)'});
const Half = glamorous(Base)({
	width: 'calc(50% - 10px)',
	'@media screen and (max-width: 40em)': {width: '100%'}
});

const Fourths = glamorous(Base)({}, props => ({
	width: `calc(${props.size * 25}% - 10px)`,
	'@media screen and (max-width: 40em)': {width: '100%'}
}));

export {
	Full,
	Half,
	Fourths
};
