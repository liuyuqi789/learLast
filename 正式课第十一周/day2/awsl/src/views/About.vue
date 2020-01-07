<template>
  <div class="about">
    <router-link to="/">回家</router-link> | 
    <router-link to="/about/xiashishi/id/1">About1</router-link>
    <router-link to="/about/lala/id/2">About2</router-link>
    <router-link to="/public">public</router-link>

    <div>
      用户:{{$route.params.uname}}
      <h2 v-if="$route.params.id == 1">窝窝头</h2>
      <h5 v-if="$route.params.id == 2">一块钱四个</h5>
    </div>

    {{$route.params.id}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      num:0
    }
  },
  created(){
    this.num = 1
    if(this.$route.params.id === '1'){
      setTimeout(()=>{
        console.log('请求接口1')
      },1000)
    }else if(this.$route.params.id === '2'){
      setTimeout(()=>{
        console.log('请求接口2')
      },1000)
    }
  },
  watch: {
    '$route'(to,from){
      if(to.params.id === '1'){
        setTimeout(()=>{
          console.log('请求接口1')
        },1000)
      }else if(to.params.id === '2'){
        setTimeout(()=>{
          console.log('请求接口2')
        },1000)
      }
    }
  }
}
</script>