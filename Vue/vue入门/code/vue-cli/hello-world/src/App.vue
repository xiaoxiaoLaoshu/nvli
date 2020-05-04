<template>
  <div id="app">
    <keep-alive>
    <component :is="component"></component>
    </keep-alive>
    <button @click="component = 'form-one'">show form one</button>
    <button @click="component = 'form-two'">show form two</button>
  </div>
</template>

<script>
import FormOne from './components/FromOne'
import FormTwo from './components/FormTwo'
export default {
  name: 'App',
  data(){
    return {
      component: 'form-two'
    }
  },
  methods: {
    
  },
  components: {
    "form-one": FormOne,
    "form-two": FormTwo
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
