<template>
  <div id="app">
    <SideMenu id="gsidemenu"></SideMenu>
    <Header id="gheader" class="bigo-main"></Header>
    <div id="gcontent" class="bigo-main" v-bind:style="contentStyle">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideMenu from './pages/widgets/SideMenu'
import Header from './pages/widgets/Header'
import { gstyle } from './layout/setting'
import { i18n } from './lang/lang'

export default {
  name: 'App',
  i18n,
  data () {
    return {
      menus: [],
      isCollapse: false,
      contentStyle: gstyle.contentStyle
    }
  },
  components: {SideMenu, Header},
  created () {
  },
  mounted () {
  },
  method: {
  }
}
</script>
<style scoped>
</style>
