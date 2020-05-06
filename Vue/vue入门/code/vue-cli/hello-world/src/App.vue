<template>
  <div id="app">
    <Header @titleChange="updataTitle" :msg="msg1"/>
    <keep-alive>
    <component :is="component" :msg="msg2"></component>
    </keep-alive>
    <button @click="component = 'form-one'">show form one</button>
    <button @click="component = 'form-two'">show form two</button>
    <Footer :msg="msg1"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import FormOne from './components/FromOne.vue'
import FormTwo from './components/FormTwo.vue'

export default {
  name: 'App',
  data(){
    return {
      component: 'form-two',
      msg1: '',
      msg2: '',
    }
  },
  methods: {
    updataTitle(info1,info2) {
      this.msg1 = info1,
      this.msg2 = info2
    }
  },
  components: {
    "form-one": FormOne,
    "form-two": FormTwo,
    Header,
    Footer
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
