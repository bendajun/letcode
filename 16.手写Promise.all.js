const promiseAll = (arr) => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    Promise.resolve(arr[i]).then(data => {
      res[i] = data
      if (res.length === arr.length) {
        Promise.resolve(res)
      }
    }).catch(err => {
      Promise.reject(err)
    })
  }
}

const testFn = async (promiseList) => {
  console.log('我执行了')
  const res = await Promise.all(promiseList);
  console.log('我执行了2')
  console.log(res)
}

// testFn([1, 2, 3])
// testFn([1, Promise.resolve(2), 3])
// testFn([1, Promise.resolve(2)])
// testFn([1, Promise.reject(2)])

testFn([
  new Promise(res => {
  setTimeout(() => {
    res(1)
  }, 3000)
}),
  new Promise(res => {
  setTimeout(() => {
    res(2)
  }, 1000)
}),
  new Promise(res => {
  setTimeout(() => {
    res(3)
  }, 10)
})])

