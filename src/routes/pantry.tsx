import React from 'react';
import { useOutletContext } from 'react-router-dom';

export function Pantry() {

	const outletContext = useOutletContext();

	return (
		<div className={`mobileMenu${outletContext} body`}>
			<h1>Welcome to your Pantry!</h1>
		</div>
	);
}