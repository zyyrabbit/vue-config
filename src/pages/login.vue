<template>
    <div id="login">
        <header id="header" class="">
            <div class="header-content">XXX后台管理系统</div>
        </header>
        <!-- /header -->
        <main id="main">
            <div class="login-form">
            	<el-card class="box-card">
	            	<el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="10rem" >
		                <el-form-item class="item" label="用户名" prop="userName">
		                    <el-input  v-model="loginForm.userName" auto-complete="off"></el-input>
		                </el-form-item>
		                <el-form-item class="item" label="密码" prop="pass">
		                    <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
		                </el-form-item>
		                <el-form-item class="item">
		                    <el-button class="button" type="primary" @click="submitForm('loginForm')">登录</el-button>
		                    <el-button @click="resetForm('loginForm')">重置</el-button>
		                </el-form-item>
	            	</el-form>
	            	<p>
	            		<router-link to="/getPsw">忘记密码？</router-link>
	            	</p>
            	</el-card>
            </div>
        </main>
    </div>
</template>
<script>
import Router from '../router/router.js';
import UserLoginMsg from '../mock/UserLoginMsg';
export default {
    data() {
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if(value !== UserLoginMsg.passWord){
          callback(new Error('请输入正确密码'));
        }else{
        	callback();//一定需要
        }
      };
      let validateName = (rule,value,callback) => {
      	if(value === ''){
      		callback(new Error('请输入用户名'));
      	}else if(value !== UserLoginMsg.userName){
          callback(new Error('请输入正确用户名'));
        }else{
      		callback();
      	}
      };
      return {
        loginForm: {
          pass: '',
          userName: ''
        },
        rules: {
          pass: [
            { validator: validatePass, required: true,trigger: 'blur' }
          ],
          userName: [
          	{validator: validateName, required: true,trigger:'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          // 模拟前端校验和登录
          if (valid) {
            // 如果登入成功设置状态为登入成功
            window.sessionStorage.setItem("isLogin",true);
            Router.push('mgr');
          } else {
            window.sessionStorage.setItem("isLogin",false);
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
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