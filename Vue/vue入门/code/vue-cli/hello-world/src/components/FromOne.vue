<template>
  <div class="formone">
    <h1>填充以下表单内容</h1>
    <div class="info">
      <h3>From One - Contact Us</h3>
      <p>填写以下内容</p>
    </div>
    <div class="userInfo">
      <input type="text" placeholder="name">
      <label>随便说点:</label>
      <textarea cols="15" rows="3"></textarea>
    </div>
    <div class="submit">
      <button>发送</button>
    </div>
    <div class="link">
      <a href="#">link 1 </a>
      <a href="#">link 2</a>
    </div>
  </div>
</template>

<script>
export default {

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