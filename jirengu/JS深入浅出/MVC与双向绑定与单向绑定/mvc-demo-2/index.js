axios.interceptors.response.use(function (response) {
  console.log(response)
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

let model = {
  data: {
    number: 0,
    name: ''
  },
  fetch (id) {
    return axios.get(`/books/${id}`).then(response => {
      this.data = response.data
    })
  },
  update (newData) {
    let id = this.data.id
    return axios.put(`/books/${id}`, newData).then(({ data }) => {
      this.data = data
    })
  }
}

let view = {
  el: '#app',
  template: `
<div>
  书名：《__name__》，
  数量：__number__
</div>
<div class="actions">
  <button id="increaseByOne">加1</button>
  <button id="decreaseByOne">减1</button>
  <button id="square">平方</button>
  <button id="cube">立方</button>
  <button id="reset">归零</button>
</div>
  `,
  render (data) {
    let html = this.template
      .replace('__name__', data.name)
      .replace('__number__', data.number)
    console.log(data)
    $(this.el).html(html)
  }
}

var controller = {
  init ({ view, model }) {
    this.view = view
    this.model = model
    this.view.render(this.model.data)
    this.bindEvents()
    console.log(1)
    this.fetchModel()
    console.log(2)
  },
  events: [
    { type: 'click', selector: '#increaseByOne', fnName: 'add' },
    { type: 'click', selector: '#decreaseByOne', fnName: 'minus' },
    { type: 'click', selector: '#square', fnName: 'square' },
    { type: 'click', selector: '#cube', fnName: 'cube' }
  ],
  bindEvents () {
    this.events.map(event => {
      $(this.view.el).on(
        event.type,
        event.selector,
        this[event.fnName].bind(this)
      )
    })
  },
  add () {
    let newData = { number: this.model.data.number + 1 }
    this.updateModel(newData)
  },
  minus () {
    let newData = { number: this.model.data.number - 1 }
    this.updateModel(newData)
  },
  square () {
    let newData = { number: Math.pow(this.model.data.number, 2) }
    this.updateModel(newData)
  },
  cube () {
    let newData = { number: Math.pow(this.model.data.number, 3) }
    this.updateModel(newData)
  },
  fetchModel () {
    this.model.fetch(1).then(() => {
      this.view.render(this.model.data)
    })
  },
  updateModel (newData) {
    this.model.update(newData).then(() => {
      this.view.render(this.model.data)
    })
  }
}

controller.init({ view, model })
