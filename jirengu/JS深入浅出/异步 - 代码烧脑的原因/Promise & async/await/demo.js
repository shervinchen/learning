axios({
  url: '.',
  async: true
})
  .then(
    x => {
      console.log('success')
      alert(xxx)
    },
    y => {
      console.log('failed')
    }
  )
  .then(
    x => {
      console.log('success2')
    },
    y => {
      console.log('failed2')
    }
  )

function buyFruit () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('apple')
    }, 10 * 1000)
  })
}

buyFruit().then(
  () => {
    console.log('buy success')
  },
  () => {
    console.log('buy failed')
  }
)

async function fn () {
  const result = await buyFruit()
  return result
}

const s = await fn()
console.log(2)
