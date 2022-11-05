/* 使用Object( )构造函数 */
let obj = new Object();
obj.high = '175';
obj.age = '20';
console.log(obj);
/* 使用对象字面量 */
let obj = {
    high: '175',
    age: '20'
}
console.log(obj);
/* 使用构造函数创建一个对象 */
function Person(name, age) {
    this.name = name
    this.age  = age
    this.sayname = () => {
      console.log(this.name)
    }
  }
  const obj1 = new Person('1', 20)
  const obj2 = new Person('2', 20)
  console.log(obj1);
  console.log(obj2);