import React from 'react'
import BottomNav from "component/nav-bottom/index.jsx"
import "./dev.css"

class Dev extends React.Component{
	onSubmit(){
	    this.props.history.push('/layout/id/')
	    }
	render(){
		return(
			<div className="main">
				<div className="dev">
					<div className="devtitle">开发管理</div>
					<div className="devcontent">
						<p className="devcontent_title">线上版本</p>
						<div className="devcontent_content"><p>尚未提交线上版本</p></div>
					</div>
					<div className="devcontent">
						<p className="devcontent_title">审核版本</p>
						<div className="devcontent_content"><p>你暂无提交审核的版本或者版本已发布上线</p></div>
					</div>
					<div className="devcontent">
						<p className="devcontent_title">开发版本</p>
						<div className="devcontent_content"><p>你尚未绑定任何开发者，请先<a onClick={e => {this.onSubmit(e)}}>绑定开发者</a></p></div>
					</div>
				</div>
				<BottomNav />
			</div>
			);
	}
}
export default Dev