<template>
  <div class="hello">
    {{$t(msg)}} {{$t("User")}}
  </div>
</template>

<script>

export default {
  name: 'User',
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
