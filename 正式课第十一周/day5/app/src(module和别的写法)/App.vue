<template>
  <div>
    <input type="text" :value='12312' ref="txt" @blur="blur">
    <button @click="add">飞一步{{num}}</button>
    <button @click="add2">一步{{num}}</button>
    <button @click="add3">触发aaa</button>
    <router-link to="/about">去关于</router-link>
    {{vv}}
    <router-view></router-view>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex';
export default {
  computed: {
    ...mapState({
      num:state=>state.a.num,
      val:state=>state.b.val
    }),
    ...mapGetters({
      vv:'b/revers'
    })
  },
  methods: {
    ...mapMutations(['a/INCREMENT','b/changeval','b/aaa']),
    ...mapActions(['a/asyncIncrement']),
    add(){
      this['a/INCREMENT']()
    },
    add2(){
      this['a/asyncIncrement']()
    },
    add3(){
      this['b/aaa']()
    },
    blur(){
      this['b/changeval'](this.$ref.txt.value)
    }
  },
}
</script>

<style scoped>

</style>