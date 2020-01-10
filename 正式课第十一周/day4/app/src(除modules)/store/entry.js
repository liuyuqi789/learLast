import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import store1 from './index'
import store2 from './index2'

export default new Vue.Store({
    modules:{
        store1,
        store2
    }
})