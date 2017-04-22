<template>
  <div>
    <label>target：<input v-model="target" type="text" /></label>
    <label>action：<input v-model="action" type="text" /></label>
    <button v-on:click="button_click">add</button>
  </div>
</template>

<script>
export default {
  props: [
    'target',
    'action',
    'addText'
  ],
  methods: {
    button_click: function (event) {
      this.addText(event, this.target, this.action)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  color: #42b983;
}
</style>
