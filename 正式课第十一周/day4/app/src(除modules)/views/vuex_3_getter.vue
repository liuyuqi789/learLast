<template>
    <div>
        <h1>Vuex_3</h1>
        <button @click="add">{{toDou}}</button>
    </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapState(['num']),
            ...mapGetters(['toDou'])
        },
        methods: {
            ...mapMutations(['increment']),
            add(){
                this.increment()
            }
        }
    }
</script>