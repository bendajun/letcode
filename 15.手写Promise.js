const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {

  constructor(fn) {
    if (typeof fn !== 'function') {
      throw Error('an argument is not a function')
    }

    this._state = PENDING
    this._value = undefined
    this._handles = []

    try {
      fn(this._resolve.bind(this), this._reject.bind(this))
    } catch (e) {
      this._reject(e)
    }
  }

  _resolve(val) {
    this._changeState(FULFILLED, val)
  }

  _reject(val) {
    this._changeState(REJECTED, val)
  }

  _changeState(state, value) {
    if (this._state !== PENDING) return
    this._state = state
    this._value = value
  }

  _runHandles() {
    if (this._state === PENDING) return
    while (this._handles[0]) {
      this._runOneHandles(this._handles[0])
      this._handles.shift(); // 每次执行完都要弹出去
    }
  }

  _runOneHandles({ executor, state, resolve, reject }) {
    if (state !== this._state) return;
    if (typeof executor !== "function") {
      state === FULFILLED ? resolve(this._value) : reject(this._value);
      return;
    }
    try {
      const resp = executor(this._value);
      if (isPromise(resp)) {
        resp.then(resolve, reject);
      } else {
        resolve(resp);
      }
    } catch (reason) {
      reject(reason);
    }
  }

  /**
   * 向任务队列里面添加一项
   * @param {Function} executor 需要执行的函数
   * @param {String} state 当前这个函数是在什么状态下执行
   * @param {Function} resolve 设置当前promise为成功
   * @param {Function} reject 设置当前Promise为失败
   */
  _addOneHandles(executor, state, resolve, reject) {
    this._handles.push({
      executor,
      state,
      resolve,
      reject,
    });
  }

  // 成功之后调用 onFulfilled， 失败之后调用 onRejected
  then(onFulfilled, onRejected) {

    return new MyPromise((resolve, reject) => {
      this._addOneHandles(onFulfilled, FULFILLED, resolve, reject);
      this._addOneHandles(onRejected, REJECTED, resolve, reject);
      this._runHandles()
    });
  }
}

const p1 = new MyPromise((resolve, reject) => {
  resolve(333)
})


console.log(p1, 'p1')






/**
 * 判断函数是否为promise
 * @param {Object} obj
 */
function isPromise(obj) {
  return !!(obj && typeof obj === "object" && typeof obj.then === "function");
}




