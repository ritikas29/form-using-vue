import Vue from 'vue'
import App from './App.vue'
import { CollapsePlugin } from 'bootstrap-vue/es/components'
Vue.use(CollapsePlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
