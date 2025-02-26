<template>
  <div id="app">
    <b-navbar type="dark" variant="primary" class="mb-4">
      <b-navbar-brand href="#">SimplesHub</b-navbar-brand>
    </b-navbar>

    <HomeView />
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue';

export default {
  components: {
    HomeView,
  },
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  padding: 1rem;
}
</style>