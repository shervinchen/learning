function a () {
  console.log('a1')
  b()
  console.log('a2')
  return 'a'
}

function b () {
  console.log('b1')
  c()
  console.log('b2')
  return 'b'
}

function c () {
  console.log('c')
  return 'c'
}

a()
console.log('end')
