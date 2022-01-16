class Dialog {
  constructor (options) {
    this.options = options
    this.init()
  }
  get template () {
    let { title, content } = this.options
    return `
      <div class="frankDialog">
        <div class="frankDialog-wrapper">
          <header class="frankDialog-header">${title}</header>
          <main class="frankDialog-main">${content}</main>
          <footer class="frankDialog-footer"></footer>
        </div>
      </div>
    `
  }
  generateButtons () {
    let { buttons } = this.options
    return buttons.map(buttonOption => {
      let $b = $('<button></button>')
      $b.text(buttonOption.text)
      $b.on('click', buttonOption.action)
      return $b
    })
  }
  init () {
    var $dialog = $(this.template)
    $dialog.find('footer').append(this.generateButtons())
    $dialog.addClass(this.options.className)
    this.$dialog = $dialog
  }
  open () {
    this.$dialog.appendTo('body')
  }
  close () {
    this.$dialog.detach()
  }
}

////////////////////

x.onclick = function () {
  var dialog = new Dialog({
    title: '标题',
    content: '<b>欢迎</b>',
    className: 'userDialog',
    buttons: [
      {
        text: '确定',
        action: function () {
          setTimeout(() => {
            dialog.close()
          }, 3000)
        }
      },
      {
        text: '取消',
        action: function () {
          dialog.close()
        }
      }
    ]
  })
  dialog.open()
}
