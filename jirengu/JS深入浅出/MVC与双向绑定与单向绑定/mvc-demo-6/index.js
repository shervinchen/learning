axios.interceptors.response.use(function (response) {
  let {
    config: { url, method, data }
  } = response
  data = JSON.parse(data || '{}')
  let row = {
    id: 1,
    name: 'JavaScript高级程序设计',
    number: 2
  }
  if (url === '/books/1' && method === 'get') {
    response.data = row
  } else if (url === '/books/1' && method === 'put') {
    response.data = Object.assign(row, data)
  }
  return response
})

class EventHub {
  constructor () {
    this.events = {}
  }
  on (eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(fn)
  }
  emit (eventName, params) {
    let fnList = this.events[eventName]
    fnList.map(fn => {
      fn.apply(null, params)
    })
  }
  off (eventName, fn) {
    let fnList = this.events[eventName]
    for (let i = 0; i < fnList.length; i++) {
      if (fnList[i] === fn) {
        delete fnList[i]
        break
      }
    }
  }
}

class Model extends EventHub {
  constructor (options) {
    super()
    this.data = options.data || {}
    this.resource = options.resource
    this.baseUrl = options.baseUrl || '/'
  }
  fetch (id) {
    return axios
      .get(this.baseUrl + this.resource + 's/' + id)
      .then(({ data }) => {
        this.data = data
        this.emit('changed')
      })
  }
  create (data) {
    return axios
      .post(this.baseUrl + this.resource + 's', data)
      .then(({ data }) => {
        this.data = data
        this.emit('changed')
      })
  }
  destroy () {
    let id = this.data.id
    return axios.delete(this.baseUrl + this.resource + 's/' + id).then(() => {
      this.data = {}
      this.emit('changed')
    })
  }
  update (newData) {
    let id = this.data.id
    return axios
      .put(this.baseUrl + this.resource + 's/' + id, newData)
      .then(({ data }) => {
        this.data = data
        this.emit('changed')
      })
  }
}

var model = new Model({
  resource: 'book',
  data: {
    id: null,
    number: 0,
    name: null
  }
})

var view = new Vue({
  el: '#app',
  data: {
    name: '未命名',
    number: 0,
    n: 1
  },
  template: `
<div>
<div>
  书名：《{{name}}》，
  数量：{{number}}
</div>
<div><input v-model="n"></div>
<div class="actions">
  <button v-on:click="add">加N</button>
  <button v-on:click="minus">减N</button>
  <button v-on:click="square">平方</button>
  <button v-on:click="cube">立方</button>
  <button v-on:click="reset">归零</button>
</div>
</div>
  `,
  created () {},
  methods: {
    add () {
      let newData = {
        number: this.number + (this.n - 0)
      }
      this.updateModel(newData)
    },
    minus () {
      let newData = {
        number: this.number - (this.n - 0)
      }
      this.updateModel(newData)
    },
    square () {
      let newData = {
        number: Math.pow(this.number, 2)
      }
      this.updateModel(newData)
    },
    cube () {
      let newData = {
        number: Math.pow(this.number, 3)
      }
      this.updateModel(newData)
    },
    reset () {
      this.updateModel({
        number: 0
      })
    },
    updateModel (newData) {
      model.update(newData)
    }
  }
})

model.on('changed', () => {
  console.log('c')
  view.name = model.data.name
  view.number = model.data.number
})
model.fetch(1)
