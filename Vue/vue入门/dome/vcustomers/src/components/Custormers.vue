<template>
  <div class="custormers container">
    <Alert v-if="alert" :message="alert" />
    <h1 class="page-header">用户管理系统</h1>
    <input type="search" class="form-control" placeholder="搜索" v-model="filterInput">
    <table class="table table-srtiped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(custormer,index) in filterBy(custormers, filterInput)" :key="index">
          <td>{{custormer.name}}</td>
          <td>{{custormer.phone}}</td>
          <td>{{custormer.email}}</td>
          <td><router-link class="btn btn-default" :to="'/customer/'+custormer.id">详情</router-link></td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
import Alert from './Alert.vue'
export default {
  name: 'custormers',
  data () {
    return {
      custormers: [],
      alert: '',
      filterInput: ''
    }
  },
  methods: {
    fetchCustomers() {
      this.$http.get('http://localhost:3000/users')
      .then(function(response){
        // console.log(response);
        this.custormers = response.body;
      })
    },
    filterBy(custormers, value) {
      return custormers.filter(function(custormer){
        return custormer.name.match(value);
      })
    }
  },
  created(){
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchCustomers();
  },
  updated(){
    this.fetchCustomers();
  },
  components: {
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
