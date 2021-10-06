var person = {
  name: 'frank',
  sayHi: function (person) {
    console.log('Hi, I am' + person.name)
  },
  sayBye: function (person) {
    console.log('Bye, I am' + person.name)
  },
  say: function (person, word) {
    console.log(word + ', I am' + person.name)
  }
}
person.sayHi(person)
person.sayBye(person)
person.say(person, 'How are you')

// 能不能变成
person.sayHi()
person.sayBye()
person.say('How are you')

// 那么源代码就要改了
var person = {
  name: 'frank',
  sayHi: function () {
    console.log('Hi, I am' + this.name)
  },
  sayBye: function () {
    console.log('Bye, I am' + this.name)
  },
  say: function (word) {
    console.log(word + ', I am' + this.name)
  }
}
// 如果你不想吃语法糖
person.sayHi.call(person)
person.sayBye.call(person)
person.say.call(person, 'How are you')

// 还是回到那句话：this 是 call 的第一个参数
// this 是参数，所以，只有在调用的时候才能确定
person.sayHi.call({ name: 'haha' }) // 这时 sayHi 里面的 this 就不是 person 了
// this 真的很不靠谱

// 新手疑惑的两种写法
var fn = person.sayHi
person.sayHi() // this === person
fn() // this === window
