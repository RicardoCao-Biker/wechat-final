import React from 'react'
import BottomNav from "component/nav-bottom/index.jsx"
import { connect } from 'react-redux';
import store from '../../redux/store.js';
import "./id.css"

class Id extends React.Component{
	onSubmitAdd(){
    	this.props.history.push('/adduser');
    }
	render(){
		let newusers = store.getState().users;
		let AddUser = newusers.map(function(item){
			return (
				<tr>
					<td className="table_cell role_cell">
						<span className="role_name">{item.username}</span> 
					</td>
					<td className="table_cell role_cell">
						<span className="icon_allow">{
							item.usercheck.indexOf('1') !== -1 ? '√' : '' 
						}</span> 
					</td>
					<td className="table_cell role_cell">
						<span className="icon_allow">{
							item.usercheck.indexOf('2') !== -1 ? '√' : '' 
						}</span> 
					</td>
					<td className="table_cell role_cell">
						<span className="icon_allow">{
							item.usercheck.indexOf('3') !== -1 ? '√' : '' 
						}</span> 
					</td>
					<td className="table_cell role_cell">
						<span className="icon_allow">{
							item.usercheck.indexOf('4') !== -1 ? '√' : '' 
						}</span> 
					</td>
					<td className="table_cell role_cell">
						<span className="icon_allow">{
							item.usercheck.indexOf('5') !== -1 ? '√' : '' 
						}</span> 
					</td>
				</tr>
			)
		})	
		return(
			<div className="main">
				<div className="id">
					<div className="idtitle">用户身份</div>		
					<div className="idcontent">
						<div>
							<span className="idcontent_title">管理员</span>
							<span className="idcontent_title2">可设置风险操作保护、风险操作提醒等帐号安全</span>
						</div>
						<div>
							<div className="idcontent_manager">
								<img src="http://www.czgongzuo.com/Files/PerPhoto/photoman.gif"/>
								<div>{store.getState().username}</div>
							</div>
						</div>
					</div>		
					<div className="idcontent">
						<div className="id_wrapper">
							<span className="idcontent_title">成员管理</span>
							<span className="idcontent_title2">管理员可添加小程序项目成员，并配置成员的权限，查看详细说明。</span>
							<span><button className="id_button2" onClick={e => {this.onSubmitAdd(e)}}>添加成员</button></span>
						</div>
						<div>	
							<table className="table">
						        <thead className="thead">
						            <tr>
						                <th className="table_cell role_cell">成员</th>
						                <th className="table_cell">开发者权限</th>
						                <th className="table_cell">体验者权限</th>
						                <th className="table_cell">登录</th>
						                <th className="table_cell">数据分析</th>
						                <th className="table_cell">开发管理</th>					                
						            </tr>
						        </thead>
						        <tbody className="tbody">		         
						            <tr className="role_row">
						                <td className="table_cell role_cell">
						                    <span className="role_name">{store.getState().username}</span> 
						                </td>
						                <td className="table_cell">
						                    <span className="icon_allow">√</span>
						                </td>
						                <td className="table_cell">
						                    <span className="icon_allow">√</span>
						                </td>
						                <td className="table_cell">
						                    <span className="icon_allow">√</span>
						                </td>
						                <td className="table_cell">
						                    <span className="icon_allow">√</span>
						                </td>
						                <td className="table_cell">
						                    <span className="icon_allow">√</span>
						                </td>		                
						            </tr>
						            {AddUser} 
						        </tbody>
						    </table>
						</div>
					</div>		
				</div>
				<BottomNav />
			</div>
			);
	}
}
const mapStateToProps = function(store) {
  return {
    username: store.username
  };
};

export default connect(mapStateToProps)(Id);