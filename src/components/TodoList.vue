<template>
  <div>
    <h6>Total time: {{totalWorkTime}} </h6>
    <ul class="list-group">
      <span class="moreInfo" @click="showDesc()" v-if="!show">Show more</span>
      <span class="moreInfo" @click="showDesc()" v-if="show">Show less</span>
      <li v-for="(item, index) in todolist" :class="classChanger(index)">
        <div class="title">
          <span>{{item.name}}</span>
          <span><img src="@/assets/clock_icon.png"> {{item.timespan}} min.</span>
        </div>
        <div v-if="show">{{item.description}}
        </div>
      </li>
    </ul>

  </div>
</template>

<script>


export default{
  name: 'TodoList',
  data(){
    return{
      show: false
    }
  },
  computed:{
    totalWorkTime(){
      if(this.$store.state.todolist!=null){
        let ttime=0;
        for(let i=0; i<this.$store.state.todolist.length; i++){
          ttime+=this.$store.state.todolist[i].timespan*1;
        }
        let hours = Math.floor(ttime / 60);
        let mins = ttime%60;
        return hours+' h '+mins+ ' mins';
      }

    },
    todolist(){
      this.$store.state.todolist = JSON.parse(localStorage.getItem('todolist'));
      return this.$store.state.todolist;
    }
  },
  methods:{
    classChanger(index){
      var c;
      if(this.$store.state.currentListItem==index){
        c="list-group-item list-group-item-success"
      }
      else {
        if(index%2==0){
          c="list-group-item list-group-item-primary"
        }
        else{
          c="list-group-item list-group-item-danger"
        }

      }
      return c;
    },
    showDesc(){
      this.show=!this.show;
    }
  }
}
</script>

<style>
.title{
  font-weight: bold;
}
.title span{
  padding: 0 10px ;
}
.title img{
  width: 16px;
  height: 16px;
  margin-top: -4px;
}
.list-group-item{
  padding: 3px;
}
.list-group-item-primary{
  background-color: #E9F4FA;
}
.list-group-item-danger{
  background-color: #F5EFEF;
}
.moreInfo{
  font-weight: 100;
  display: flex;
  justify-content: space-between;
}
</style>
