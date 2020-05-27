import Vue from 'vue'
import VueApp from './vue-app.vue'

console.log('hi')

new Vue({
  render: h => h(VueApp)
}).$mount(document.getElementById('root'))