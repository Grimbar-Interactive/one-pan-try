import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from 'components';

type appState = {
    navMenuVis: boolean,
}

export default class App extends React.Component < {}, appState> {
    constructor (props) {
        super(props);
        this.state = {
            navMenuVis: false,
        }
        this.hideMobileMenu = this.hideMobileMenu.bind(this);
        this.mobileMenu = this.mobileMenu.bind(this);
    }

  hideMobileMenu(e) {
    if (e.target.ID !== 'mobileNavtrue' && e.target.className !== 'icon') {
      this.mobileMenu(false);
    }
  }

  mobileMenu(visible: boolean) {
    this.setState({navMenuVis: visible});
  }

 
	render() {
		return (
      <div onClick={this.hideMobileMenu}>
          <NavBar navMenuVis={this.state.navMenuVis} mobileMenuCallback={this.mobileMenu}/>
          <Outlet context={this.state.navMenuVis}/> 
      </div>
		)
	}
}
