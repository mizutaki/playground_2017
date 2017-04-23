<template>
  <div class="week">
    <h4>{{ title }}</h4>
    <div class="test">
      <p>[{{totalTask}}]task</p>
      <span v-if="totalTask > 0" v-on:click="toggle">[{{ open ? '-' : '+' }}]</span>
      <label>target：<input v-model="target" type="text" size="40" /></label>
      <label>action：<input v-model="action" type="text" size="40" /></label>
      <button v-on:click="addText">add</button>
    </div>
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
    'storageKey',
    'title'
  ],
  components: {
    TaskList
  },
  data: function () {
    return {
      taskList: storage.fetch(this.storageKey),
      index: storage.getCurrentId(this.storageKey),
      totalTask: storage.fetch(this.storageKey).length,
      open: true
    }
  },
  watch: {
    taskList: function (tasks) {
      storage.save(this.storageKey, tasks)
      this.totalTask += 1
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
      this.target = ''
      this.action = ''
    },
    deleteText: function (id) {
      console.log(id)
      this.taskList = this.taskList.filter(function (task) {
        return task.id !== id
      })
    },
    toggle: function () {
      this.open = !this.open
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
.test {
  text-align: left;
}
.week {
  padding-left: 50px;
}

</style>
