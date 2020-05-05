<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>
      <p>{{blog.content}}</p>
      <p>作者:{{blog.author}}</p>
      <p>分类:</p>
      <ul>
        <li v-for="(category, index) in blog.categories" :key="index">{{category}}</li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  name: 'single-blog',
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.$http.get('https://vueblog-adc33.firebaseio.com/posts/' + this.id + '.json')
      .then(function(data){
        this.blog = data.body;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #single-blog {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #ccc;
  }
</style>
