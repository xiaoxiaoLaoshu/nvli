<template>
  <footer>
    <p>{{copyright}}{{info}}</p>
  </footer>
</template>

<script>
export default {
  props:{
    msg:{
      style:String
    }
  },
  data(){
    return {
      copyright: "CopyRight 2020 Vue"
    }
  },
  methods: {
  },
  computed: {
    info() {
      return this.msg;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer {
    width: 100%;
    text-align: center;
    background-color: #222;
    color: lightgreen;
  }
</style>
