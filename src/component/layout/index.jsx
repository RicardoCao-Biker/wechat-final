import React from "react";
import ReactDOM from 'react-dom';
import {Route,Switch,Redirect,HashRouter} from 'react-router-dom';

import TopNav from "component/nav-top/index.jsx";
import SideNav from "component/nav-side/index.jsx";

import Home from 'page/home/index.jsx';
import Id from 'page/id/index.jsx';
import Data from 'page/data/index.jsx';
import Dev from 'page/dev/index.jsx';

import "./theme.css"

class Layout extends React.Component{
	constructor(props){
		super(props);
	};
	render(){
		return(
			<div id="layout">
				<TopNav />
				<SideNav />
				<Switch>
		        	<Route exact path="/layout/home/:username" component={Home} />
		        	<Route exact path="/layout/id" component={Id} />
		        	<Route exact path="/layout/dev" component={Dev} />
		        	<Route exact path="/layout/data" component={Data} />
		        	<Redirect from="/layout" to="/layout/home"/>
	        	</Switch>
			</div>	
		);
	}
} 
export default Layout;