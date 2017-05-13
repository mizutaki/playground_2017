<template>
  <div>
    <div class="flex-container">
      <div class="flex-h1">
        <h1>subject：{{ subject }}</h1>
      </div>
      <div class="flex-progress">
        <p>total{{totalCompleteTask}}/{{totalTask}}</p>
        <progress v-bind:value="progressRate" max="100"></progress>
        <span>{{progressRate}}%</span>
      </div>
    </div>

    <label>subject：<input v-model="inputSubject" type="text" size="40" /></label>
    <button v-on:click="addSubject">add</button>
    <button v-on:click="deleteSubject">delete</button>
  </div>
</template>

<script>
import { fetchSubject, save } from './storage'
const storageKey = 'subject'
export default {
  props: [
    'totalTask',
    'progressRate',
    'totalCompleteTask'
  ],
  data: function () {
    return {
      subject: '',
      inputSubject: ''
    }
  },
  created: function () {
    var subject = fetchSubject(storageKey)
    this.subject = subject
  },
  methods: {
    addSubject: function () {
      this.subject = this.inputSubject
      save(storageKey, this.subject)
      this.inputSubject = ''
    },
    deleteSubject: function () {
      this.subject = ''
      save(storageKey, '')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-container {
  display: flex;
}
.flex-h1 {
  color: #42b983;
}
.flex-progress {
  margin: auto;
}
</style>
