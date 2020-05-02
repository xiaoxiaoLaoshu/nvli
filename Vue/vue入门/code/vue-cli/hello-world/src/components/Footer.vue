<template>
  <footer>
    <p>{{copyright}}</p>
  </footer>
</template>

<script>
export default {
  data(){
    return {
      copyright: "CopyRight 2020 Vue"
    }
  },
  methods: {
    
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
