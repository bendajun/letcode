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
console.log('ces')
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