import glamorous from 'glamorous';

const Container = glamorous.div({
	position: 'relative'
});

const AddCafePageContainer = glamorous(Container)({
	height: 300,
	margin: '20px 0'
});

export {
	AddCafePageContainer,
	Container
};


