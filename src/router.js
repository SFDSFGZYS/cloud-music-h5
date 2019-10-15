import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

const demo = () => import('./components/demo.vue')
const index = () => import('./components/index.vue')
const search = () => import('./components/search.vue')
const playPage = () => import('./components/play-page.vue')
const swiperDemo = () => import('./demo/index.vue')

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
            path: '/playPage',
            component: playPage
        },
        {
            path: '/demo',
            component: demo
        },
        {
            path: '/swiper-demo',
            component: swiperDemo
        }
    ]
})

export default router
