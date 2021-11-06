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

class BookCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      book: { id: null, name: '', number: 0 },
      n: 1
    }
  }
  componentDidMount () {
    model.fetch(1).then(response => {
      this.setState({
        book: response.data
      })
    })
  }
  render () {
    return (
      <div>
        <div>
          书名：《{this.state.book.name}》， 数量：{this.state.book.number}
        </div>
        <div>
          <input value={this.state.n} onChange={this.changeN} />
        </div>
        <div className='actions'>
          <button onClick={this.add.bind(this)}>加N</button>
          <button onClick={this.minus.bind(this)}>减N</button>
          <button onClick={this.square.bind(this)}>平方</button>
          <button onClick={this.cube.bind(this)}>立方</button>
          <button onClick={this.reset.bind(this)}>归零</button>
        </div>
      </div>
    )
  }
  changeN (e) {
    console.log(e)
    this.setState({
      n: this.state.n
    })
  }
  add () {
    const newData = {
      number: this.state.book.number + this.state.n
    }
    model.update(this.state.book.id, newData).then(response => {
      this.setState({ book: response.data })
    })
  }
  minus () {
    const newData = {
      number: this.state.book.number - this.state.n
    }
    model.update(this.state.book.id, newData).then(response => {
      this.setState({ book: response.data })
    })
  }
  square () {
    const newData = {
      number: Math.pow(this.state.book.number, 2)
    }
    model.update(this.state.book.id, newData).then(response => {
      this.setState({ book: response.data })
    })
  }
  cube () {
    const newData = {
      number: Math.pow(this.state.book.number, 3)
    }
    model.update(this.state.book.id, newData).then(response => {
      this.setState({ book: response.data })
    })
  }
  reset () {
    const newData = {
      number: 0
    }
    model.update(this.state.book.id, newData).then(response => {
      this.setState({ book: response.data })
    })
  }
}

var view = <BookCard />

ReactDOM.render(view, document.getElementById('app'))
