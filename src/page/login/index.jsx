import React from 'react'
import "./login.css"
import { browserHistory } from 'react-router'

import { connect } from 'react-redux';
import store from '../../redux/store.js';
import {userName} from '../../actions/index.js';

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username : ''
		}
	}
	onInputChange(e){
        let inputValue  = e.target.value;
        this.setState({
            username : inputValue
        });
    }
    onSubmit(){
        let userInfo = {
               username : this.state.username
            };
        if(this.state.username.length > 0){
        	this.props.history.push('/layout/home');
      		store.dispatch(userName(this.state.username));
      		console.log(this.state.username);
        }else{
        	alert("请输入至少一个字符")
    	}
    }
	render(){
		return(
			<div className="loginpage">
				<div className="login_top_bg">
					<div className="login_top">
						<img src="https://res.wx.qq.com/mpres/en_US/htmledition/modules/weui-desktopSkin/svg/buildless/bg_logo_primary3e4a33.svg"/>
					</div>	
				</div>
				<div className="login_main">
					<div className="login_main_center">
						<div className="login_input">
							<p>登录</p>
							<input 
							placeholder="请随意输入用户名" 
							name="username" 
							onChange={e => this.onInputChange(e)} />
							<button onClick={e => {this.onSubmit(e)}}>登录</button>
						</div>
					</div>
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

export default connect(mapStateToProps)(Login);



