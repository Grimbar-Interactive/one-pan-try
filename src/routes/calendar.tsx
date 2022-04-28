import React from 'react';
import { useOutletContext } from 'react-router-dom';

export function Calendar() {

	const outletContext = useOutletContext();

	return (
		<div className={`mobileMenu${outletContext} body`}>
			<h1>Welcome to your Calendar!</h1>
		</div>
	);
}