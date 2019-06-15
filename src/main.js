import Vue from 'vue'
import App from './App.vue'
import router from './router'
import element from 'element-ui'
Vue.use(element)
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
