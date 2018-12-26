<template>
  <div class="hello">
    {{$t(msg)}} {{$t("Right")}}
  </div>
</template>

<script>

export default {
  name: 'Right',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
