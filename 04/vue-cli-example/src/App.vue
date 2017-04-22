<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello msg="ようこそ"></hello>
    <div style="padding-left: 50px;">
      <h4>1st week</h4>
      <div id="app-1">
        <p v-bind:total-task="totalTask">task：{{ totalTask  }}</p>
        <span v-if="totalTask > 0" v-on:click="toggle">[{{ open ? '-' : '+' }}]</span>
        <InputForm v-bind:add-text="addText" v-bind:target="targetText" v-bind:action="actionText"></InputForm>
        <ul v-show="open">
          <TaskList v-for="(task, index) in taskList"
                     v-bind:task="task"
                     v-bind:delete-text="deleteText"
                     >
          </TaskList>
        </ul>
      </div>
  </div>
</div>
</template>

<script>
import Hello from './components/Hello'
import InputForm from './components/InputForm'
import TaskList from './components/TaskList'

const STORAGE_KEY1 = '1week-tasks'
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
  name: 'app',
  components: {
    Hello,
    InputForm,
    TaskList
  },
  data: function () {
    return {
      targetText: '',
      actionText: '',
      taskList: storage.fetch(STORAGE_KEY1),
      index: storage.getCurrentId(STORAGE_KEY1),
      open: true,
      editedTask: null
    }
  },
  watch: {
    taskList: function (tasks) {
      storage.save(STORAGE_KEY1, tasks)
    }
  },
  methods: {
    addText: function (event, newTarget, newAction) {
      this.index += 1
      this.taskList.push({
        id: this.index,
        targetText: newTarget,
        actionText: newAction
      })
      console.log(this.taskList)
      this.totalTask += 1
      // aa  aapp0.totalTask += 1
      this.targetText = ''
      this.actionText = ''
    },
    deleteText: function (id) {
      this.totalTask -= 1
      this.taskList = this.taskList.filter(function (task) {
        return task.id !== id
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  list-style: none;
}
</style>
