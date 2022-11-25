import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
Vue.config.productionTip = false
// Vue.use(bootstrap)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
