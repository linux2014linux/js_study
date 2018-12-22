<template>
  <div :style="sideMenuStyle">
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :router="true"
    >
      <el-menu-item v-for="(item) in menus" :index="item.path" :key="item.name">
        <i class="el-icon-menu"></i>
        <span class="menuTextStyle">{{$t(""+item.name)}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

import '../../router'
import { gstyle } from '../../layout/setting'

export default {
  name: 'SideMenu',
  data () {
    return {
      menus: [],
      isCollapse: false,
      sideMenuStyle: gstyle.sideMenuStyle
    }
  },
  created () {
    let self = this
    self.$router.options.routes.forEach(route => {
      self.menus.push(route)
    })
    let curWidth = window.document.documentElement.clientWidth
    if (curWidth < 1000) {
      self.isCollapse = true
    } else {
      self.isCollapse = false
    }
  },
  mounted () {
    let self = this
    window.onresize = () => {
      let curWidth = window.document.documentElement.clientWidth
      if (curWidth < 1000) {
        self.isCollapse = true
        let curMenuWidth = 64
        document.getElementById('gheader').style.left = curMenuWidth + 'px'
        document.getElementById('gcontent').style.left = curMenuWidth + 'px'
        document.getElementById('gsidemenu').style.width = curMenuWidth + 'px'
      } else {
        self.isCollapse = false
        let curMenuWidth = 150
        document.getElementById('gheader').style.left = curMenuWidth + 'px'
        document.getElementById('gcontent').style.left = curMenuWidth + 'px'
        document.getElementById('gsidemenu').style.width = curMenuWidth + 'px'
      }
    }
  },
  method: {
    goPage (uri) {
      window.location = uri
    },
    otherOp () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .menuTextStyle {
    white-space: normal;
    word-break: break-all;
    position: absolute;
    line-height: 15px;
    top: 21px;
  }
</style>
