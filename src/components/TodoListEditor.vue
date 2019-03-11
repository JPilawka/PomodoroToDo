<template>
  <div class="editor alert alert-light">

    <form>
    <ul class="list-group">
      <button @click.prevent="resetList()" class=" col-2 btn btn-danger option-button">Reset List</button>
      <div class="row">
        <label for="name" class="col-3">
          Title
        </label>
        <label for="timespan" class="col-1">
          Time
        </label>
        <label for="description"  class="col-7">
          Description
        </label>
      </div>
      <li v-for="(item, index) in todolist" :key="index" class="list-group-item list-group-item-dark">
        <div class="title form-group">
          <div class="row">
            <input class="form-control col-12 col-sm-3" type="text" v-model="item.name" @change="update()">
            <input class="form-control col-12 col-sm-1" type="text" max="50" v-model="item.timespan" @change="update()">
            <textarea class="form-control col-10 col-sm-6" v-model="item.description"  @change="update()"></textarea>
            <button class="deleteButton" @click.prevent="deleteItem(index)"> X </button>
          </div>
        </div>
      </li>
    </ul>
  </form>
  <form>
  <ul class="list-group">
    <li class="list-group-item list-group-item-info">
      <div class="title form-group">
        <div class="row">
          <label for="name" class="col-3">
            Title
          </label>
          <label for="timespan" class="col-1">
            Time
          </label>
          <label for="description"  class="col-7">
            Description
          </label>
        </div>
        <div class="row">
          <input class="form-control col-12 col-sm-3" type="text" v-model="newName">
          <input class="form-control col-12 col-sm-1" type="text" max="50" v-model="newTimespan">
          <textarea class="form-control col-10 col-sm-7" v-model="newDescription"></textarea>
        </div>
        <button @click.prevent="addNewItemForm()" class="btn btn-success option-button">Add New Item</button>


      </div>
    </li>
  </ul></form>
  </div>
</template>

<script>

export default{
  name: 'TodoListEditor',
  data(){
    return{
      newName: 'Work',
      newTimespan: 25,
      newDescription: 'Short description',
      newItem: {}
    }
  },
  computed:{
    todolist() {
      let tdl=[];
      if(this.$store.state.todolist!=null){
        tdl = this.$store.state.todolist
      }
      return tdl;
    }
  },
  methods:{
    showAddNewItemForm(){
      //this.showNewItem=true;
      this.checkNewItemProps();
    },
    addNewItemForm(){
      this.todolist.push({
        name: this.newName,
        timespan: this.newTimespan,
        description: this.newDescription
      });

      this.$store.state.maxItemsInList=this.todolist.length;
      this.checkNewItemProps();
      localStorage.setItem('todolist', JSON.stringify(this.todolist));
      //this.$store.state.todolist = JSON.parse(localStorage.getItem('todolist'));
    },
    deleteItem(index){
      this.$store.state.todolist.splice(index,1);
      localStorage.setItem('todolist', JSON.stringify(this.$store.state.todolist));
    },
    resetList(){
      localStorage.removeItem('todolist');
      localStorage.setItem('todolist',JSON.stringify([]));
      this.$store.state.todolist=[];
    },
    checkNewItemProps(){
      if(this.todolist.length%2==0){
        this.newName = "Work Item";
        this.newTimespan = 25;
      }
      else{
        this.newName = "Break";
        this.newTimespan = 5;
      }
    },
    update(){
      localStorage.setItem('todolist', JSON.stringify(this.$store.state.todolist));
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
.btn{
  font-weight: bold;
}
.deleteButton{
  background-color: #ff5050;
  color: white;
  height: 24px;
  width: 25px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
}
</style>
