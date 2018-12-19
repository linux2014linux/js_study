<style>
  .Alert-close {
    font-weight: bold;
    cursor: pointer;
  }
  .Alert-Success {
    color: green;
  }
  .Alert-Warning {
    color: #aa0;
  }
  .Alert-Error {
    color: red;
  }
</style>

<template id="alert-template">
  <div>
    <button @click="resetShow">Reset {{ type }} </button>
    <div :class="alertClasses"  v-show="isshow">
      <slot><strong>Default!</strong> Hello World~</slot>&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="Alert-close" @click="isshow = false">x</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAlert',
  props: ['type'],
  template: '#alert-template',
  computed: {
    alertClasses: function () {
      return {
        'Alert-Success': this.type === 'success',
        'Alert-Warning': this.type === 'warning',
        'Alert-Error': this.type === 'error'
      }
    }
  },
  data: function () {
    return {
      isshow: true
    }
  },
  methods: {
    resetShow: function () {
      this.isshow = true
    }
  }
}
</script>
