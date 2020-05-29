<template>
  <div id="product-list-one">
    <h2>Product List tow</h2>
    <ul>
      <li v-for="(product, index) in saleProducts" :key="index">
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice1(4)">商品降价</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: "product-list-one",
  computed: {
    products() {
      return this.$store.state.products;
    },
    // saleProducts() {
    //   return this.$store.getters.saleProducts;
    // }
    ...mapGetters([
      "saleProducts"
    ])
  },
  methods:{
    // reducePrice(amount) {
      // this.$store.state.products.forEach(product => {
      //   product.price -= 1;
      // })
      // return this.$store.commit('reducePrice');
    //   this.$store.dispatch("reducePrice1",amount);
    // }
    ...mapActions([
      "reducePrice1"
    ])
  }
};
</script>

<style scoped>
#product-list-one {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}

#product-list-one ul {
  padding: 0;
}

#product-list-one li {
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}

.price {
  font-weight: bold;
  color: #e2cf1e;
}
</style>>

