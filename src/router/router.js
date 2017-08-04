import VueRouter from 'vue-router';
import Login from '../pages/login.vue';
import Mgr from '../pages/mgr.vue';
import Home from '../pages/busi/home.vue';
import UserHome from '../pages/busi/UserHome.vue'
const routes = [
    { path: '/', component: Login },
    { path:'/mgr', component: Mgr,
		children:[
			{path: '', component: UserHome},
			{path:'/home',component:Home},
			{path:'/subhome',component:Home}
		],
		beforeEnter:(to,from,next) => {
	// 判断是否为登入状态
			let isLogin = window.sessionStorage.getItem("isLogin");
			console.log(isLogin);
			if(!isLogin){
				next(false);
			}else{
				next();
			}
		}
	}
]
export default new VueRouter({
	routes
});