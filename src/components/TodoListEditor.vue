<template>
  <div class="editor alert alert-light">
    <form>
    <ul class="list-group">
      <div class="row">
        <label for="name" class="col-3">
          Title
        </label>
        <label for="timespan" class="col-3">
          Time
        </label>
        <label for="description"  class="col-3">
          description
        </label>
      </div>
      <li v-for="(item, index) in todolist" class="list-group-item list-group-item-dark">
        <div class="title form-group">

          <div class="row">
            <input class="form-control col-3" type="text" v-model="item.name">
            <input class="form-control col-3" type="text" v-model="item.timespan">
            <textarea class="form-control col-5" v-model="item.description"></textarea>
          </div>


        </div>
      </li>
    </ul>
    <!--<button @click.prevent="" class="list-group-item list-group-item-success center">SAVE</button>-->
  </form>
  <div class="option-container">
    <button v-if="!showNewItem" @click.prevent="showAddNewItemForm()" class="list-group-item list-group-item-success option-button">Add new Item</button>
    <button v-if="showNewItem" @click.prevent="addNewItemForm()" class="list-group-item list-group-item-success option-button">Add new Item</button>

    <button @click.prevent="reset()" class="list-group-item list-group-item-danger option-button">Reset list</button>
  </div>
  <form>
  <ul class="list-group" v-if="showNewItem">
    <li class="list-group-item list-group-item-info">
      <div class="title form-group">
        <div class="row">
          <label for="name" class="col-3">
            Title
          </label>
          <label for="timespan" class="col-3">
            Time
          </label>
          <label for="description"  class="col-3">
            description
          </label>
        </div>
        <div class="row">
          <input class="form-control col-3" type="text" v-model="newName">
          <input class="form-control col-3" type="text" v-model="newTimespan">
          <textarea class="form-control col-5" v-model="newDescription"></textarea>
        </div>


      </div>
    </li>
  </ul></form>
  </div>
</template>

<script>
import todolist from '@/assets/todolist_custom.json'
import axios from 'axios'

export default{
  name: 'TodoListEditor',
  data(){
    return{
      todolist: todolist,
      showNewItem: false,
      newName: '',
      newTimespan: 25,
      newDescription: 'Short description',
      newItem: {}
    }
  },
  methods:{
    showAddNewItemForm(){
      this.showNewItem=true;
    },
    addNewItemForm(){
      this.todolist.push({
        name: this.newName,
        timespan: this.newTimespan,
        description: this.newDescription

      });

      this.$store.state.maxItemsInList=this.todolist.default.length;
      //console.log(this.todolist);
      let axiosParams ={
        url: 'http://localhost:8080/todolist.json',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
        }
      };
      //axios.get('/todolist.json').then((response)=>{console.log(response.data)});
      axios.post('http://localhost:8080/todolist.json',
        this.todolist,{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
        }
      }).then((response)=>{
        console.log(response);
      }).catch((error)=>{
        console.log(error);
      });
    },
    reset(){
      //copy default to custom
    }
  }
}
</script>

<style scoped>
button{
  margin-top: 10px;
}
.form-control{
  background-color: none;
  margin: 0 5px;
}
.row{
  margin-bottom: 0px;
  padding-bottom: 0px;
}
li{
  margin: 2px;
}
label{
  font-weight: bold;;
}
.editor{
  border: #CCC solid 1px;
  background-color: #EEE;
}
.list-group-item-dark, .row{
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
}
.option-button{

}
.option-container{
  justify-content: space-around;
  display: flex;
  margin-bottom: 10px;
}

</style>
