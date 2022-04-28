import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import './navbar-mobile.css';

window.addEventListener('scroll', event => {
	if (window.pageYOffset > 50) {
		document.getElementById('return-up').setAttribute("style", "opacity: 100");
	} else if (window.pageYOffset <= 50) {
		document.getElementById('return-up').setAttribute("style", "opacity: 0");
	}
});


type navBarProps = {
	navMenuVis: boolean,
	mobileMenuCallback: Function,
}


export default class NavBar extends React.Component<navBarProps, {}> {
	constructor(props) {
		super(props)
		

		this.returnUp = this.returnUp.bind(this);
		this.burgerMenu = this.burgerMenu.bind(this);
	}

	returnUp() {
		window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
	}


	burgerMenu() {
		if (window.innerWidth <= 1250) {
			if (this.props.navMenuVis === true) {
				this.props.mobileMenuCallback(false);
			} else if (this.props.navMenuVis === false) {
				this.props.mobileMenuCallback(true);
			}
		}
	}

	renderButton(key: string, url: string) {
		return <NavButton key={key} buttonName={key} url={url} onClick={this.props.mobileMenuCallback}/>
	}


	render() {
		var buttons = [
			this.renderButton('Home', '/'),
			this.renderButton('Cookbook', '/cookbook'),
			this.renderButton('Pantry', '/pantry'),
			this.renderButton('Calendar', '/calendar'),
			this.renderButton('Shopping List', '/shopping-list')
		];

		return (
			<div className="nav-bar">
				<Link to="/"> 
						<img id="logo" src="./images/logo.png" alt="One Pan Pantry Logo"/>
				</Link>
				<nav id="desktopNav">{buttons}</nav>
				<nav id={"mobileNav" + this.props.navMenuVis}>{buttons}</nav>
				<div id="icons">
					<img id="return-up" onClick={this.returnUp} src="./images/return-up-arrow.png" alt="Up Arrow" />
					<img className="icon" onClick={this.burgerMenu} src="./images/bars-solid.png" alt="Menu Bar" />
				</div>
			</div>
		);
	}
}

type NavButtonProps = {
	buttonName: string;
	url: string;
	onClick: Function;
}

class NavButton extends React.Component<NavButtonProps> {
	onButtonPressed() {
		this.props.onClick(false);
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}

	render() {
		return (
			<Link key={this.props.buttonName} to={this.props.url} className="navbutton" onClick={() => this.onButtonPressed()}>{this.props.buttonName}</Link>
		);
	}
}