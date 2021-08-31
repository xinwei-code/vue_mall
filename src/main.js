import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入vant组件库
import './plugins/vant'


//引入全局样式
import './assets/css/global.css'
Vue.config.productionTip = false


//创建全局事件总线
Vue.prototype.$bus = new Vue()

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
