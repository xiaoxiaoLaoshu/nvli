<template>
  <div class="formone">
    <h1>填充以下表单内容</h1>
    <div class="info">
      <h3>From Two - Contact Us</h3>
      <p>填写以下内容{{info}}</p>
    </div>
    <div class="userInfo">
      <input type="text" placeholder="name">
      <input type="password" placeholder="password">
    </div>
    <div class="submit">
      <button>登录</button>
    </div>
    <div class="link">
      <a href="#">link 1</a>
      <a href="#">link 2</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String
    }
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    info() {
      return this.msg;
    }
  }
}
</script>
  
<style scoped>
h1 {
    text-align: center;
  }
  .formone {
    width: 1200px;
  }
  .info {
    padding: 20px;
    background-color: #ccc;
    margin: 10px 0;
  }
  .userInfo {
    padding: 20px;
    background-color: #666;
    margin: 10px 0;
  }
  .submit {
    padding: 20px;
    background-color: #666;
    margin: 10px 0;
  }
  .link {
    padding: 20px;
    background-color: #ccc;
    margin: 10px 0;
  }
</style>