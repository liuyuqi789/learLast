<template>
  <div class="about">
    <h1>This is an A page</h1>
    <button @click="add">{{num}}</button>
    <button @click="add2">和b关联</button>
  </div>
</template>
<script>
import {bus} from '../bus/index'

export default {
  created(){
    bus.$on('changeb',(val)=>{
      this.num = val
    })
  },
  data(){
    return{
      num:0
    }
  },
  methods: {
    add(){
      this.num++
    },
    add2(){
      bus.$emit('changea',this.num)
    }
  }
}
</script>
