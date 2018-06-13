import React from "react";

class BottomNav extends React.Component{
	constructor(props){
		super(props);
	};
	render(){
		return(
			<div id="bottomnav">
		 		<span>关于腾讯</span>
		 		<span>文档中心</span>
		 		<span>客服中心</span>
		 		<span>联系邮箱</span>
			 	<span>Copyright © 2012-2018 Tencent. All Rights Reserved.</span>
			</div>	
		);
	}
}
export default BottomNav;