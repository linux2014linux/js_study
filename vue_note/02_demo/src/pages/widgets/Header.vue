<template>
  <div :style="headerStyle">
    <el-row type="flex" style="background-color: mediumvioletred; height: 55px; line-height: 55px;" justify="end">
      <el-col :span="2">1</el-col>
      <el-col :span="2">2</el-col>
      <el-col :span="2">3</el-col>
    </el-row>
  </div>
</template>

<script>
import gstyle from '../../layout/setting'
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome ',
      headerStyle: gstyle.headerStyle
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
