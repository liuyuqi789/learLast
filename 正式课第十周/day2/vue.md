### Vue

    - jquery    52.8k
    - angular   55.8k
    - React     141k
    - vue       155k
        - MVVM框架  Model View  View Model(双向数据绑定)
        - M-model数据，V-view视图  C-控制器control

        - 难点:父子组件的传递,路由配置和使用,生命周期,vuex,**逻辑**,做项目

> https://cn.vuejs.org/

- 渐进式（弱主张，逐渐学习的，有过程的学习，vue全家桶:vue,vue-router,vuex,vue-cli）：JavaScript 框架

### 使用vue
    - 引vue
    - 在html里挂载一个根元素
        ```
            <div id="app"></div>
        ```
    - 实例化vue  -> new Vue({})

    - 配置参数
        - el:'挂载元素'（不能挂body和html）,
        - data（存数据）:在**new Vue**下值为***对象***
        - 在组件里面data为函数，函数要return {num:0}

    - 输出数据用 双花括号 {{放数据名称即可}} 小胡子

### 指令
    - 为了方便开发者开发，vue中使用了指令，这些指令包含了很多元素身上的属性和js的一些内置方法

    v-text  ----> innerText
    v-html  ----> innerHTML
    v-show  ----> display:block/none  布尔值
    v-if  看下布尔值是否为true，为true就渲染否则就不渲染
    v-else 限制:它上面必须是v-if或者v-else-if
    v-else-if 限制：前一兄弟元素必须有 v-if 或 v-else-if。
    v-on:（缩写@）事件名="事件函数|简单语法"
        一般事件函数是放在methods下
        - $event  
            如果不传参，第一个参数就是事件对象
            *** 如果传了参还想拿到事件对象，需要在模板中的事件函数内传一个
        - 修饰符  .13  .enter .stop  .prevent .once ...
        - 解绑事件可以使用
            ```
                @mousedown="onoff && down($event)"
                当onoff是真的就添加事件，假的就解除事件
            ```

    v-for="val,key in 数据"  遍历对象或者数组
        如果是数组val就是数组的成员，key就是索引
        如果是对象val键值，key键名

     ref:为了让你快速定位一个元素或者组件

        定义:
            元素或者组件上添加一个ref的属性即可
                <div ref="box">

        获取:
                this.$refs.box

    watch（只有数据发生改变才触发，还可以进行深度监听）、computed（上来就触发一次，数据改变再继续触发）都是监听数据

### 组件
-   定义子组件:
```
    Vue.component('组件的名字',{
        template:`<div></div>`,

    })
```
        组件的名字如果是直接引vue.js，那么尽量不要使用驼峰命名,
        因为命名之后，使用子组件的时候会报错，如果非要使用把
        子组件改成烤串命名


-   父子组件的传递:
            1.子组件上写一个v-bind:自定义*行间属性*="父级中的数据"
            2.子组件（对象）上定义一个props的属性，属性的值可以为数组也可以为对象
                如果是数组['第一步自定义行间属性名字']
                    props:['fnum']
            3.直接用{{}} + props中的名字就可以使用了
                    {{ fnum }}

            简单总结:
                (1)往子组件的行间属性上传值
                (2)子组件通过props去接收