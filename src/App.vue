<template>
  <div id="app">
    <img src="./assets/logo_short.png" class="menuEl"><h3 class="menuEl">Pomodoro ToDo</h3>

    <router-view/>
  </div>
</template>

<script>
  export default{
    created(){
      this.$store.state.todolist = JSON.parse(localStorage.getItem('todolist'));
      if(this.$store.state.todolist==null){
        localStorage.setItem('todolist',JSON.stringify([]));
        this.$store.state.todolist=[];
      }
      //localStorage.setItem('todolist',JSON.stringify(this.$store.state.todolist));
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
  padding-top:20px;
}
h3 {
  padding: 5px;
}
</style>
