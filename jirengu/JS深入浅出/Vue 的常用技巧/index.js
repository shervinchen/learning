Vue.component('tabs', {
  props: ['selectedTab'],
  template: `
    <div class="tabs">
      <slot/>
    </div>
  `,
  mounted () {
    this.$children.forEach(vm => {
      if (vm.$options.name === 'tabs-navs') {
        vm.setSelectedTab(this.selectedTab)
        vm.$on('update:selectedTab', e => {
          console.log('爷爷知道selectedTab为' + e)
          this.$emit('update:selectedTab', e)
        })
      } else if (vm.$options.name === 'tabs-panes') {
        vm.setSelectedTab(this.selectedTab)
      }
    })
  },
  updated () {
    this.$children.forEach(vm => {
      if (vm.$options.name === 'tabs-navs') {
        vm.setSelectedTab(this.selectedTab)
      } else if (vm.$options.name === 'tabs-panes') {
        vm.setSelectedTab(this.selectedTab)
      }
    })
  }
})
Vue.component('tabs-navs', {
  name: 'tabs-navs',
  data () {
    return {
      selectedTab: undefined
    }
  },
  template: `
    <div class="tabs-navs">
      <slot/>
    </div>
  `,
  methods: {
    setSelectedTab (tab) {
      this.selectedTab = tab
      this.$children.forEach(vm => {
        vm.setSelectedTab(tab)
      })
    }
  },
  mounted () {
    this.$children.forEach(vm => {
      if (vm.$options.name === 'tabs-navs-item') {
        vm.$on('update:selectedTab', e => {
          this.$emit('update:selectedTab', e)
        })
      }
    })
  }
})
Vue.component('tabs-navs-item', {
  name: 'tabs-navs-item',
  props: ['name'],
  data () {
    return {
      selectedTab: undefined
    }
  },
  template: `
    <div class="tabs-navs-item" :class={active} @click="onClick">
      <slot/>
    </div>
  `,
  computed: {
    active () {
      return this.selectedTab === this.name
    }
  },
  methods: {
    setSelectedTab (tab) {
      this.selectedTab = tab
      console.log('儿子的 selectedTab 更新')
    },
    onClick () {
      console.log('儿子触发事件')
      this.$emit('update:selectedTab', this.name)
    }
  }
})
Vue.component('tabs-panes', {
  name: 'tabs-panes',
  data () {
    return {
      selectedTab: undefined
    }
  },
  template: `
    <div class="tabs-panes">
      <slot/>
    </div>
`,
  methods: {
    setSelectedTab (tab) {
      this.selectedTab = tab
      this.$children.forEach(vm => {
        vm.setSelectedTab(tab)
      })
    }
  }
})
Vue.component('tabs-panes-item', {
  props: ['name'],
  data () {
    return {
      selectedTab: undefined
    }
  },
  template: `
    <div class="tabs-panes-item" :class={active}>
      <slot/>
    </div>
`,
  methods: {
    setSelectedTab (tab) {
      this.selectedTab = tab
      console.log('儿子的 selectedTab 更新')
    }
  },
  computed: {
    active () {
      return this.selectedTab === this.name
    }
  }
})

///// 上面是轮子 /////////

var vm = new Vue({
  el: '#app',
  data: {
    value: 'tab1'
  },
  methods: {},
  template: `
  <div>
    <tabs :selectedTab.sync="value">
      <tabs-navs>
        <tabs-navs-item name="tab1"><a href=#>tab 1</a></tabs-navs-item>
        <tabs-navs-item name="tab2">tab 2</tabs-navs-item>
      </tabs-navs>
      <tabs-panes>
        <tabs-panes-item name="tab1">
          内容1
        </tabs-panes-item>
        <tabs-panes-item name="tab2">
          内容2
        </tabs-panes-item>
      </tabs-panes>
    </tabs>
  </div>
`
})
