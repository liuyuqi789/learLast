<template>
    <div>
        <p>登陆啊</p>
        用户名:<input v-model="uname" type="text"/>
        密  码:<input v-model="pass" type="password"/>
        <button @click="login">登陆</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                uname:'',
                pass:''
            }
        },
        methods: {
            login(){
                const {uname,pass} = this
                setTimeout(()=>{
                    if(uname === '白晓' && pass === '123'){
                        this.$router.push({
                            name:'home',
                            params:{
                                un:'白晓'
                            }
                        })
                    }
                },1000)
            }
        },
    }
</script>

<style scoped>

</style>