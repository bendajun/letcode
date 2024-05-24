const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor (fn) {
    if (typeof fn !== 'function') {
      throw new Error('an argument is not a function')
    }
    this.state = PENDING
    this.value = undefined
    this.resolveCallbacks = []
    this.rejectCallbacks = []

    const resolve = (value) => {
      if (this.state !== PENDING) return
      this.state = FULFILLED
      this.value = value
      
      this.resolveCallbacks.forEach(fn => fn())
    }

    const reject = (reason) => {
      if (this.state !== PENDING) return
      this.state = REJECTED
      this.value = reason
      this.rejectCallbacks.forEach(fn => fn())
    }

    try {
      fn(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then (onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        const val = onFulfilled(this.value)
        if (isPromise(val)) {
          val.then(y => resolve(y), r => reject(r))
        } else {
          resolve(val)
        }
      }
  
      if (this.state === REJECTED) {
        const reason = onRejected(this.value)
        if (isPromise(reason)) {
          reason.then(y => resolve(y), r => reject(r))
        } else {
          reject(reason)
        }
      }
  
      if (this.state === PENDING) {
        this.resolveCallbacks.push(() => {
          const val = onFulfilled(this.value)
          if (isPromise(val)) {
            val.then(y => resolve(y), r => reject(r))
          } else {
            resolve(val)
          }
        })
        this.rejectCallbacks.push(() => {
          const reason = onRejected(this.value)
          if (isPromise(reason)) {
            reason.then(y => resolve(y), r => reject(r))
          } else {
            reject(reason)
          }
        })
      }
    })
  }
}


/* const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is data')
  }, 1000)
}) */

/* p1.then(data => {
  console.log(data, 1)
}, err => {
  console.log(err, 9)
})

p1.then(data => {
  console.log(data, 2)
}, err => {
  console.log(err, 9)
})

p1.then(data => {
  console.log(data, 3)
}, err => {
  console.log(err, 9)
}) */


/* p1.then(data => {
  console.log(data, 1)
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve('then1 return')
    }, 1000)
  })
}, err => {
  console.log(err, 'err1')
})
.then(data => {
  console.log(data, 2)
  return 'then2 return'
}, err => {
  console.log(err, 'err2')
})
.then(data => {
  console.log(data, 3)
}, err => {
  console.log(err, 'err3')
})
.then(data => {
  console.log(data, 4)
}, err => {
  console.log(err, 'err4')
}) */

/**
 * 判断函数是否为promise
 * @param {Object} obj
 */
function isPromise(obj) {
  return !!(obj && typeof obj === "object" && typeof obj.then === "function");
}



console.log('start')

Promise.resolve().then(() => {
  console.log('pro')
})

new Promise((resolve) => {
  console.log('pro2')
  resolve()
  console.log('pro3')
}).then(() => {
  console.log('pro4')
})

new Promise(async (resolve) => {
  console.log('pro5')
  await 1
  console.log('pro6')
})
process.nextTick(() => {
  console.log('nextTick1')
})

console.log('end')