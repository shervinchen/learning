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
  console.log('response')
  console.log(response)
  return response
})

class Model {
  constructor (options) {
    this.resource = options.resource
    this.baseUrl = options.baseUrl || '/'
  }
  fetch (id) {
    return axios.get(this.baseUrl + this.resource + 's/' + id)
  }
  create (data) {
    return axios.post(this.baseUrl + this.resource + 's', data)
  }
  destroy (id) {
    return axios.delete(this.baseUrl + this.resource + 's/' + id)
  }
  update (id, newData) {
    return axios.put(this.baseUrl + this.resource + 's/' + id, newData)
  }
}

var model = new Model({
  resource: 'book'
})

var view = new Vue({
  el: '#app',
  data: {
    book: {
      id: null,
      name: '未命名',
      number: 0
    },
    n: 1
  },
  template: `
<div>
<div>
  书名：《{{book.name}}》，
  数量：{{book.number}}
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
  created () {
    model.fetch(1).then(({ data }) => {
      view.book = data
    })
  },
  methods: {
    add () {
      let newData = {
        number: this.book.number + (this.n - 0)
      }
      this.updateModel(newData)
    },
    minus () {
      let newData = {
        number: this.book.number - (this.n - 0)
      }
      this.updateModel(newData)
    },
    square () {
      let newData = {
        number: Math.pow(this.book.number, 2)
      }
      this.updateModel(newData)
    },
    cube () {
      let newData = {
        number: Math.pow(this.book.number, 3)
      }
      this.updateModel(newData)
    },
    reset () {
      this.updateModel({
        number: 0
      })
    },
    updateModel (newData) {
      model.update(this.book.id, newData).then(({ data }) => {
        console.log(data)
        this.book = data
      })
    }
  }
})
