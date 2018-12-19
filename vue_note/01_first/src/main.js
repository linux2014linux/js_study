import Vue from 'vue'
import App from './App'
import router from './router'
import MyAlert from './components/MyAlert'
import _ from 'lodash'
Vue.prototype._ = _

/* eslint-disable no-unused-vars */
/**
 * 因为都是全局注册的组件,因此不用在new Vue时再用
 * components: {}进行声明
 */
Vue.component('base-input', {
  inheritAttrs: false,
  props: ['label', 'value'],
  computed: {
    inputListeners: function () {
      var vm = this
      // Object.assign合并所有对象
      return Object.assign({},
        // 将所有事件监听器添加到父级
        this.$listeners,
        // 添加自定义的监听器,或者覆盖一些监听器的行为
        {
          // 覆盖默认的input行为
          input: function (event) {
            console.log('在输入')
            // 如果没了默认的这句,那么将不会影响value的变化
            vm.$emit('input', event.target.value)
          },
          focus: function (event) {
            console.log('焦点锁定')
          }
        }
      )
    }
  },
  // methods: {
  //   myFocus: function (event) {
  //     console.log('焦点在base-input组件上')
  //   }
  // },
  /**
   * label并不响应focus和input等事件
   * 由于最外层是label,因此直接在base-input v-on:focus是无法直接响应的
   */
  template: '<label class="test">{{ label }}&nbsp;' +
  '<input v-bind="$attrs" v-bind:value="value" v-on="inputListeners">' +
  '</label>'
})
var app15 = new Vue({
  el: '#app-15',
  data: {
    label: 'username:',
    value: ''
  }
})

/**
 * 我们使用base-checkbox时,v-model="***"
 * v-model的双向绑定会变更***的内容,可以将v-model理解为
 * v-bind和v-on的综合体,因此自定义的model需要有属性和事件
 */
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: '<input type="checkbox" v-bind:checked="checked" v-on:change="$emit(\'change\', $event.target.checked)">'
})

var app14 = new Vue({
  el: '#app-14',
  data: {
    lovingVue: ''
  }
})

var app13 = new Vue({
  el: '#app-13',
  data: {
    checkedNames: [],
    checked: false,
    radio: 'one',
    selected: '',
    selected_dynamic: '',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ],
    selected2: ''
  }
})

Vue.component('tab-home', {
  template: '<div>Home Page</div>'
})
Vue.component('tab-posts', {
  template: '<div>Posts Page</div>'
})
Vue.component('tab-archive', {
  template: '<div>Achive Page</div>'
})
var app12 = new Vue({
  el: '#app-12',
  data: {
    currentTab: 'Home',
    tabs: ['Home', 'Posts', 'Archive']
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
})

/**
 * 引用单文件组件使用slot
 */
var app11 = new Vue({
  el: '#app-11',
  components: {
    'myalert': MyAlert
  }
})

/**
 * 注意 templaste 只有根元素会被渲染
 * 如果写成 template: '<h3></h3><p></p>'那么p元素将不会被渲染
 */
Vue.component('blog-list', {
  props: ['post'],
  template: '<div><h3>{{ post.id }}.{{ post.title }}</h3><button v-on:click="$emit(\'enlarge-text\', 0.1)">Enlarge text</button><button v-on:click="$emit(\'ensmall-text\')">Ensmall text</button><p>{{ post.summary }}</p></div>'
})
var app10 = new Vue({
  el: '#app-10',
  data: {
    blogs: [
      {
        id: 1,
        title: 'Zhangsan',
        summary: '很久很久以前'
      },
      {
        id: 2,
        title: 'Zhangsan',
        summary: '很久很久以前'
      },
      {
        id: 3,
        title: 'Zhangsan',
        summary: '很久很久以前'
      }
    ],
    postFontSize: 1
  }
})

/**
 * Vue 的手册中说的很好,如果 data 是一个数据对象,那么就会造成若干组件共享一份数据,因此此处作为方法,每个
 * 组件都会返回一个独立数据对象
 */
Vue.component('button-counter', {
  data: function () {
    return {
      counter: 0
    }
  },
  template: '<button v-on:click="counter++">You clicked me {{ counter }} times.</button>'
})
var app9 = new Vue({
  el: '#app-9'
})

var app8 = new Vue({
  el: '#app-8',
  data: {
    counter: 0
  }
})

/**
 * $emit(arg) 触发当前实例的对应事件
 * 当前实例,即当前组件.如下将触发todo-items的remove事件
 * 为什么div的remove事件不会被触发呢?
 */
Vue.component('todo-item2', {
  // template: '<li>{{ title }}-{{ id }}<button v-on:click="$emit(\'remove\')">X</button></li>',
  template: '<li>{{ title }}-{{ id }}<div v-on:click="testFunc" v-on:remove="testRemove"><button v-on:click="$emit(\'remove\')">X</button></div></li>',
  props: ['title', 'id'],
  methods: {
    testFunc: function () {
      console.log('div click event trigger')
    },
    testRemove: function () {
      console.log('div remove event trigger')
    }
  }
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes'
      },
      {
        id: 2,
        title: 'Take out the trash'
      },
      {
        id: 3,
        title: 'Mow the lwan'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ],
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    },
    numbers: [1, 2, 3, 4, 5],
    templesItems: [
      { msg: 123 },
      { msg: 456 },
      { msg: 789 }
    ],
    students: [
      { name: 'zhangsan', age: 12 },
      { name: 'lisi', age: 10 },
      { name: 'wangwu', age: 18 }
    ]
  },
  computed: {
    eventNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    ok: true,
    loginType: 'username'
  },
  methods: {
    changeInput: function (event) {
      if (this.loginType === 'username') {
        this.loginType = 'email'
      } else {
        this.loginType = 'username'
      }
    }
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    myStyleObject: {
      color: 'red',
      fontSize: '30px'
    }
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    /**
     * 方式1:直接用数据作为属性
     */
    isActive: true,
    hasError: true,
    /**
     * 方式2: 用对象作为属性,对象即{}
     */
    classObject: {
      active: true,
      'text-danger': false
    },
    /**
     * 方式3: 用计算方法作为属性
     */
    isActive2: true,
    error2: null
  },
  computed: {
    classObject2: function () {
      return {
        active: this.isActive2 && !this.error2,
        'text-danger': this.error2 && this.error.type === 'fatal'
      }
    }
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    question: '',
    answer: 'I cannot give you an answer util you ask a question!'
  },
  watch: {
    // question 发生变化时,该方法被调用
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting fro you to stop typing... ...'
      this.getAnwser()
    }
  },
  methods: {
    getAnwser: _.debounce(
      function () {
        this.answer = this.question
      },
      // 用户输入停止500ms时再触发事件
      500
    )
  }
})

var app1 = new Vue({
  el: '#app-1',
  data: {
    'firstname': 'san',
    'lastname': 'zhang'
  },
  computed: {
    fullname: {
      get: function () {
        return this.firstname + ' ' + this.lastname
      },
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstname = names[0]
        this.lastname = names[names.length - 1]
      }
    }
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

var app0 = new Vue({
  el: '#app-0',
  data: {
    groceryList: [
      {id: 0, text: '蔬菜'},
      {id: 1, text: '水果'},
      {id: 2, text: '蛋奶'}
    ]
  }
})

var app = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

/* eslint-enable no-unused-vars */
