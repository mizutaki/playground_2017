<template>
  <div id="app">
    <div id="app-1">
      <Subject :totalTask="totalTask" v-bind:progressRate="progressRate"></Subject>
      <TaskList v-bind:storageKey="'1week-tasks'" v-bind:title="'1st week'"></TaskList>
      <TaskList v-bind:storageKey="'2week-tasks'" v-bind:title="'2nd week'"></TaskList>
    </div>
  </div>
</template>

<script>
import Subject from './components/Subject'
import TaskList from './components/TaskList'
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
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 30px;
}
</style>
