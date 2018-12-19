import Vue from 'vue'
import axios from 'axios'
// import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
    routes: {}
  },
  computed: {
    ViewComponent () {
      const matchingView = this.routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  },
  created: function() {
    var self = this
    axios.get('http://192.168.49.133:19128/article_content.php')
      .then(function(response) {
      self.routes = response.data.routes
    })
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
