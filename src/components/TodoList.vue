<template>
  <div>

    <ul class="list-group">
      <li v-for="(item, index) in todolist" :class="classChanger(index)">
        <div class="title">
          <span>{{item.name}}</span>
          <span><img src="@/assets/clock_icon.png"> {{item.timespan}} min.</span>
        </div>
        {{item.description}}
      </li>
    </ul>

  </div>
</template>

<script>
import todolist from '@/assets/todolist_custom.json'

export default{
  name: 'TodoList',
  props: ['config'],
  data(){
    return{
      todolist: todolist,
    }
  },
  created: function(){

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
</style>
