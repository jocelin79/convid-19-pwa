const reduce = (arr, func, initial) => {
  let acc = initial;
  arr.forEach(item => {acc = func(acc, item)})
  return console.log(acc)
}

console.log(reduce([1,2,3], (acc, item) => acc + item, 0))