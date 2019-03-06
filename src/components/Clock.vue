<template>
  <div>
    <div class="clock">{{minutes}}:{{seconds}}</div>
    <div class="buttons">
      <span>
        <button> << </button>
        <button v-if="!isStarted" @click="startTimer()"> > </button>
        <button v-if="isStarted" @click="stopTimer()"> || </button>
        <button @click="nextItem()"> >> </button>
      </span>
    </div>
  </div>
</template>

<script>
import todolist from '@/assets/todolist_custom.json'
import audio from '@/assets/sound.mp3'

export default{
  name: 'Clock',
  props: ['config'],
  data(){
    return{
      isStarted: false,
      isPaused: false,
      todolist: todolist,
      audio: audio,
      timer: 0,
      totalTime: 0 //trzeba wstawić czas
    }
  },
  created(){
    this.$store.state.maxItemsInList = todolist.length;
    this.setMaxTime(this.todolist[0].timespan);
  },
  methods:{
    nextItem (){
      this.totalTime = this.$store.state.currentMaxTime;
      this.$store.state.currentListItem++;

      if(this.$store.state.currentListItem>=this.$store.state.maxItemsInList){
        this.$store.state.currentListItem=0;
      }
      this.setMaxTime(this.todolist[this.$store.state.currentListItem].timespan)
    },
    startTimer (){
      if(!this.isPause){
        this.timer = setInterval(() => this.countdown(), 1000);
        this.isStarted=true;
      }
    },
    stopTimer(){
      clearInterval(this.timer);
      this.timer = null;
      this.isStarted=false;
    },
    countdown() {
      this.totalTime--;
      if(this.totalTime<=0){
        this.nextItem();
        this.stopTimer();
        var a = new Audio(this.audio);
        a.play();
        this.isStarted = false;
        this.startTimer();
      }
    },
    setMaxTime(time){
      this.totalTime = time *60;
    }
  },
  computed:{
    minutes(){
      return Math.floor(this.totalTime/60);
    },
    seconds(){
      const seconds = this.totalTime - this.minutes*60;
      return (seconds < 10 ? '0' : '') + seconds;
    }
  }
}
</script>

<style>
.clock{
  font-size: 400%;
  font-weight: 100;
  border: solid 1px red;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  padding-top: 18%;
  margin: auto;
  color: Crimson;
}
.buttons{
  margin-top: 20px;
}
.buttons button {
  color: Crimson;
  font-weight: bold;
  background-color: white;
  border: 1px solid Crimson;
  margin: 2px;
  width: 40px;
}
</style>
