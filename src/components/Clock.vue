<template>
  <div>
    <div class="clock">{{minutes}}:{{seconds}}</div>
    <div class="buttons">
      <span>
        <button
          @click="resetTimer()"
          title="Reset"
          @mouseover="tooltipHandler('Reset')"
          @mouseout="tooltipReset()"> @ </button>
        <button
          v-if="!isStarted"
          @click="startTimer()"
          title="Start"
          @mouseover="tooltipHandler('Start')"
          @mouseout="tooltipReset()"> > </button>
        <button
          v-if="isStarted"
          @click="stopTimer()"
          title="Stop"
          @mouseover="tooltipHandler('Stop')"
          @mouseout="tooltipReset()"> || </button>
        <button
          @click="nextItem()"
          title="Next"
          @mouseover="tooltipHandler('Next')"
          @mouseout="tooltipReset()"> >> </button>
      </span>
      <div class="ttip">
        {{tooltip}}
      </div>
    </div>
  </div>
</template>

<script>

import audio from '@/assets/sound.mp3'

export default{
  name: 'Clock',
  props: ['config'],
  data(){
    return{
      isStarted: false,
      itStarted: false,
      isPaused: false,
      audio: audio,
      timer: 0,
      totalTime: 0, //trzeba wstawić czas
      tooltip: ''
    }
  },
  created(){
    this.$store.state.maxItemsInList = this.todolist.length;
    if(this.$store.state.todolist!=null){
      this.setMaxTime(this.$store.state.todolist[0].timespan);
    }

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
      this.setMaxTime(this.todolist[this.$store.state.currentListItem].timespan)
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
    },
    resetTimer(){
      this.totalTime = this.todolist[this.$store.state.currentListItem].timespan*60;
    },
    tooltipHandler(tooltip){
      this.tooltip = tooltip;
    },
    tooltipReset(){
      this.tooltip=' ';
    }
  },
  computed:{
    minutes(){
      return Math.floor(this.totalTime/60);
    },
    seconds(){
      const seconds = this.totalTime - this.minutes*60;
      return (seconds < 10 ? '0' : '') + seconds;
    },
    todolist(){
      //console.log(this.$store.state.todolist);
      if(this.$store.state.todolist!=null){
        return this.$store.state.todolist;
      }

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
  padding-top: 55px;
  margin: auto;
  color: Crimson;
}
.buttons{
  margin-top: 10px;
}
.buttons button {
  color: Crimson;
  font-weight: bold;
  background-color: white;
  border: 1px solid Crimson;
  margin: 2px;
  width: 40px;
}
.ttip{
  min-height: 25px;
  color: Crimson;
}
</style>
