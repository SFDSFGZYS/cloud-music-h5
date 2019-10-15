import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import playSongs from './playSongs'

const store = new Vuex.Store({
    modules: { playSongs }
})

export default store
