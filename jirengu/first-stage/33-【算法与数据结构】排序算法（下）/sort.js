let sort = numbers => {
  if (numbers.length > 2) {
    let index = minIndex(numbers)
    let min = numbers[index]
    numbers.splice(index, 1)
    return [min].concat(sort(numbers))
  } else {
    return numbers[0] < numbers[1] ? numbers : numbers.reverse()
  }
}

let minIndex = numbers => {
  let index = 0
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[index]) {
      index = i
    }
  }
  return index
}

let sort2 = numbers => {
  for (let i = 0; i < numbers.length - 1; i++) {
    let index = minIndex(numbers)
    // index 是当前最小数的下标
    // index 对应的数应该放到 i 处
    swap(numbers, index, i) // swap 还没实现
    // index、i 都是 index 的意思，建议 i 改名
  }
}

let swap = (array, i, j) => {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
swap(numbers, 1, 2)

// 选择排序最终代码

let sort3 = numbers => {
  for (let i = 0; i < numbers.length - 1; i++) {
    console.log(`----`) //这个log很精髓
    console.log(`i: ${i}`)
    let index = minIndex(numbers.slice(i)) + i
    console.log(`index: ${index}`)
    console.log(`min: ${numbers[index]}`)
    if (index !== i) {
      swap(numbers, index, i)
      console.log(`swap ${index}: ${i}`)
      console.log(numbers)
    }
  }
  return numbers
}

// let swap = (array, i, j) => {
//   let temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// };
// let minIndex = numbers => {
//   let index = 0;
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < numbers[index]) {
//       index = i;
//     }
//   }
//   return index;
// };

// 快速排序

let quickSort = arr => {
  if (arr.length <= 1) {
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

// 归并排序
let mergeSort = arr => {
  let k = arr.length
  if (k === 1) {
    return arr
  }
  let left = arr.slice(0, Math.floor(k / 2))
  let right = arr.slice(Math.floor(k / 2))
  return merge(mergeSort(left), mergeSort(right))
}
let merge = (a, b) => {
  if (a.length === 0) return b
  if (b.length === 0) return a
  return a[0] > b[0]
    ? [b[0]].concat(merge(a, b.slice(1)))
    : [a[0]].concat(merge(a.slice(1), b))
}

// 计数排序
let countSort = arr => {
  let hashTable = {},
    max = 0,
    result = []
  for (let i = 0; i < arr.length; i++) {
    // 遍历数组
    if (!(arr[i] in hashTable)) {
      // 视频中这一行写错
      hashTable[arr[i]] = 1
    } else {
      hashTable[arr[i]] += 1
    }
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  for (let j = 0; j <= max; j++) {
    // 遍历哈希表
    if (j in hashTable) {
      for (let i = 0; i < hashTable[j]; i++) {
        result.push(j)
      }
    }
  }
  return result
}
