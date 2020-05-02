<template>
  <div id="app">
    <app-header></app-header>
    <user :users="users"></user>
    <app-footer></app-footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import User from './components/User.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data(){
    return {
      users: [
        {name: '小敏', wechat: 783294873, show: false},
        {name: '小敏', wechat: 783294873, show: false},
        {name: '小敏', wechat: 783294873, show: false},
        {name: '小敏', wechat: 783294873, show: false},
        {name: '小敏', wechat: 783294873, show: false},
        {name: '小敏', wechat: 783294873, show: false},
        {name: '小敏', wechat: 783294873, show: false},
        {name: '小敏', wechat: 783294873, show: false},
      ]
    }
  },
  components: {
    HelloWorld,
    User,
    "app-header": Header,
    "app-footer": Footer,
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
