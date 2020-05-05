import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
// 引入路由信息
import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)
// 解决 CORS



//自定义指令
Vue.directive("rainbow", {
  bind(el, binding, vnode){
    el.style.color = '#' + Math.random().toString(16).slice(2,8);
  }
})

Vue.directive('theme', {
  bind(el, binding, vnode){
    // 判断传入参数的 值
    if (binding.value == 'wide') {
      el.style.maxWidth = "1260px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px";
    }

    // 判断传入事件名参数
    if (binding.arg == 'column') {
      el.style.background = "#6677cc";
      el.style.padding = "0 20px";
    }
  }
})

// 自定义过滤器
Vue.filter("to-uppercase", function(value){
  // 将字符的小写转换为大写
  return value.toUpperCase();
})

Vue.filter("snippet", function(value){
  // 截取字符 多处的以 …… 替代
  return value.slice(0, 100) + '……';
})

// 创建路由
const router = new VueRouter({
  routes: Routes,
  mode: "history"
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
