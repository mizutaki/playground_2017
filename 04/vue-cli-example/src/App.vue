<template>
  <div id="app">
    <div id="app-1">
      <Subject :totalTask="totalTask" v-bind:progressRate="progressRate"></Subject>
      <InputForm v-bind:storageKey="'1week-tasks'" v-bind:title="'1st week'"></InputForm>
      <InputForm v-bind:storageKey="'2week-tasks'" v-bind:title="'2nd week'"></InputForm>
    </div>
  </div>
</template>

<script>
import Subject from './components/Subject'
import InputForm from './components/InputForm'
export default {
  name: 'app',
  components: {
    Subject,
    InputForm
  },
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

<style>
#app {
  color: #2c3e50;
  margin-top: 30px;
}
</style>
