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