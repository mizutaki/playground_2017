<template>
  <div id="app">
    <div id="app-1">
      <Subject :totalTask="totalTask" :totalCompleteTask="totalCompleteTask" v-bind:progressRate="progressRate"></Subject>
      <TaskList v-bind:storageKey="'1week-tasks'" v-bind:title="'1st week'"></TaskList>
      <TaskList v-bind:storageKey="'2week-tasks'" v-bind:title="'2nd week'"></TaskList>
      <TaskList v-bind:storageKey="'3week-tasks'" v-bind:title="'3rd week'"></TaskList>
      <TaskList v-bind:storageKey="'4week-tasks'" v-bind:title="'4th week'"></TaskList>
    </div>
  </div>
</template>

<script>
import Subject from './components/Subject'
import TaskList from './components/TaskList'
import { save, fetchSubject } from './storage'

export default {
  name: 'app',
  components: {
    Subject,
    TaskList
  },
  data: function () {
    return {
      totalTask: 0,
      totalCompleteTask: 0,
      progressRate: 0
    }
  },
  created: function () {
    var obj = fetchSubject('count')
    if (obj !== null) {
      this.totalTask = obj.totalTask
      this.totalCompleteTask = obj.totalCompleteTask
      this.progressRate = obj.progressRate
    }
  },
  watch: {
    totalTask: function () {
      this.progressRate = this.totalCompleteTask / this.totalTask * 100
      save('count', {'totalTask': this.totalTask, 'totalCompleteTask': this.totalCompleteTask, 'progressRate': this.progressRate})
    },
    totalCompleteTask: function () {
      this.progressRate = this.totalCompleteTask / this.totalTask * 100
      save('count', {'totalTask': this.totalTask, 'totalCompleteTask': this.totalCompleteTask, 'progressRate': this.progressRate})
    }
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 30px;
}
</style>
