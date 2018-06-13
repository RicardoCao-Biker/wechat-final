import React from 'react'
import BottomNav from "component/nav-bottom/index.jsx"
import "./home.css"

class Home extends React.Component{
	onSubmitDev(){
	    this.props.history.push('/layout/dev/')
	    }
	onSubmitId(){
	    this.props.history.push('/layout/id/')
	    }
	render(){
		return(
			<div className="main">
				<div className="home">
					<div className="hometitle">小程序发布流程</div>		
					<div className="homestep"><p>step</p><p>1</p></div>		
					<div className="homecontent">
						<div className="home_content_1">
							<div>
								<p>小程序信息</p>
							</div>
							<div>
								<p className="home_content_content">补充小程序的基本信息，如名称、图标、描述等</p>
							</div>
							<div>
								<p>已完成</p>
							</div>
						</div>
						<div className="home_content_2">
							<div>
								<p>小程序开发与管理</p>
							</div>
							<div></div>
							<div>
								<button onClick={e => {this.onSubmitId(e)}}>添加开发者</button>
							</div>
							<div>
								<p>开发工具</p>
							</div>
							<div><p className="home_content_content">下载开发者工具进行代码的开发和上传： 普通小程序开发者工具 、 小游戏开发者工具</p></div>
							<div></div>
							<div>
								<p>添加开发者</p>
							</div>
							<div><p className="home_content_content">添加开发者，进行代码上传</p></div>
							<div></div>
							<div>
								<p>配置服务器</p>
							</div>
							<div><p className="home_content_content">在开发设置页面查看AppID和AppSecret，配置服务器域名</p></div>
							<div></div>
							<div>
								<p>帮助文档</p>
							</div>
							<div><p className="home_content_content">可以阅读入门介绍（普通小程序 | 小游戏）、开发文档（普通小程序 | 小游戏）、设计规范和运营规范</p></div>
							<div></div>
						</div>
					</div>		
					<div className="homestep"><p>step</p><p>2</p></div>		
					<div className="homecontent">
						<div className="home_content_3">
							<div>
								<p>版本发布</p>
							</div>
							<div>
								<p>先提交代码，然后提交审核，审核通过后可发布</p>
							</div>
							<div>
								<button onClick={e => {this.onSubmitDev(e)}}>前往发布</button>
							</div>
						</div>
					</div>		
				</div>
				<BottomNav />
			</div>
			);
	}
}
export default Home