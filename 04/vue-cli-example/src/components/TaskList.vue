<template>
  <div class="week">
    <h4>{{ title }}</h4>
    <div>
      <p>[{{totalTask}}]task</p>
      <span v-if="totalTask > 0" v-on:click="toggle">[{{ open ? '-' : '+' }}]</span>
      <label>target：<input v-model="target" type="text" size="40" /></label>
      <label>action：<input v-model="action" type="text" size="40" /></label>
      <button v-on:click="addText">add</button>
    </div>
    <ul v-show="open">
      <Task v-for="(task, index) in taskList"
                 v-bind:task="task"
                 v-bind:delete-text="deleteText"
                 v-bind:storage-key="storageKey"
                 v-on:increase="_increaseCompleteTaskCount"
                 v-on:decrease="_decreaseCompleteTaskCount"
                 >
      </Task>
    </ul>
  </div>
</template>

<script>
import Task from './Task'
import { fetch, save, getCurrentId } from '../storage'

export default {
  props: [
    'storageKey',
    'title'
  ],
  components: {
    Task
  },
  data: function () {
    return {
      target: '',
      action: '',
      taskList: fetch(this.storageKey),
      index: getCurrentId(this.storageKey),
      totalTask: fetch(this.storageKey).length,
      open: true,
      totalCompleteTask: 0
    }
  },
  watch: {
    taskList: function (tasks) {
      save(this.storageKey, tasks)
    }
  },
  methods: {
    addText: function (event) {
      this.index += 1
      this.taskList.push({
        id: this.index,
        targetText: this.target,
        actionText: this.action,
        isDone: false
      })
      this.target = ''
      this.action = ''
      this._increaseTaskCount()
    },
    deleteText: function (id) {
      this.taskList = this.taskList.filter(function (task) {
        return task.id !== id
      })
      this._decreaseTaskCount()
    },
    toggle: function () {
      this.open = !this.open
    },
    _increaseTaskCount: function () {
      this.totalTask += 1
      this.$parent.totalTask += 1
    },
    _decreaseTaskCount: function () {
      this.totalTask -= 1
      this.$parent.totalTask -= 1
    },
    _increaseCompleteTaskCount: function () {
      this.totalCompleteTask += 1
      this.$parent.totalCompleteTask += 1
    },
    _decreaseCompleteTaskCount: function () {
      this.totalCompleteTask -= 1
      this.$parent.totalCompleteTask -= 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  color: #42b983;
}
h4 {
  text-align: left;
  border-bottom: 1px solid #42b983;
}
.week {
  padding-left: 50px;
}

</style>
