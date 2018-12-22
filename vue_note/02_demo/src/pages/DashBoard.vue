<template>
  <div class="hello">
    {{$t(msg)}} {{$t("DashBoard")}}
  </div>
</template>

<script>

export default {
  name: 'DashBoard',
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
