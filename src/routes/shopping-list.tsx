import React from 'react';
import { useOutletContext } from 'react-router-dom';

export function ShoppingList() {

	const outletContext = useOutletContext();

	return (
		<div className={`mobileMenu${outletContext} body`}>
			<h1>Welcome to your Shopping List!</h1>
		</div>
	);
}