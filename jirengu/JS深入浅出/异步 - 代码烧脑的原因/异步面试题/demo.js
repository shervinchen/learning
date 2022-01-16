document.getElementsByTagNames('img')[0].width // 宽度为 0
console.log('done')

document.getElementsByTagNames('img')[0].onload = function () {
  console.log(this.width) // 宽度不为 0
  console.log('real done')
}
console.log('done')

let liList = document.querySelectorAll('li')
for (var i = 0; i < liList.length; i++) {
  liList[i].onclick = function () {
    console.log(i)
  }
}

let request = $.ajax({
  url: '.',
  async: false
})
console.log(request.responseText)
$.ajax({
  url: '/',
  async: true,
  success: function (responseText) {
    console.log(responseText)
  }
})
