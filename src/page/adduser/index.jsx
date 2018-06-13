import React from "react";
import ReactDOM from 'react-dom';
import {Route,Switch,Redirect,HashRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import store from '../../redux/store.js';
import {userName} from '../../actions/index.js';
import {addUser} from '../../actions/index.js';

import "./adduser.css"
import TopNav from "component/nav-top/index.jsx";

class AddUser extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username:'',
			usercheck:[]
		}
	}
	onInputChangeName(e){
        let inputValue  = e.target.value;
        this.setState({
            username : inputValue
        });
        console.log(this.state.username)
    }
    onInputChange(e){
    	let inputid  = e.target.name;
        let checklist = this.state.usercheck;
        if(this.state.usercheck.indexOf(inputid) === -1){
        	checklist.push(inputid)
        }else {
	      	checklist.filter(item => (item !== inputid))
	    }
        this.setState({
            usercheck : checklist
        });
        console.log(this.state.usercheck)
    }
	onSubmitAdd(){
	    store.dispatch(addUser(this.state.username,this.state.usercheck));
		this.props.history.push('/layout/id');
	}
	render(){
		return(
			<div className="add_page">
				<TopNav />
				<div className="addmain">
					<div className="addcenter">
						<p className="adduser_title">添加用户</p>
						<div className="addtablebg">
							<div className="addtable">
								<div>用户名</div>
								<div><input type="text" className="adduser_inputname" placeholder="请输入用户名" onChange={e => this.onInputChangeName(e)}/></div>
								<div>权限设置</div>
								<div className="adduser_checkbox"> 
								
									<div className="adduser_setitle">权限页面</div>
									<div className="adduser_setitle">权限</div>

									<div>开发者权限</div>
									<div><input className="adduser_check" name="1" type="checkbox" checked={this.state.usercheck.indexOf("1") !== -1} onChange={e => this.onInputChange(e)}/></div>
								
									<div>体验者权限</div>
									<div><input className="adduser_check" name="2" type="checkbox" checked={this.state.usercheck.indexOf("2") !== -1} onChange={e => this.onInputChange(e)}/></div>
							
									<div>登录</div>
									<div><input className="adduser_check" name="3" type="checkbox" checked={this.state.usercheck.indexOf("3") !== -1} onChange={e => this.onInputChange(e)}/></div>
							
									<div>数据分析</div>
									<div><input className="adduser_check" name="4" type="checkbox" checked={this.state.usercheck.indexOf("4") !== -1} onChange={e => this.onInputChange(e)}/></div>
							
									<div>开发管理</div>
									<div><input className="adduser_check" name="5" type="checkbox" checked={this.state.usercheck.indexOf("5") !== -1} onChange={e => this.onInputChange(e)}/></div>
								
								</div>
							</div>
							<button className="adduser_confirm" onClick={e => {this.onSubmitAdd(e)}}>确认添加</button>
						</div>
					</div>
				</div>
			</div>
			)
	}
}
const mapStateToProps = function(store) {
  return {
    username: store.username
  };
};

export default connect(mapStateToProps)(AddUser);
