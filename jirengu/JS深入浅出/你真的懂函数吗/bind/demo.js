const view = {
  element: $('#div1'),
  bindEvents: function () {
    this.element.onclick = this.onClick.bind(this)
  },
  onClick: function () {
    this.element.addClass('active')
  }
}
