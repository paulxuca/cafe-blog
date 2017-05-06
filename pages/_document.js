import Document, {Main, NextScript, Head} from 'next/document';
import {renderStatic} from 'glamor/server';
import Body from '../src/components/body';

export default class EnhancedDocument extends Document {
	static async getInitialProps({renderPage}) {
		const page = renderPage();
		const styles = renderStatic(() => page.html);

		return {
			...page,
			...styles
		};
	}

	constructor(props) {
		super(props);

		const {__NEXT_DATA__, ids} = props;
		if (ids) {
			__NEXT_DATA__.ids = this.props.ids;
		}
	}

	render() {
		return (
			<html>
				<Head>
					<link href="//fonts.googleapis.com/css?family=Inconsolata:400,700" rel="stylesheet"/>
					<style dangerouslySetInnerHTML={{__html: this.props.css}}/>
				</Head>
				<Body>
					<Main/>
					<NextScript/>
				</Body>
			</html>
		);
	}
}
