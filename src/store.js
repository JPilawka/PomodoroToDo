import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentListItem: 0,
    maxItemsInList:0,
    currentMaxTime: 0,
    todolist: []
  }
})
