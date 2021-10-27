class Suggestion {
  constructor (options) {
    this.options = options
    this.$input = $(options.input)
    this.$input.wrap('<div class="frankSuggestion"></div>')
    this.$wrapper = this.$input.parent()

    this.$ol = $('<ol class="frankSuggestion-list"></ol>')
    this.$input.after(this.$ol)
    this.$loading = $('<div class="frankSuggestion-loading"></div>')
    this.$loading.html(this.options.loadingTemplate)
    this.$empty = $('<div class="frankSuggestion-empty"></div>')
    this.$empty.html(this.options.emptyTemplate)

    this.$ol.after(this.$loading)
    this.$ol.after(this.$empty)
    this.bindEvents()
  }
  bindEvents () {
    //  let timerId
    let lazySearch = _.debounce(this.search.bind(this), 300)
    this.$input.on('input', e => {
      //      if (timerId) {
      //        window.clearTimeout(timerId)
      //      }
      //      timerId = setTimeout(() => {
      //         this.search(e.currentTarget.value)
      //         timerId = undefined
      //      }, 1000)
      lazySearch(e.currentTarget.value)
    })

    this.$ol.on('click', 'li', e => {
      this.$input.val($(e.currentTarget).text())
    })
  }
  search (keyword) {
    this.$wrapper.addClass('loading')
    this.$wrapper.removeClass('empty')
    this.options.search(keyword, array => {
      this.$ol.empty()
      this.$wrapper.removeClass('loading')

      if (!array || array.length === 0) {
        this.$wrapper.addClass('empty')
        return
      }

      array.forEach(text => {
        this.$ol.append($('<li></li>').text(text))
      })
    })
  }
}

////////////////

var s = new Suggestion({
  input: 'input',
  search: function (text, callback) {
    if (text === '0') {
      return setTimeout(() => callback([]), 500)
    }
    let array = []
    for (let i = 0; i < 5; i++) {
      var n = parseInt(Math.random() * 100, 10)
      array.push(text + n)
    }
    setTimeout(() => callback(array), 500)
  },
  loadingTemplate: '加载中',
  emptyTemplate: '找不到啊找不到'
})
