<template>
  <p class="message">メッセージ:{{msg}}</p>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: 'こんにちわ!'
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
