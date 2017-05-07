import glamorous from 'glamorous';

const CleanTitle = glamorous.h3({
	fontFamily: 'Proxima Nova',
	fontSize: 30,
	margin: '20px 0'
});

const SmallTitle = glamorous(CleanTitle)({
	fontSize: 20
});

export {
	CleanTitle,
	SmallTitle
};
