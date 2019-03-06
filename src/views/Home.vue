<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <Clock :config="config">
        </Clock>
      </div>
      <div class="col-12 col-md-6">
        <TodoList :config="config">
        </TodoList>
      </div>
  </div>

    <div class="editor">
      <button @click="showEditorF()" class="btn editorButton"> Show Editor
        <span v-if="!showEditor" id="arrowDown"> &#94; </span>
        <span v-if="showEditor"id="arrowUp"> &#94; </span>
      </button>
      <TodoListEditor v-if="showEditor"></TodoListEditor>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Clock from '@/components/Clock.vue'
import TodoList from '@/components/TodoList.vue'
import TodoListEditor from '@/components/TodoListEditor.vue'

export default {
  name: 'home',
  components: {
    Clock,
    TodoList,
    TodoListEditor
  },
  data(){
    return {
      showEditor: false,
      config: 'default'
    }
  },
  methods: {
    showEditorF: function(){
      return this.showEditor= !this.showEditor;
    }
  }
}
</script>

<style>
.editor{

}
.row {
  margin: 5px;
  padding: 5px;

}
.editorButton{
  background-color: none;
}
#arrowDown{
  display: inline-block;
  transform: rotate(180deg);
}
#arrowDown{
  display: inline-block;
}
</style>
