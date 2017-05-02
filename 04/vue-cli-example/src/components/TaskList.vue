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
                 >
      </Task>
    </ul>
  </div>
</template>

<script>
import Task from './Task'

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
      taskList: storage.fetch(this.storageKey),
      index: storage.getCurrentId(this.storageKey),
      totalTask: storage.fetch(this.storageKey).length,
      open: true,
      totalCompleteTask: 0,
      percent: 0
    }
  },
  created: function () {
    // 初期化処理
    this.$parent.totalTask += storage.fetch(this.storageKey).length
  },
  watch: {
    taskList: function (tasks) {
      storage.save(this.storageKey, tasks)
    },
    totalCompleteTask: function (a) {
      this.$parent.totalCompleteTask += a
      this.$parent.percent = this.$parent.totalCompleteTask / this.$parent.totalTask * 100
    }
  },
  methods: {
    addText: function (event) {
      this.index += 1
      this.taskList.push({
        id: this.index,
        targetText: this.target,
        actionText: this.action
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
