import Vue from 'vue';
import  Router from './router/router.js';
import VueRouter from 'vue-router';
import './styles/common.css';
// 使用element-ui以及vue-router
Vue.use(VueRouter);

const App = new Vue({
	router:Router
}).$mount('#app');