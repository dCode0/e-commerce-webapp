<template>
  <div class="categories-menu">
    <div>
      <b-nav vertical>
        <b-nav-item
          v-for="category in categories"
          :key="category" 
          :to="'/categories/' + category.alias"
        >{{ category.name }}</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesMenu',
  data() {
    return {
      categories: [
        {name: "Accessories", alias: "accessories"},
        {name: "Clothing", alias: "clothing"},
        {name: "Home Appliances", alias: "appliances"},
        {name: "Electorics", alias: "electronics"},
        {name: "Fashion", alias: "fashion"},
        {name: "Sports", alias: "sports"},
      ]
    };
  }
}
</script>

<style scoped>
</style>
