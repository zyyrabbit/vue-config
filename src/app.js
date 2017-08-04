import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import  Router from './router/router.js';
import VueRouter from 'vue-router';
import './styles/common.css';
// 使用element-ui以及vue-router
Vue.use(ElementUI);
Vue.use(VueRouter);

const App = new Vue({
	router:Router
}).$mount('#app');