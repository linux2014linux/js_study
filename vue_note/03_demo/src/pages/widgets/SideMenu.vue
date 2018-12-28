<template>
  <div :style="sideMenuStyle">
    <el-menu
      :collapse="isCollapse"
      :router="true"
      :default-active="defaultActive"
      active-text-color="#409EFF"
      class="el-menu-demo"
      mode="vertical"
      @select="handleSelect"
    >
      <el-menu-item v-for="(item) in menus" v-if="!(item.hasOwnProperty('children'))" :index="item.path" :key="item.name">
        <i class="el-icon-menu"></i>
        <span class="menuTextStyle">{{$t(""+item.name)}}</span>
      </el-menu-item>

      <el-submenu v-for="(item) in menus" v-if="item.hasOwnProperty('children')" :index="item.path" :key="item.name">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span class="menuTextStyle">{{$t(""+item.name)}}</span>
        </template>
        <el-menu-item v-for="(child) in item.children" :index="item.path + '/' + child.path" :key="child.name">
          <i class="el-icon-menu"></i>
          <span class="menuTextStyle">{{$t(""+child.name)}}</span>
        </el-menu-item>
      </el-submenu>
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
      sideMenuStyle: gstyle.sideMenuStyle,
      defaultActive: '/dashboard'
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
    self.layoutChange()
    window.onresize = () => self.layoutChange()
  },
  methods: {
    goPage (uri) {
      window.location = uri
    },
    layoutChange () {
      let self = this
      let curWidth = window.document.documentElement.clientWidth
      if (curWidth < 1000) {
        self.isCollapse = true
        let curMenuWidth = 64
        document.getElementById('gcontent').style.left = curMenuWidth + 'px'
        document.getElementById('gsidemenu').style.width = curMenuWidth + 'px'
      } else {
        self.isCollapse = false
        let curMenuWidth = 150
        document.getElementById('gcontent').style.left = curMenuWidth + 'px'
        document.getElementById('gsidemenu').style.width = curMenuWidth + 'px'
      }
    },
    handleSelect (key, path) {
      this.default = key
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
