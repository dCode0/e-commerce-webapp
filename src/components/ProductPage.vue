<template>
  <div>
    <b-row>
      <b-col cols="12"><h4>{{ product.title }}</h4></b-col>
    </b-row>
    <b-row>
      <b-col cols="5">
        <b-img :src="product.image"/>
      </b-col>
      <b-col cols="7">
        <p>{{ product.description }}</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  components: {
  },
  data() {
    return {
      product: {
        "title": "Great product 1",
        "description": "About product 1",
        "image": "https://picsum.photos/300/600/?image=25"
      },
    };
  },
}
</script>

<style scoped>
</style>
