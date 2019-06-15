import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

import demo from './components/demo.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/demo',
            component: demo
        }
    ]
})

export default router
