/**
 * Created by xm_file on 15/10/5.
 */
import {sum, square, variable, PI, MyClass} from './import';

console.log(square(5));// 25

var cred = {
    name: 'Ritesh Kumar',
    enrollmentNo: 11115078
}
var x = new MyClass(cred);

console.log(x.getName());//Ritesh Kumar
console.log(PI);
console.log("test grunt command");
var s = 'hello';
for (var i = 0; i < s.length; i++){
    console.log(s[i]);
}
console.log(i); // 5
var [foo] = [];
var [bar, tmp] = [1];
console.log(foo,bar,tmp);

import {
    functionExt,objectExt
}
from './import';
functionExt.paramTwo(undefined, null);
console.log('length of functionExt.paramTwo:' + functionExt.paramTwo.length);
var x = 3,
    y = 3;
functionExt.paramTwo();
console.log('param of functionExt.paramException(1):' + functionExt.paramException(1));
// console.log('param of functionExt.paramException():' + functionExt.paramException());

functionExt.paramFunction(function() {
    console.log('callback');
});

functionExt.rest(1, 2, 3); //2,3

console.log(functionExt.rest.length);

console.log(functionExt.spread([2, 3, 4]));

var arry1 = [1, 2, 3];
var arry2 = [4, 5, 6];
console.log(functionExt.spreadPush(arry1, arry2)); //[4, 5, 6, 1, 2, 3]

console.log([...
    "hello"
]); //["hello"]

console.log(functionExt.nameFunction.name); //nameFunction

//箭头函数
functionExt.arrowParam(1); //1

functionExt.arrowParams(1, 2); //3

console.log(functionExt.arrowParamsObject(1, 2));

console.log(functionExt.arrowArrayIncre([1, 2, 3]));

//函数绑定
var person = {
    name: 'ES6'
};

var sayHello = function() {
    console.log('hello,' + this.name);
};
var sayByebye = function() {
    console.log('byebye,' + this.name);
};
// person::sayHello()::sayByebye();


//对象扩展

console.log(objectExt.getPerson());

let propKey = 'name';

objectExt.book['print_' + propKey](); //ES6
console.log(objectExt.nameObject.fullName.name); //fullName
console.log(objectExt.nameObject.getFullName.name); //

var target = { a: 1 };
var source1 = { b: 2 };
var source2 = { c: 3 };
Object.assign(target, source1, source2);
console.log(target.b); //2
var source3 = {};
source3.prototype.d = 5;
Object.assign(target, source3);
console.log(target.d); // Cannot set property 'd' of undefined


//Proxy和Reflect
var extObject = {
  get foo() { return this.bar(); },
  bar: function() {
    console.log('origin bar');
  }
}
var reflectReceiver = {
    bar: function(){
        console.log('reflect bar');
    }
};
// Reflect.get(extObject, "foo", reflectReceiver);
// extObject.foo(); // reflect bar
