<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">Home</router-link>
    <router-link to="/A">AAAA</router-link>
    <router-link to="/A/A1">A1</router-link>
    <router-link to="/A/A2">A2</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
