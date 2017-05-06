import glamorous from 'glamorous';

const Container = glamorous.header({
	padding: 20,
	display: 'flex',
	justifyContent: 'space-between'
});

const Mark = glamorous.span({
	fontFamily: 'Inconsolata',
	fontWeight: 500,
	textTransform: 'uppercase',
	letterSpacing: 1.1,
	fontSize: 16
});

export default function Header() {
	return (
		<Container>
			<Mark>Coffeestop</Mark>
			<Mark>My Stops</Mark>
		</Container>
	);
}
