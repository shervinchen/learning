/**
 * 0: ['a', 'abc']
 * 1: ['ok']
 * 2: ['hello']
 * 3: undefined
 *
 * [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
 */

class HashTable {
  constructor (length = 10000) {
    this.slots = Array(length)
  }

  hash (v) {
    const value = [...v.toString()]
      .map(char => char.charCodeAt(0))
      .reduce((v1, v2) => v1 + v2)
    return value % this.slots.length
  }

  add (value) {
    const key = this.hash(value)
    if (this.slots[key]) {
      if (!this.slots[key].includes(value)) this.slots[key].push(value)
    } else {
      this.slots[key] = [value]
    }
  }

  remove (value) {
    const key = this.hash(value)
    if (this.slots[key] && this.slots[key].includes(value)) {
      this.slots[key] = this.slots[key].filter(v => v !== value)
      return true
    }
    return false
  }

  search (value) {
    const key = this.hash(value)
    if (this.slots[key] && this.slots[key].includes(value)) return value
    return false
  }

  show () {
    console.log(this.slots)
  }
}

const hashtable = new HashTable()

hashtable.add('hello')
hashtable.add('a')
hashtable.add('ab')
hashtable.add('ba')
hashtable.show()
hashtable.remove('a')
hashtable.search('ab')
