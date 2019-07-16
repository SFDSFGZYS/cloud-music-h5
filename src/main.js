import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vant from 'vant'
import { Icon } from 'vant'
import 'vant/lib/index.css'
// import 'vant/lib/icon/local.css'
Vue.use(Vant)
Vue.use(Icon)

import './assets/iconfont/iconfont.css'
import './assets/css/common.less'

import axios from './axios'
Vue.use(axios)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
