
import Vue from 'vue'
import App from './App.vue'

// adding jquery
import $ from 'jquery'

import router from './router'
global.$ =$;
window.$ = $;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
