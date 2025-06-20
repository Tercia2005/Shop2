<template>
  <div id="app">
    <NavbarComp />
    <router-view />
  </div>
</template>

<script>
import NavbarComp from './components/NavbarComp.vue';

export default {
  components: {
    NavbarComp
  },
  mounted() {
    this.$store.dispatch('fetch_products');
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2C3E50;
}

nav a.router-link-exact-active {
  color: #42B983;
}
</style>
