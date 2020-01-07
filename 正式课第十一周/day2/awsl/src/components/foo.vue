<template>
    <div>
        foo
    </div>
</template>

<script>
    export default {
        created() {
            console.log(1,this.$route.params)
        },
        beforeRouteUpdate(to,from,next){
            console.log('切换路由')
            next()
        },
        beforeRouteLeave (to, from, next) {
            let b = confirm('离开?gkd')
            if(b){
                next()
            }else{
                next(false)
            }
        }
    }
</script>

<style scoped>

</style>