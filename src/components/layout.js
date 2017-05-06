import {rehydrate, fontFace} from 'glamor';
import Header from './header';

if (typeof window !== 'undefined') {
	rehydrate(window.__NEXT_DATA__.ids);
}

fontFace({
	fontFamily: 'Proxima Nova',
	fontStyle: 'normal',
	fontWeight: 500,
	src: 'url(/static/fonts/proxima-nova.ttf)'
});

export default function Layout({children}) {
	return (
		<div>
			<Header/>
			{children}
		</div>
	);
}
