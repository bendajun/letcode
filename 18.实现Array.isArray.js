const ArrayIsArray = (arr) => Object.prototype.toString.call(arr) === '[object Array]'

const ArrayIsArray2 = (arr) => arr instanceof Array

/**
  toString为Object的原型方法，而Array 、Function等类型作为Object的实例，都重写了toString方法。

  不同的对象类型调用toString方法时，根据原型链的知识，调用的是对应的重写之后的toString方法（Function类型返回内容为函数体的字符串，Array类型返回元素组成的字符串…），
  而不会去调用Object上原型toString方法（返回对象的具体类型），

  所以采用obj.toString()不能得到其对象类型，只能将obj转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用Object上原型toString方法。

  Object对象本身就有一个toString()方法，返回的是当前对象的字符串形式，原型上的toString()返回的才是我们真正需要的包含对象数据类型的字符串。

  为什么需要call？
    由于Object.prototype.toString()本身允许被修改，像Array、Boolean、Number的toString就被重写过，
    所以需要调用Object.prototype.toString.call(arg)来判断arg的类型，call将arg的上下文指向Object，所以arg执行了Object的toString方法。

 */