import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入懒加载插件
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//自定义图片懒加载插件
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: require('@/assets/error.jpeg'),
  loading: require('@/assets/loading.gif'),
  attempt: 1
})
