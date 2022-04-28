import React from 'react';
import { useOutletContext } from 'react-router-dom';

//import { ContextHandler } from 'components/app/app';

export function Home() {

	var outletContext = useOutletContext();

	return (
		<div className={`mobileMenu${outletContext} body`}>
			<h1>Welcome!</h1>
		</div>
	);

}