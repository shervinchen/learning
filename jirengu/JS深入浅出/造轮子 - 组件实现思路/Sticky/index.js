class Sticky {
  constructor (selector, n) {
    this.elements = $(selector)
    this.offset = n || 0
    this.addPlaceholder()
    this.cacheOffsets()
    this.listenToScroll()
  }
  addPlaceholder () {
    this.elements.each((index, element) => {
      $(element).wrap('<div class="stickyPlaceholder"></div>')
      $(element)
        .parent()
        .height($(element).height())
    })
  }
  cacheOffsets () {
    this.offsets = []
    this.elements.each((index, element) => {
      this.offsets[index] = $(element).offset()
    })
  }
  listenToScroll () {
    $(window).on('scroll', () => {
      var scrollY = window.scrollY
      this.elements.each((index, element) => {
        var $element = $(element)
        if (scrollY + this.offset > this.offsets[index].top) {
          $element.addClass('sticky').css({ top: this.offset })
        } else {
          $element.removeClass('sticky')
        }
      })
    })
  }
}

new Sticky('#topbar')
new Sticky('button', 60)

// var sticky = new Sticky(selector, n)

// var topbarOffset = $('#topbar').offset()
// var buttonOffset = $('button').offset()
// $(window).on('scroll', function() {

//   var scrollY = window.scrollY

//   if (scrollY + 0 > topbarOffset.top) {
//     $('#topbar').addClass('sticky')
//   } else {
//     $('#topbar').removeClass('sticky')

//   }

//   if(scrollY + 60 > buttonOffset.top){
//     $('button').addClass('sticky')
//   }else{
//     $('button').removeClass('sticky')

//   }

// })
