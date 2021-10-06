function f () {
  console.log(this)
  console.log(arguments)
}
f.call() // window
f.call({ name: 'frank' }) // {name: 'frank'}, []
f.call({ name: 'frank' }, 1) // {name: 'frank'}, [1]
f.call({ name: 'frank' }, 1, 2) // {name: 'frank'}, [1,2]
