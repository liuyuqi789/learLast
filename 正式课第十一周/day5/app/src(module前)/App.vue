<template>
  <div>
    <button @click="add">{{num}}</button>
    <button @click="add2">异步{{num}}</button>
    <router-link to="/about">去关于</router-link>
    <router-view/>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  computed: {
    ...mapState(['num'])
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['asyncIncrement']),
    add(){
      this.increment()
    },
    add2(){
      this.asyncIncrement()
    }
  },
}
</script>