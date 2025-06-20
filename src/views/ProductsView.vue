<template>
  <div>
    <h1>Browse Products</h1>
    <section class="section">
      <CardComp
        v-for="product in $store.state.products"
        :key="product.id"
        :item="product"
      />
    </section>
  </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue';

export default {
  components: {
    CardComp
  }
};
</script>

<style scoped>
.section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 2rem;
}
</style>




















