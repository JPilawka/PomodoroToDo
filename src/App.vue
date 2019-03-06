<template>
  <div id="app">
    <img src="./assets/logo.png" class="menuEl"><h3 class="menuEl">Pomodoro ToDo</h3>
    <h5>Total time: {{totalWorkTime}} </h5>
    <router-view/>
  </div>
</template>

<script>
  export default{
    computed:{
      totalWorkTime(){
        let ttime=0;
        for(let i=0; i<this.$store.state.todolist.length; i++){
          ttime+=this.$store.state.todolist[i].timespan*1;
        }
        let hours = Math.floor(ttime / 60);
        let mins = ttime%60;
        return hours+' h '+mins+ ' mins';
      }
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
