<template>
   <b-card
    :title="product.title"
    :img-src="product.image"
    :img-alt="product.title"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{ product.description }}
    </b-card-text>

    <b-button :to="'/products/' + product.id" variant="primary">Details</b-button>
  </b-card>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: Object
  },
}
</script>

<style scoped>
</style>
