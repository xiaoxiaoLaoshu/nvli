<template>
  <header>
    <h1 @click="changeTitle">{{title1}}{{title}}</h1>
  </header>
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
      title1: "实战嵌套多个组件",
    }
  },
  methods: {
    changeTitle(){
      // 注册事件 参数1：事件名称 参数2...: 值
      this.$emit("titleChange" , "Header 改变了title","数据2");
      console.log('aaa');
    }
  },
  computed: {
    title() {
      return this.msg;
    }
  }
  // 生命周期函数
  // beforeCreate() {
  //   alert("这时实例还没有被创建，所以你无法知道data，也不能用watch监听。");
  // },
  // created() {
  //   alert("这时实例已经被创建，可以得到data，也可以用watch，但是页面还是空白的");
  // },
  // beforeMount() {
  //   alert("页面挂载前，此时页面依然是空白的，这时render函数首次被调用。");
  // },
  // mounted() {
  //   alert('页面挂载了，这时你可以看到页面的内容，也可以访问到dom');
  // },
  // beforeUpdate() {
  //   alert("数据更新前，也就是虚拟DOM打补丁之前。");
  // },
  // updated() {
  //   alert("数据已经更新完毕");
  // },
  // beforeDestroy() {
  //   alert("页面离开之前被调用，清除定时器，或者三方的一些DOM结构");
  // },
  // destroyed() {
  //   alert("实例已经完全被销毁");
  // }
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
