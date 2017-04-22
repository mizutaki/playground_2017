<template>
  <li>
    <p v-bind:class="{done: isDone, targetEditing: isTargetEdit}" @dblclick="target_double_click">
      <label>target：</label>
      <span class="view">{{ task.targetText }}</span>
      <input class="edit" v-model="task.targetText" @keyup.enter="edit_keyup(task)" type="text" />
    </p>
    <p v-bind:class="{done: isDone, actionEditing: isActionEdit}" @dblclick="action_double_click">
      <label>action：</label>
      <span class="view">{{ task.actionText }}</span>
      <input class="edit" v-model="task.actionText" @keyup.enter="edit_keyup(task)" type="text" />
    </p>
    <button @click="done_click">done</button>
    <button v-on:click="delete_click">delete</button>
  </li>
</template>

<script>
export default {
  props: [
    'task',
    'index',
    'isDone',
    'isTargetEdit',
    'isActionEdit',
    'deleteText'
  ],
  methods: {
    delete_click: function () {
      this.deleteText(this.task.id)
    },
    done_click: function () {
      this.isDone = !this.isDone
    },
    target_double_click: function () {
      this.isTargetEdit = true
    },
    action_double_click: function () {
      this.isActionEdit = true
    },
    edit_keyup: function () {
      this.isTargetEdit = false
      this.isActionEdit = false
      // eventHub.$emit('edit-done', this.task)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app-1 {
  padding-left: 50px;
}
.done {
  text-decoration: line-through;
  background-color: #b0c4de;
}
.edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-weight: inherit;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  font-smoothing: antialiased;
}
li .targetEditing {
  border-bottom: none;
  padding: 0;
}
li .targetEditing .edit {
  display: block;
  width: 506px;
  margin: 0 0 0 43px;
}
li .targetEditing .view {
  display: none;
}
li .actionEditing {
  border-bottom: none;
  padding: 0;
}
li .actionEditing .edit {
  display: block;
  width: 506px;
  margin: 0 0 0 43px;
}
li .actionEditing .view {
  display: none;
}
li .edit {
  display: none;
}

</style>
