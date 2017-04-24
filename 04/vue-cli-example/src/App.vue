<template>
  <div id="app">
    <div id="app-1">
      <GoalForm ></GoalForm>
      <InputForm v-bind:storageKey="'1week-tasks'" v-bind:title="'1st week'"></InputForm>
      <InputForm v-bind:storageKey="'2week-tasks'" v-bind:title="'2nd week'"></InputForm>
    </div>
  </div>
</template>

<script>
import InputForm from './components/InputForm'
import GoalForm from './components/GoalForm'
export default {
  name: 'app',
  components: {
    InputForm,
    GoalForm
  },
  data: function () {
    return {
      targetText: '',
      actionText: ''
    }
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 60px;
}
#app img {
  text-align: center;
}
</style>
