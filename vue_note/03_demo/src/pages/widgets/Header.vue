<template>
  <div :style="headerStyle">
    <div style="height: 55px; line-height: 55px;">
      <div style="width: 150px;background-color: lightgreen;left: 0px;position: fixed">
        LOGO
      </div>
      <!--<div style="position: fixed; left: 150px; right: 150px; background-color: gray">-->

        <!--<el-menu-->
          <!--class="el-menu-vertical-demo"-->
          <!--mode="horizontal"-->
          <!--:collapse="isCollapse"-->
          <!--:router="true"-->
          <!--background-color="#545c64"-->
          <!--text-color="#fff"-->
          <!--active-text-color="#ffd04b"-->
        <!--&gt;-->
          <!--<el-menu-item v-for="(item) in menus" :index="item.path" :key="item.name">-->
            <!--<i class="el-icon-menu"></i>-->
            <!--<span class="menuTextStyle">{{$t(""+item.name)}}</span>-->
          <!--</el-menu-item>-->
        <!--</el-menu>-->

      <!--</div>-->
      <div :style="userProfileStyle">
        <el-button-group>
          <el-button size="mini" type="primary" @click="switchLang('en')">EN</el-button>
          <el-button size="mini" type="primary" @click="switchLang('zh')">ZH</el-button>
          <el-button size="mini" type="primary" @click="switchLang('ru')">RU</el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
import { gstyle } from '../../layout/setting'
import { i18n } from '../../lang/lang'

export default {
  name: 'Header',
  data () {
    return {
      menus: [],
      msg: 'Welcome ',
      headerStyle: gstyle.headerStyle,
      userProfileStyle: gstyle.userProfileStyle
    }
  },
  created () {
    let self = this
    self.$router.options.routes.forEach(route => {
      self.menus.push(route)
    })
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
