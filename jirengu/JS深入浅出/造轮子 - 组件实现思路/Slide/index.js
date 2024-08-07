class Slide {
  constructor (options) {
    this.options = options
    this.$element = $(this.options.element)
    this.$element.addClass('frankSlides')
    this.timer = undefined
    this.initHtml()
    this.bindEvents()
    this.go(0)
    if (this.options.autoPlay) {
      this.play()
    }
  }
  initHtml () {
    this.width = this.$element
      .children('ol')
      .children('li')
      .width()
    this.$element.width(this.width)
    this.$prev = $('<button class="frankSlides-prev">上一张</button>')

    this.$element.append(this.$prev)
    this.$next = $('<button class="frankSlides-next">下一张</button>')

    this.$element.append(this.$next)
  }
  bindEvents () {
    this.$prev.on('click', () => this.prev())
    this.$next.on('click', () => this.next())
    this.$element
      .on('mouseenter', () => {
        this.stop()
      })
      .on('mouseleave', () => {
        this.play()
      })
  }
  go (index) {
    let $ol = this.$element.children('ol')
    let $items = $ol.children('li')
    if (index >= $items.length) {
      index = 0
    } else if (index < 0) {
      index = $items.length - 1
    }
    $ol.css({
      transform: `translateX(${-index * this.width}px)`
    })
    this.current = index
  }
  next () {
    this.go(this.current + 1)
  }
  prev () {
    this.go(this.current - 1)
  }
  play () {
    this.timer = setInterval(() => {
      this.go(this.current + 1)
    }, 2000)
    console.log('this.timer')

    console.log(this)
  }
  stop () {
    console.log(this)
    window.clearInterval(this.timer)
  }
}
var slide = new Slide({
  element: '.slides',
  autoPlay: false,
  controls: false,
  pager: false
})
