<template>
  <div>
    <div class="flex-container">
      <div class="flex-h1">
        <h1>subject：{{ subject }}</h1>
      </div>
      <div class="flex-progress">
        <progress v-bind:value="progressRate" max="100"></progress>
        <span>{{progressRate}}%</span>
      </div>
    </div>
    <label>subject：<input v-model="inputSubject" type="text" size="40" /></label>
    <button v-on:click="add">add</button>

  </div>
</template>

<script>
export default {
  props: [
    'totalTask',
    'progressRate'
  ],
  data: function () {
    return {
      subject: '',
      inputSubject: ''
    }
  },
  methods: {
    add: function () {
      this.subject = this.inputSubject
      this.inputSubject = ''
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
