<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
  font-size: 16px;
  color: #2c3e50;
}

a {
  text-decoration: none;
}

</style>
