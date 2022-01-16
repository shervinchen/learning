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
  <button id="increaseByOne">加N</button>
  <button id="decreaseByOne">减N</button>
  <button id="square">平方</button>
  <button id="cube">立方</button>
  <button id="reset">归零</button>
</div>
</div>
  `
})

class Controller {
  constructor ({ view, model, events, init, ...rest }) {
    this.view = view
    this.model = model
    this.events = events
    Object.assign(this, rest)
    this.bindEvents()
    init.apply(this, arguments)
  }
  bindEvents () {
    this.events.map(e => {
      $(this.view.$el).on(e.type, e.el, this[e.fn].bind(this))
    })
  }
}

var controller = new Controller({
  view: view,
  model: model,
  events: [
    { type: 'click', el: '#increaseByOne', fn: 'add' },
    { type: 'click', el: '#decreaseByOne', fn: 'minus' },
    { type: 'click', el: '#square', fn: 'square' },
    { type: 'click', el: '#cube', fn: 'cube' },
    { type: 'click', el: '#reset', fn: 'reset' }
  ],
  init (options) {
    this.model.on('changed', () => {
      console.log('c')
      this.view.name = this.model.data.name
      this.view.number = this.model.data.number
    })
    this.model.fetch(1)
  },
  add () {
    let newData = { number: this.model.data.number + (this.view.n - 0) }
    this.updateModel(newData)
  },
  minus () {
    // 注意这里有 bug
    this.model.data.number = this.model.data.number - this.view.n
    this.updateModel(this.model.data)
  },
  square () {
    let newData = { number: Math.pow(this.model.data.number, 2) }
    this.updateModel(newData)
  },
  cube () {
    let newData = { number: Math.pow(this.model.data.number, 3) }
    this.updateModel(newData)
  },
  reset () {
    this.updateModel({ number: 0 })
  },
  updateModel (newData) {
    this.model.update(newData)
  }
})
