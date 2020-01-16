<template>
  <div id="app">
    <Menu>

    </Menu>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'app',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'VT323', 'Courier New', monospace;
  font-size: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
