const promiseAll = (arr) => {
  const res = []
  let count = 0
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]).then(data => {
        res[i] = data
        if (++count === arr.length) {
          resolve(res)
        }
      }).catch(err => {
        reject(err)
      })
    }
  })
}

const testFn = async (promiseList) => {
  
  const res = await promiseAll(promiseList);
 
  console.log(res)
}

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

// testFn([1, 2, 3])
// testFn([1, Promise.resolve(2), 3])
// testFn([1, Promise.resolve(2)])
// testFn([1, Promise.reject(2)])



const allPromise = (arr) => {
  const res = []
  let count = 0
  return new Promise((resolve, reject) => {
    arr.forEach((fn, index) => {
      fn.then(data => {
        res[index] = data
        if (++count === arr.length) {
          resolve(res)
        }
      }, err => {
        reject(err)
      })
    })
  })
}

const testFn2 = async (promiseList) => {
  
  const res = await allPromise(promiseList);
 
  console.log(res)
}

testFn2([
  new Promise((res, reject) => {
  setTimeout(() => {
    reject(33333)
  }, 3000)
}),
  new Promise((res, reject) => {
  setTimeout(() => {
    res(222222)
  }, 1000)
}),
  new Promise(res => {
  setTimeout(() => {
    res(11111)
  }, 10)
})])

