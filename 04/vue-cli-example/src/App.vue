<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello msg="ようこそ"></hello>
    <div style="padding-left: 50px;">
      <h4>1st week</h4>
      <div id="app-1">
        <p v-bind:total-task="totalTask">task：{{ totalTask  }}</p>
        <span v-if="totalTask > 0" v-on:click="toggle">[{{ open ? '-' : '+' }}]</span>
        <InputForm v-bind:storageKey="'1week-tasks'"></InputForm>
        <InputForm v-bind:storageKey="'2week-tasks'"></InputForm>
      </div>
  </div>
</div>
</template>

<script>
import Hello from './components/Hello'
import InputForm from './components/InputForm'

export default {
  name: 'app',
  components: {
    Hello,
    InputForm
  },
  data: function () {
    return {
      targetText: '',
      actionText: '',
      editedTask: null
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
