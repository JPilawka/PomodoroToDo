<template>
  <div id="app">
    <img src="./assets/logo.png" class="menuEl"><h3 class="menuEl">Pomodoro ToDo</h3>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top:20px;
}
h3 {
  padding: 5px;
}

</style>
