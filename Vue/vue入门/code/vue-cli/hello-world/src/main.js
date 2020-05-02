import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// import User from './components/User.vue'


// Vue.component("Users", User)
new Vue({
  render: h => h(App),
}).$mount('#app')
