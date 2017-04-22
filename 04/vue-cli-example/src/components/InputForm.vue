<template>
  <div>
    <label>target：<input v-model="target" type="text" /></label>
    <label>action：<input v-model="action" type="text" /></label>
    <button v-on:click="addText">add</button>
    <ul v-show="open">
      <TaskList v-for="(task, index) in taskList"
                 v-bind:task="task"
                 v-bind:delete-text="deleteText"
                 >
      </TaskList>
    </ul>
  </div>
</template>

<script>
import TaskList from './TaskList'

const storage = {
  fetch: function (key) {
    var tasks = JSON.parse(localStorage.getItem(key) || '[]')
    return tasks
  },
  save: function (key, tasks) {
    localStorage.setItem(key, JSON.stringify(tasks))
  },
  getCurrentId: function (key) {
    var tasks = JSON.parse(localStorage.getItem(key) || '[]')
    var id = 0
    tasks.map(function (task) {
      if (id < task.id) {
        id = task.id
      }
    })
    console.log(id)
    return id
  }
}

export default {
  props: [
    'target',
    'action',
    'storageKey'
  ],
  components: {
    TaskList
  },
  data: function () {
    return {
      taskList: storage.fetch(this.storageKey),
      index: storage.getCurrentId(this.storageKey),

      open: true
    }
  },
  watch: {
    taskList: function (tasks) {
      storage.save(this.storageKey, tasks)
    }
  },
  methods: {
    addText: function (event) {
      console.log(this.target)
      console.log(this.action)
      console.log(event)
      this.index += 1
      this.taskList.push({
        id: this.index,
        targetText: this.target,
        actionText: this.action
      })
    },
    deleteText: function (id) {
      console.log(id)
      this.taskList = this.taskList.filter(function (task) {
        return task.id !== id
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  color: #42b983;
}
</style>
