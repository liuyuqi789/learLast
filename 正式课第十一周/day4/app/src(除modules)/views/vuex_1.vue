<template>
    <div>
        <h1>Vuex_1</h1>
        {{reverse}}
        <button @click="add">{{num}}</button>
        <!-- <button @click="add">{{$store.state.num}}</button> -->
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data(){
            return {
                val:'haha'
            }
        },
        methods: {
            add(){
                this.$store.commit('increment')
            }
        },
        computed: {
           ...mapState(['num']),
           reverse(){
               return this.val.split('').reverse().join('')
           } 
        }
    }
</script>

<style scoped>

</style>