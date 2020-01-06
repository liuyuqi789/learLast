### 生命周期
- 重点:
    + created  可以做ajax请求
    + mounted  可以进行DOM操作
    + destroyed 可以解除一些定时器、事件监听..
```
		beforeCreate() {
			console.log(this.num,'初始化之前');//拿不到数据
		},
		//ajax请求的时候就在这使用
		created(){
            console.log(this.num,'初始化之后');//可以拿到data中的数据
            this.timer = setInterval(()=>{
                console.log(1);
            },1000)
        },
        
        //如果没有挂在元素，就没有下面的生命周期了

        //渲染之前
        beforeMount() {
            console.log('渲染之前',box.children);
        },
        //DOM渲染之后，DOM操作
        mounted() {
            console.log('渲染之后',box.children);
        },

        //下面这2个都是数据更新之后，一个是DOM更新之前一个是DOM更新之后
        
        // DOM更新之前
        beforeUpdate() {
            console.log('数据更新之前',box.children,this.arr);
        },
        //DOM更新之后
        updated(){
            console.log('数据更新之后',box.children,this.arr)
        },
        //销毁之前
        beforeDestroy() {
            console.log('销毁之前')
        },
        //销毁之后 ，可以把一些事件、定时器...解除
        destroyed(){
            console.log('销毁之后');
            clearInterval(this.timer);
        }
```
### router
- 单页SPA优点
	+ 不刷新页面，在当前页切换多页的操作方式，能够提高用户体验
	+ 一些后端逻辑(工作)就可以分给前端来做，减少后端同学的压力，提高前端开发的业务能力
	+ 能够共用一些公共静态资源，减少http请求
	+ 实现真正的前后端分离
```
	/  		-> home.vue
	/about  -> about.vue
	/public -> public.vue
```
### router的使用步骤
- 安装路由:
```
	npm install vue-router
	或者
	yarn add vue-router
```
- 详细步骤:
    找到main.js
	+ 1.引包
		import VueRouter from 'vue-router';
	+ 2.安装路由功能
		Vue.use(VueRouter);

	+ 3.实例化VueRouter
		const router = new VueRouter({
			routes:[
					{
						path:'指定路径',
						component:指定路径响应的组件
					}
				]
			});

	+ 4.挂路由
		默认配置是hash路由
			new Vue({
				mode:'history',
					router
				})

	+ 5(*).设置路由页面渲染的位置 <router-view></router-view>