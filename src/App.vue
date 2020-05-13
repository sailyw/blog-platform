<template>
  <div id="app">
    <header id="header"></header>
    <main id="main">
      <router-view />
    </main>
    <footer id="footer"></footer>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
