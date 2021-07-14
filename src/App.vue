<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style>
  #app {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: repeating-linear-gradient(
      45deg,
  yellow,
  yellow 10px,
  black 10px,
  black 20px
    );
    display: flex;
    justify-content: center;
    letter-spacing: 0.08rem;
    overflow: hidden;
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
</style>
