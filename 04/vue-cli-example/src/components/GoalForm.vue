<template>
  <div class="goal">
    <h1>1 month</h1>
    <label for="">goal：<input v-model="inputGoal" type="text" size="40" /></label>
    <button v-on:click="add">add</button>
    <progress v-bind:value="percent" max="100"></progress><span>{{percent}}%</span>
    <h2>goal：{{ goal }}</h2>
    <p>total[{{totalTask}}]task</p>
  </div>
</template>

<script>
export default {
  props: [
    'inputGoal',
    'totalTask',
    'percent'
  ],
  data: function () {
    return {
      goal: ''
    }
  },
  methods: {
    add: function () {
      this.goal = this.inputGoal
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  color: #42b983;
}
</style>
