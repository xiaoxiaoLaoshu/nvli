<template>
  <div class="show-blogs" v-theme:column="'wide'">
    <h1>博客总览</h1>
    <input type="search" placeholder="搜索" v-model="keywords" />
    <div class="single-blog" v-for="(blog,index) in filteredBlogs" :key="index">
      <router-link :to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      keywords: ""
    };
  },
  created() {
    this.$http
      .get("https://vueblog-adc33.firebaseio.com/posts.json")
      .then(function(data) {
        // console.log(data.json());
        return data.json();
        // this.blogs = data.body.slice(0, 10);
      })
      .then(function(data){
        var blogsArray = [];
        for(let key in data){
          // console.log(data[key]);
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        // console.log(blogArray);
        this.blogs = blogsArray;
        // console.log(this.blogs);
      })
      ;
  },
  computed: {
    filteredBlogs: function() {
      //  使用 ES6 提供的过滤器方法
      return this.blogs.filter(blog => {
        // 使用箭头函数，将 this 的引用到本实例对象，匹配成功，则显示结果，不成功则显示全部数据
        return blog.title.match(this.keywords);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show-blogs {
  min-width: 800px;
  margin: 0 auto;
}

.single-blog {
  margin: 10px 0;
  padding: 20px 0 10px;
  background-color: #ccc;
  border: 1px dotted #aaa;
}

input[type="search"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

</style>
