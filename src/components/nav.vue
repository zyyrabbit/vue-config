<template>
	<ul  class="nav-list-wrap">
		<li  v-for="(nav,index) in navs" :key="index" class="nav-list" :class="{open:listStatus[index]}">
	        <div class="title-wrap" :class="{'title-wrap-active':listStatus[index]}" >
	        <!--判断一级路由是否具有二级子路由，若有二级子路由，则用span元素。通过nav对象是否具体path属性来判断-->
	        <!-- router-link组件使用click事件，必须加native修饰符，否则无效 -->
	            <router-link v-if="nav.path" tag="div" :class="{'title-active':listStatus[index]}"  @click.native="changeListStatus(index)" :to="nav.path"><a>{{nav.title}}</a></router-link>
	            <span v-else class="title-narrow-default" :class="{'title-active':listStatus[index],'title-narrow-active':listStatus[index]}" @click="changeListStatus(index)">{{nav.title}}</span>
	        </div>
	        <!-- 频繁切换使用v-show -->     
		     <div class="sub-nav"> 
		        <transition name="slide-toggle">
		            <ul v-show="listStatus[index] && !nav.path">
		            <!-- v-for循环组件一般需要加key属性唯一标识，避免组件就地复用策略 -->
		                <router-link v-for="(subNav,index) in nav.subNavs" tag="li" active-class="router-active" :to="subNav.path" :key="index">
		                    <a>{{subNav.title}}</a>
		                </router-link>
		            </ul> 
		         </transition>
		    </div>
	    </li>
	</ul>
</template>
<script>
	import Vue from 'vue';
	export default {
		data(){
			return {
				listStatus:[],
				icons:[],
				preIndex:0
			}
		},
		props:{
			navs:{
				type:Array,
				default:[]
			}
		},
		created(){
			// 组件创建时候，根据路由数据，生成同样用于标记一级路由是否打开的状态标记量listStatus
			let len = this.navs.length;
			for(let i= 0;i < len;i++){
				this.listStatus.push(false);
			// 	this.icons.push({
			// 		background:"url('" + this.navs[i].icon + "')"});
			}
			//this.listStatus[0] = true;
		},
		methods:{
			/* 主要的思路:用一个preIndex标记前一个打开的一级子路由，当点击打开另外一个路由时候，
						 可以关闭前一个一级路由的，同时打开新的一级路由
			*/
			changeListStatus(index){
				// 如果切换的是同一个一级路由，且自己toggle切换
				if(this.preIndex == index){
					Vue.set(this.listStatus,index, !this.listStatus[index]);
					return;
				}
				// 数据更新检测，使用Vue方法才可以，改变数组值刷新组件
				Vue.set(this.listStatus,this.preIndex, false);
				Vue.set(this.listStatus,index, true);
				this.preIndex = index;
			}
		}
	}

</script>
<style scoped>
/*元素时候的鼠标划过事件*/
.nav-list:hover {
    background: #354355;
}
/*.nav-list a:hover,
span:hover{
	background-color: #354355;
}*/
/*当点击打开一级标题的样式*/
.open{
    background: #2E425C;
}
.open:hover {
    background: #2E425C;
}
/*设置路由头部链接样式*/
.nav-list a,
span {
    font-size: 1.3rem;
    color: #ddd;
    cursor: pointer;
    display:block;
    padding: 1rem 2rem;
}
/*于撑起点击没有二级标题的样式*/
.nav-list .title-wrap{
	background:url('../images/nav/set-mgr.png') no-repeat left center;
}
.title-wrap-active>div a{
	color:#8AEBEA;
}
/*一级标题打开，关闭接口指示器*/
.title-narrow-default{
	background:url('../images/narrow-left.png') no-repeat right center;
}
/*点击标题时候的文字颜色*/
.title-active{
    color: #8AEBEA;
}
.title-narrow-active{
	background:url('../images/narrow-down.png') no-repeat right center;
}
/*自定义router-linker路由活动时样式颜色*/
.router-active {
    background: #23354C; 
}
/*链接文字的样式*/
.router-active a{
	 color: #8AEBEA;
}

/*二级子路由样式*/
.sub-nav{
	overflow: hidden;
	border-left:0.3rem solid #0DE17C;
}
.sub-nav a{
    padding:1rem 3rem;
    
}
.sub-nav li:hover{
	background: #354355;
}

/*子列表元素过度动态效果*/
.slide-toggle-enter-active {
  animation: slide-down 0.4s ease-in-out;
}
.slide-toggle-leave-active {
  animation: slide-down 0.4s ease-in-out reverse;
}
@keyframes slide-down {
  from {
    visibility: visible;
    max-height:0;
  }
  to {
	max-height:240px;
  }
}
/*@keyframes slide-up {
  from {
    max-height:250px;
  }
  to {
	visibility:hidden;
	max-height:0;
  }
}*/
</style>