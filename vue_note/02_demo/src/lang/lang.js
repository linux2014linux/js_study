import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
  zh: {
    Home: '主页',
    DashBoard: '面板',
    DemoTable: '数据表',
    SystemSetting: '系统设置',
    Welcome: '欢迎来到'
  },
  en: {
    Home: 'Home',
    DashBoard: 'DashBoard',
    DemoTable: 'DemoTable',
    SystemSetting: 'SystemSetting',
    Welcome: 'Welcome'
  },
  ru: {
    Home: 'основная страница',
    DashBoard: 'панель',
    DemoTable: ' Таблица',
    SystemSetting: 'Параметры системы',
    Welcome: 'Добро пожаловать'
  }
}

const i18n = new VueI18n({
  locale: 'zh',
  messages
})

export {messages, i18n}
