<template>
  <div id="add-blog">
    <h3>写博客</h3>
    <form v-if="!submited">
      <label>主题：</label>
      <input type="text" v-model="blog.title" />
      <label>内容：</label>
      <textarea v-model="blog.content"></textarea>
      <label>分类:</label>
      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories" />
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories" />
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories" />
        <label>Angular4.js</label>
        <input type="checkbox" value="Angular4.js" v-model="blog.categories" />
      </div>
      <label>作者：</label>
      <select v-model="blog.author">
        <option :value="author" v-for="(author, index) in authors" :key="index">{{author}}</option>
      </select>
      <button @click.prevent="post">提交数据</button>
    </form>
    <div v-if="submited">
      <h3>博客发布成功</h3>
    </div>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容</p>
      <p>{{blog.content}}</p>
      <ul>
        <li v-for="(category, index) in blog.categories" :key="index">{{category}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["小敏", "小王", "小吴"],
      submited: false
    };
  },
  methods: {
    // 接口地址 https://jsonplaceholder.typicode.com/
    post() {
      this.$http.post('https://vueblog-adc33.firebaseio.com/posts.json',this.blog,)
        .then(function(data) {
          console.log(data);
          this.submited = true;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app-blog * {
  box-sizing: border-box;
}

#app-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}

textarea {
  height: 200px;
}

#checkboxes label {
  display: inline-block;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

button {
  display: block;
  margin: 20px 0;
  background-color: crimson;
  color:  #fff;
  border: 0;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
</style>
