<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ name }}</p>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg: "hello,world",
      name: "小敏在学习Vue"
    }
  },
  methods: {
    greeting() {
      return "大家好，这里是HELLO，world 的世界." + this.name;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello h1 {
    color: aquamarine;
  }
</style>
