const styles = {
	margin: 0,
	fontFamily: 'Inconsolata, monospace',
	boxSizing: 'border-box',
	fontWeight: 500
};

export default ({children}) => (
	<body style={styles}>
		{children}
	</body>
);
