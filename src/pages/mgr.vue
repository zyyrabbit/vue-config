<template>
	<div id="mgr">
		<header id="head">
			<div class="logo block-middle">xxx管理系统</div>
			<div class="user-setting block-middle">
				<span @click="toggle()" class="admin" :class="{open:isShow}">管理员</span>
				<ul v-show="isShow" class="admin-action">
					<li>设置</li>
					<li>修改资料</li>
					<li>修改资料</li>
				</ul>
				<span class="login-out">
					<router-link to="/">退出</router-link>
				</span>
			</div>
		</header>		
		<main id="main">
			<nav id="nav">
				<Navs :navs="navData"></Navs>
			</nav>
			<div id="content">
				<div id="banner">
					在线交易管理
				</div>
				<div id="main-content">
					<transition>
						<router-view></router-view>
					</transition>
				</div>
			</div>
		</main>
	</div>
</template>
<script>
	// 使用模拟数据,用于路由导航
	import navData from '../mock/nav.js';
	import Navs from '../components/nav.vue';

	export default {
		data(){
			return {
				isShow:false,
				navData:navData
			}
		},
		components:{
			'Navs': Navs
		},
		methods:{
			toggle(){
				this.isShow = !this.isShow;
			}
		}
	}
</script>
<style scoped>
	/*主包含元素样式*/
	#mgr{
		width:100%;
		height:100%;
	}
	/*头部样式*/
	#head{
		width:100%;
		height:5%;
		background:#1F2D3D;	
		z-index:999;
		position:relative;
		color:#ddd;
		font-size:1.4rem;
	}
	#head .block-middle{
		/*div等block当行文字垂直居中*/
		position:absolute;
		top:0;
		bottom:0;
		margin:auto 0;
		height:50%;
	}
	#head .logo{
		left:3rem;
		padding-left:2rem;	
		background:url('../images/logo.png') no-repeat left center;
	}
	#head .user-setting{
		right:3rem;
	}
	.user-setting .admin{
		cursor:pointer;
		padding-right:2rem;
		margin-right:2rem;
		background:url('../images/narrow-left.png') no-repeat right center;
	}
	.user-setting .open{
		background:url('../images/narrow-down.png') no-repeat right center;
	}
	.user-setting .login-out{
		cursor:pointer;
		padding-left:2rem;
		background:url('../images/login-out.png') no-repeat left center;
	}
	.login-out a{
		color:#ddd;
	}
	.user-setting  .admin-action{
		color:#000;
		font-size:1.2rem;
		position:absolute;
		top:3rem;
		width:7rem;
		max-height:10rem;
		z-index:9999;
		border-radius: 0.5rem;
		background: #fff;
		text-align:center;
		padding:0.8rem;
		padding-top:0;
		/*水平偏移值 垂直偏移值 模糊距离 阴影尺寸 阴影颜色 外阴影/内阴影*/
		box-shadow: 0 0 1rem;
	}
	.admin-action li{
		padding-top:0.8rem;
	}
	/*主题内容样式*/
	#main{
		width:100%;
		height:95%;
	}
	/*路由导航页面*/
	#nav{
		float:left;
		height:100%;
		width:18rem;
		background:#475669;
	}
	/*路由切换页面*/
	#content{
		margin-left:18rem;
		height:100%;
	}
    #banner{
    	height:20%;
    	font-size:3rem;
    	background: #ddd;
    	padding:5rem 3rem;	
    }
</style>