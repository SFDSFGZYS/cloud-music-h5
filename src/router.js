import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

import demo from './components/demo.vue'
import index from './components/index.vue'
import search from './components/search.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: index
        },
        {
            path: '/search',
            component: search
        },
        {
            path: '/demo',
            component: demo
        }
    ]
})

export default router
