<template>
  <div class="customerDetail container">
    <router-link to="/" class="btn btn-default pull-left">返回</router-link>
    <h1 class="page-header">
      {{custormer.name}}
      <span class="pull-right">
        <router-link class="btn btn-primary" :to="'/edit/' + custormer.id">
          编辑
        </router-link>
        <button class="btn btn-danger" @click="deleteCustormer(custormer.id)">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-phone">{{custormer.phone}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-print">{{custormer.email}}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-phone">{{custormer.education}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-print">{{custormer.graduationschool}}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-phone">{{custormer.profession}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-print">{{custormer.profile}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "customerDetail",
  data() {
    return {
      custormer: ""
    };
  },
  methods: {
    fetchCustomer(id) {
      this.$http
        .get("http://localhost:3000/users/" + id)
        .then(function(response) {
          // console.log(response);
          this.custormer = response.body;
        });
    },
    deleteCustormer(id) {
      // console.log(id);
      this.$http.delete("http://localhost:3000/users/" + id)
      .then(function(response){
        this.$router.push({path:"/", query:{alert: "用户删除成功!"}})
      })
    }
  },
  created() {
    this.fetchCustomer(this.$route.params.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
