import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Switch,Redirect,HashRouter} from 'react-router-dom';

import Login from 'page/login/index.jsx';
import AddUser from 'page/adduser/index.jsx';

import './theme.css';

import TopNav from "component/nav-top/index.jsx";
import SideNav from "component/nav-side/index.jsx";

import Home from 'page/home/index.jsx';
import Id from 'page/id/index.jsx';
import Dev from 'page/dev/index.jsx';

import { Provider } from 'react-redux';
import store from './redux/store.js'

class App extends React.Component{
    render(){
    	let Layout = ({ match }) => (
    		<div id="layout">
				<TopNav />
				<SideNav />
				<Switch>
		        	<Route path={`${match.url}/home`} component={Home} />
		        	<Route path={`${match.url}/id`} component={Id} />
		        	<Route path={`${match.url}/dev`} component={Dev} />
	        	</Switch>
			</div>	
    	)
    	return(
    		<Provider store={ store }>
		        <HashRouter>
		        	<switch>
		        		<Route exact path="/" component={Login} />
		        		<Route path="/layout" component={Layout} />
		        		<Route path="/adduser" component={AddUser} />
			        </switch>
		        </HashRouter>
	        </Provider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);	