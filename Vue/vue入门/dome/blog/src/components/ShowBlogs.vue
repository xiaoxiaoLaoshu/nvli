<template>
  <div class="show-blogs">
    <h1>博客总览</h1>
    <div class="single-blog" v-for="(blog,index) in blogs" :key="index">
      <h2>{{blog.title}}</h2>
      <article>
        {{blog.body}}
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  data() {
    return {
      blogs: []
    }
  },
  created() {
    this.blogs = [
      {
        title: '小萨嘎撒地方个',
        body: 'dahkjhafhihwluhfsbakhsahfkawhfk',
        userId: 0
      },
      {
        title: '小萨嘎撒地方个',
        body: 'dahkjhafhihwluhfsbakhsahfkawhfk',
        userId: 1
      },
      {
        title: '小萨嘎撒地方个',
        body: 'dahkjhafhihwluhfsbakhsahfkawhfk',
        userId: 2
      },
      {
        title: '小萨嘎撒地方个',
        body: 'dahkjhafhihwluhfsbakhsahfkawhfk',
        userId: 3
      },
      {
        title: '小萨嘎撒地方个',
        body: 'dahkjhafhihwluhfsbakhsahfkawhfk',
        userId: 4
      },
      {
        title: '小萨嘎撒地方个',
        body: 'dahkjhafhihwluhfsbakhsahfkawhfk',
        userId: 5
      },
      {
        title: '小萨嘎撒地方个',
        body: 'dahkjhafhihwluhfsbakhsahfkawhfk',
        userId: 6
      },
      {
        title: '小萨嘎撒地方个',
        body: 'dahkjhafhihwluhfsbakhsahfkawhfk',
        userId: 7
      },
      {
        title: '小萨嘎撒地方个',
        body: 'dahkjhafhihwluhfsbakhsahfkawhfk',
        userId: 8
      },
      {
        title: '小萨嘎撒地方个',
        body: 'dahkjhafhihwluhfsbakhsahfkawhfk',
        userId: 9
      },
    ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #show-blog {
    min-width: 800px;
    margin: 0 auto;
  }
.single-blog {
  margin: 10px 0;
  padding: 20px 0 10px;
  background-color: #ccc;
}
</style>
