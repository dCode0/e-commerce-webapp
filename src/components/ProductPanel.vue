<template>
  <div class="product-panel">
    <h3 v-if="categoryAlias">Listing for category: {{ categoryAlias }}</h3>
    <h3 v-if="!categoryAlias">{{ title }}</h3>

    <b-card-group deck>
      <ProductItem v-for="productItem in products"
        :product="productItem" :key="productItem" />
    </b-card-group>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'

export default {
  name: 'ProductPanel',
  components: {
    ProductItem
  },
  props: {
    title: String,
    categoryAlias: String
  },
  data() {
    return {
      products: [
        {
          "id": 1,
          "title": "Great product 1",
          "description": "About product 1",
          "image": "https://picsum.photos/600/300/?image=25"
        },
        {
          "id": 2,
          "title": "Great product 2",
          "description": "About product 2",
          "image": "https://picsum.photos/600/300/?image=26"
        },
        {
          "id": 3,
          "title": "Great product 3",
          "description": "About product 3",
          "image": "https://picsum.photos/600/300/?image=27"
        },
      ]
    };
  },
}
</script>

<style scoped>
h3 {
  font-size: 20px;
}
</style>
