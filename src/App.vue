<template>
  <div class="app-main" id="app">
    <img src="./assets/logo.png">
    <admin></admin>
  </div>
</template>

<script>
import Admin from './controllers/Admin'

export default {
  name: 'app',
  components: {
    Admin
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
