import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
  zh: {
    Home: '主页',
    DashBoard: '面板',
    DemoTable: '数据表',
    SystemSetting: '系统设置',
    Welcome: '欢迎来到',
    Right: '权限页',
    User: '用户页'
  },
  en: {
    Home: 'Home',
    DashBoard: 'DashBoard',
    DemoTable: 'DemoTable',
    SystemSetting: 'SystemSetting',
    Welcome: 'Welcome',
    Right: 'Right',
    User: 'User'
  },
  ru: {
    Home: 'основная страница',
    DashBoard: 'панель',
    DemoTable: ' Таблица',
    SystemSetting: 'Параметры системы',
    Welcome: 'Добро пожаловать',
    Right: 'компетенция',
    User: 'пользователь'
  }
}

const i18n = new VueI18n({
  locale: 'zh',
  messages
})

export {messages, i18n}
