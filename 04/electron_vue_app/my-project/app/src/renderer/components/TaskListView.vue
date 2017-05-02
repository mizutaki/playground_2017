<template>
  <div>
    <div id="app-1">
      <Subject :totalTask="totalTask" v-bind:progressRate="progressRate"></Subject>
      <TaskList v-bind:storageKey="'1week-tasks'" v-bind:title="'1st week'"></TaskList>
      <TaskList v-bind:storageKey="'2week-tasks'" v-bind:title="'2nd week'"></TaskList>
      <p>{{ progressRate }}</p>
    </div>
  </div>
</template>

<script>
  import Subject from './TaskListView/Subject'
  import TaskList from './TaskListView/TaskList'
  export default {
    components: {
      Subject,
      TaskList
    },
    name: 'task-list',
    data: function () {
      return {
        targetText: '',
        actionText: '',
        totalTask: 0,
        totalCompleteTask: 0,
        progressRate: 0
      }
    }

  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
