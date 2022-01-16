!(function () {
  let slide = {
    currentIndex: 0,
    $slides: $('.slides'),
    timerId: undefined,
    events: [
      {
        el: '#buttonNext',
        event: 'click',
        fn: 'playNext'
      },
      {
        el: '#buttonPrevious',
        event: 'click',
        fn: 'playPrevious'
      },
      {
        el: '.slidesWindow',
        event: 'mouseenter',
        fn: 'clearTimer'
      },
      {
        el: '.slidesWindow',
        event: 'mouseleave',
        fn: 'resetTimer'
      }
    ],
    init () {
      this.bindEvents()
      this.timerId = this.autoPlay()
    },
    playNext: () => {
      this.playSlide(this.currentIndex + 1)
    },
    playPrevious: () => {
      this.playSlide(this.currentIndex - 1)
    },
    playSlide (index) {
      index = fixIndex(index)
      this.$slides.css({
        transform: `translateX(${-400 * index}px)`
      })

      this.currentIndex = index
      return index
    },
    clearTimer: () => {
      window.clearInterval(this.timerId)
    },
    resetTimer: () => {
      this.timerId = this.autoPlay()
    },
    bindEvents () {
      this.events.forEach(eventObject => {
        $(eventObject.el).on(eventObject.event, () => {
          this[eventObject.fn].call(this)
        })
      })
    },

    fixIndex (index) {
      if (index < 0) {
        index = 4
      } else if (index > 4) {
        index = 0
      }
      return index
    },
    autoPlay () {
      //this === slide
      return setInterval(() => {
        this.playSlide(this.currentIndex + 1)
      }, 3000)
    }
  }

  slide.init() // slide.init.call(slide)
})()
