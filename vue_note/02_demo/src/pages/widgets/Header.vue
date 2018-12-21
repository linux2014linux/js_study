<template>
  <div :style="headerStyle">
    <el-row type="flex" style="height: 55px; line-height: 55px;" justify="end">
      <el-col :span="2">
        <el-button type="primary" @click="switchLang('en')">EN</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="switchLang('zh')">ZH</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="switchLang('ru')">RU</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import gstyle from '../../layout/setting'
import {i18n} from '../../lang/lang'

export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome ',
      headerStyle: gstyle.headerStyle
    }
  },
  created () {
  },
  methods: {
    switchLang (lang) {
      i18n.locale = lang
      console.log(lang)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
