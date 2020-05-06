<template>
  <div class="hello">
    <h1>这是插槽的使用</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    background-color:  lightgreen;
  }
</style>
