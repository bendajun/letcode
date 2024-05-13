function sum(...args1) {
  const f = (...args2) => sum(...args1, ...args2)
  f.valueOf = () => args1.reduce((x, y) => x + y, 0)
  return f
}

sum(1, 2, 3).valueOf(); //6
sum(2, 3)(2).valueOf(); //7
sum(1)(2)(3)(4).valueOf(); //10
sum(2)(4, 1)(2).valueOf(); //9
sum(1)(2)(3)(4)(5)(6).valueOf(); // 21

console.log(sum(1, 2, 3).valueOf())
console.log(sum(2, 3)(2).valueOf())
console.log(sum(1)(2)(3)(4).valueOf())
console.log(sum(2)(4, 1)(2).valueOf())
console.log(sum(1)(2)(3)(4)(5)(6).valueOf())