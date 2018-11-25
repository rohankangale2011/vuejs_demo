<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400');

#app {
  font-family: 'Roboto','sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 10px;
}
</style>
