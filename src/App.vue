<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'VT323', 'Courier New', monospace;
  font-size: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
    padding: 5px;
    color: #ec6e2f;
    font-family: 'VT323', 'Courier New', monospace;
    font-size: 24px;
    text-shadow: 0px 0px 4px;
    outline: none;
    background: transparent;
    border: solid 2px #ec6e2f;
    margin-top: 15px;
}
button:hover {
    color: #28afb0;
    border-color: #28afb0;
    cursor: pointer;
}
</style>
