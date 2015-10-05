/**
 * Created by xm_file on 15/10/5.
 */
import {sum, square, variable, MyClass} from './import';

console.log(square(5));// 25

var cred = {
    name: 'Ritesh Kumar',
    enrollmentNo: 11115078
}
var x = new MyClass(cred);

console.log(x.getName());//Ritesh Kumar
console.log("test grunt command");