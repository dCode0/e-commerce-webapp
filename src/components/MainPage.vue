<template>
  <div class="main-page">
    <ProductPanel title="On Sale"/>
    <ProductPanel title="Popular"/>
    <ProductPanel title="New Arrivals"/>
  </div>
</template>

<script>
import ProductPanel from './ProductPanel.vue'

export default {
  name: 'MainPage',
  components: {
    ProductPanel
  }
}
</script>

<style scoped>
</style>
