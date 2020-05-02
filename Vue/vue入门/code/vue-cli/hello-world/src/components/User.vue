<template>
  <div class="user">
    <ul>
      <li v-for="(user,index) in users" :key="index" @click="user.show = !user.show">
        <h3>{{user.name}}</h3>
        <p v-show="user.show">{{user.wechat}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:["users"],
  data(){
    return {};
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  ul li{
    width: 200px;
    text-align: center;
    display: inline-block;
    border: 1px solid #ccc;
  }
</style>
