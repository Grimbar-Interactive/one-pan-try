import { Recipe } from 'components';
import React from 'react';
import { useOutletContext } from 'react-router-dom';

export function Cookbook() {

	const outletContext = useOutletContext();

	return (
		<div className={`mobileMenu${outletContext} body`}>
			<h1>Welcome to your Cookbook!</h1>
			<div className='recipeGrid'>
				<Recipe index={0}/>
				<Recipe index={0}/>
				<Recipe index={0}/>
				<Recipe index={0}/>
				<Recipe index={0}/>
				<Recipe index={0}/>
			</div>
		</div>
	);
}