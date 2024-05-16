
// 沙箱构造函数
class ProxySandbox {
  constructor() {
    this.isRuning = false;
    const fakeWindow = Object.create({});
    this.proxy = new Proxy(fakeWindow, {
      set: (target, prop, value) => {
        // 赋值时，仅当沙箱激活时才可赋值
        if (this.isRuning) {
          target[prop] = value;
        }
      },
      get: (target, prop) => {
        return prop in target ? target[prop] : window[prop];
      },
    });
  }
  active() {
    this.isRuning = true;
  }
  inactive() {
    this.isRuning = false;
  }
}
