import React from "react";
import {Link}    from 'react-router-dom';

import Home from 'page/home/index.jsx';
import Id from 'page/id/index.jsx';
import Dev from 'page/dev/index.jsx';

class SideNav extends React.Component{
	constructor(props){
		super(props);
	};
	render(){
		return(
			<div className="leftside">
				<dl id="sidenav">
					<dt className="menu_title menu_home">
						<Link to="/layout/home">
							<span>首页</span>
						</Link>
					</dt>

					<dt className="menu_title menu_dev">
						<Link to="/layout/dev">
							<span>开发管理</span>
						</Link>
					</dt>

					<dt className="menu_title menu_id">
						<Link to="/layout/id">
							<span>用户身份</span>
						</Link>
					</dt>

					<dt className="menu_title menu_data">
						<Link to="/layout/id">
							<span>数据分析</span>
						</Link>
					</dt>

					<dt className="menu_title menu_notice">
						<Link to="/layout/id">
							<span>模板消息</span>
						</Link>
					</dt>

					<dt className="menu_title menu_server">
						<Link to="/layout/id">
							<span>客服消息</span>
						</Link>
					</dt>

					<dt className="menu_title menu_neibor">
						<Link to="/layout/id">
							<span>附近的小程序</span>
						</Link>
					</dt>

					<dt className="menu_title menu_center">
						<Link to="/layout/id">
							<span>运维中心</span>
						</Link>
					</dt>

					<dt className="menu_title menu_ad">
						<Link to="/layout/id">
							<span>推广</span>
						</Link>
					</dt>

					<dt className="menu_title menu_setting">
						<Link to="/layout/id">
							<span>设置</span>
						</Link>
					</dt>
				</dl>	
			</div>
		);
	}
}
export default SideNav;