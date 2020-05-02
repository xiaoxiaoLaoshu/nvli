<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  data(){
    return {
      title: "实战嵌套多个组件"
    }
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    width: 100%;
    text-align: center;
    background-color: lightgreen;
    color:  #222;
  }
</style>
