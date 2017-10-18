<template>
    <div id="login">
        <header id="header" class="">
            <div class="header-content">XXX后台管理系统</div>
        </header>
        <!-- /header -->
        <main id="main">
            <div class="login-form">
            </div>
        </main>
    </div>
</template>
<script>
import Router from '../router/router.js';
import UserLoginMsg from '../mock/UserLoginMsg';
export default {
    
  }
</script>
<style scoped>
	#login{
		width:100%;
		height:100%;
	}
	/*使用table\table-cell来是内容块垂直居中*/
	#header{
		height:40%;
		background:#58B7FF;
		width:100%;
		font-size:4rem;
		color:#EFF2F7;
		display: table;
	}
	#header .header-content{
		display:table-cell;
		vertical-align: middle;
		text-align: center;
	}
	#main{
		height:60%;
		width:100%;
		background:#F9FAFC;
		position:relative;
	}
	#main .login-form{
		width:30%;
		height:70%;
		position:absolute;

	
		top:0;
		left:0;
		bottom:0;
		right:0;
		margin:auto
	}
	.login-form .item{
		padding:1rem 0;
	}
	.login-form .button {
		margin-left:5rem;
	}
	.login-form p{
		text-align: right;
		font-size:1.2rem;
	}
</style>