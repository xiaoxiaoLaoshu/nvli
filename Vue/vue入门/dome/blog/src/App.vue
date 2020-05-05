<template>
  <div id="app">
    <BlogHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import ShowBlogs from './components/ShowBlogs.vue'
import BlogHeader from './components/BlogHeader.vue'

export default {
  name: 'App',
  components: {
    ShowBlogs,
    BlogHeader,
  }
}
</script>

<style>

</style>
