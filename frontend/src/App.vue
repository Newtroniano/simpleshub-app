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
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2); 
  min-height: 100vh;
  padding: 20px;
}

.navbar {
  padding: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2); 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>