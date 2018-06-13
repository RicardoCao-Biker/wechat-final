import React from "react";

import {Route,HashRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../../redux/store.js';
import axios from "axios"

class TopNav extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			news:[],
			show:false
		}
	};
	onSubmit(){
		this.props.history.push('/layout/home');
	};
	handleClick(e) {
    	this.setState({ 
    		show:!this.state.show 
    	});
	};
	componentDidMount() {
	    axios.get('http://www.ricofishing.com/data.json')
	      .then(res => {
	        let data = res.data.data;
	        this.setState({
	        	news:data
	        })
	      });
  	};
	render(){
	    let show= this.state.show?"block":"none";
	    let style = {
	        display:show
	    };
		let hideNew = this.state.news.map(
			function(item){
				return (
					<div>{item}</div>
					)
			}
		)
		return(
			<div id="topnav">
			 	<a className="logo" onClick={e => {this.onSubmit(e)}}></a>
			 	<div className="topnav_right">
			 		<ul>
			 			<li className="underline">文档</li>
			 			<li className="underline"> 社区</li>
			 			<li>
				 			<i className="notice" onClick={e => this.handleClick(e)}></i>
				 			<div className="noticenum">3</div>
				 			<div className="hidenews" style={style}>{ hideNew }</div>
			 			</li>
			 			<li>{store.getState().username}</li>
			 		</ul>
			 	</div>
			</div>	
		);
	}
}

const mapStateToProps = function(store) {
  return {
    username: store.username
  };
};

export default connect(mapStateToProps)(TopNav);