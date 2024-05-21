const promiseRace = (arr) => {
  return new Promise((resolve, reject) => {
    arr.forEach(item => {
      Promise.resolve(item).then(data => resolve(data)).catch(err => reject(err))
    })
  })
}

const testFn = async (promiseList) => {
  console.log('我执行了')
  const res = await promiseRace(promiseList);
  console.log('我执行了2')
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
  }, 2000)
}),
  new Promise(res => {
  setTimeout(() => {
    res(3)
  }, 1000)
})])

const racePromise = (arr) => {
  return new Promise((resolve, reject) => {
    arr.forEach(fn => fn.then(data => resolve(data), err => reject(err)))
  })
}

const testFn2 = async (promiseList) => {
  console.log('我执行了')
  const res = await racePromise(promiseList);
  console.log('我执行了2')
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
  }, 2000)
}),
  new Promise(res => {
  setTimeout(() => {
    res(3)
  }, 1000)
})])
