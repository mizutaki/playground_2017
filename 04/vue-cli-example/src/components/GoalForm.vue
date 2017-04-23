<template>
  <div class="goal">
    <h2>1 month</h2>
    <label for="">goal<input type="text" /></label>
    <input type="button" value="add" />
    <progress value="0" max="100">0%</progress>
  </div>
</template>

<script>
export default {
  props: [
    'task',
    'index',
    'isDone',
    'isTargetEdit',
    'isActionEdit',
    'deleteText'
  ],
  data: function () {
    return {
      taskList: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
