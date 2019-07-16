import { Toast } from 'vant'
import axios from 'axios'

axios.defaults.baseURL = 'https://autumnfish.cn/'

// 设置拦截器 (回调函数)
axios.interceptors.request.use(
    config => {
        //   if (config.url.indexOf('/login') == -1) {
        //     config.headers.Authorization = window.sessionStorage.getItem('token')
        //   }
        return config
    },
    err => {
        // Do something with request err
        return Promise.reject(err)
    }
)

// 设置拦截器 响应拦截器
axios.interceptors.response.use(
    res => {
        if (res.status !== 200) {
            Toast({ message: '请求错误！错误代码：' + res.status + ',' + res.statusText, position: 'top' })
        } else if (res.data.code !== 200) {
            Toast({ message: '请求错误！错误代码：' + res.data.code, position: 'top' })
        } else {
            Toast({ message: '请求成功！', position: 'top' })
        }
        return res
    },
    err => {
        return Promise.reject(err)
    }
)

export default {
    install(Vue) {
        Vue.prototype.$axios = axios
    }
}
