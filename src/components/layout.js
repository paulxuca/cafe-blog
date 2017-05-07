import {rehydrate, fontFace} from 'glamor';
import glamorous from 'glamorous';
import Header from './header';
import {Full} from './div';

if (typeof window !== 'undefined') {
	rehydrate(window.__NEXT_DATA__.ids);
}

fontFace({
	fontFamily: 'Proxima Nova',
	fontStyle: 'normal',
	fontWeight: 500,
	src: 'url(/static/fonts/proxima-nova.ttf)'
});

const LayoutContainer = glamorous(Full)({
	paddingTop: 50
});

export default function Layout({children}) {
	return (
		<div>
			<Header/>
			<LayoutContainer>
				{children}
			</LayoutContainer>
		</div>
	);
}
