import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import todolist from '@/assets/todolist_custom.json'

export default new Vuex.Store({
  state: {
    currentListItem: 0,
    maxItemsInList:0,
    currentMaxTime: 0,
    todolist: todolist
  },
  mutations: {

  },
  actions: {
    setMaxIndex(value){
      this.maxItemsInList = value;
    },
    setMaxTime(time){
      this.currentMaxTime = time * 60;
    }
  }
})
