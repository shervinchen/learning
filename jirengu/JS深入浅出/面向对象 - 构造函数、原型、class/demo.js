// function Animal () {}
// Animal.prototype.行动 = function () {}

// function Human (options) {
//   Animal.call(options)
//   this.name = options.name
//   this.birthday = options.birthday
// }
// Human.prototype = Object.create(Animal.prototype)
// Human.prototype.物种 = '人类'
// Human.prototype.使用工具 = function () {}
// const human = new Human({ name: 'Frank', birthday: '2000-10-10' })

// function Asian (options) {
//   this.city = options.city
// }
// Asian.prototype = Object.create(Human.prototype)
// Asian.prototype.肤色 = '黄色'

// const asian = new Asian({ city: '北京', name: 'Frank', birthday: '2000-10-10' })

class Animal {
  行动 () {}
}

class Human extends Animal {
  constructor (options) {
    super(options)
    this.name = options.name
    this.birthday = options.birthday
    this.物种 = '人类'
  }

  使用工具 = function () {}
}
const human = new Human({ name: 'Frank', birthday: '2000-10-10' })

class Asian extends Human {
  constructor (options) {
    super(options)
    this.city = options.city
    this.肤色 = '黄色'
  }
}
const asian = new Asian({ city: '北京', name: 'Frank', birthday: '2000-10-10' })
