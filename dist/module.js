(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by xm_file on 15/10/5.
 */
'use strict';

exports.__esModule = true;

var _objectExt$book;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var sum = function sum(a) {
    var b = arguments.length <= 1 || arguments[1] === undefined ? 6 : arguments[1];
    return a + b;
};
var square = function square(b) {
    return b * b;
};
var variable = 8;

var PI = 3.14;

var MyClass = (function () {
    function MyClass(credentials) {
        _classCallCheck(this, MyClass);

        this.name = credentials.name;
        this.enrollmentNo = credentials.enrollmentNo;
    }

    MyClass.prototype.getName = function getName() {
        return this.name;
    };

    return MyClass;
})();

exports.sum = sum;
exports.square = square;
exports.variable = variable;
exports.PI = PI;
exports.MyClass = MyClass;

var functionExt = {
    paramTwo: function paramTwo() {
        var x = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
        var y = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

        console.log('x:' + x + ',y:' + y);
    },
    paramOne: function paramOne(x) {
        var y = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

        console.log('x:' + x + ',y:' + y);
    },
    paramError: function paramError(x, y) {
        if (x === undefined) x = 1;

        return x + y;
    },
    paramException: function paramException() {
        var mustBeProvided = arguments.length <= 0 || arguments[0] === undefined ? (function () {
            throw new Error('Missing parameter~~');
        })() : arguments[0];

        return mustBeProvided;
    },
    paramFunction: function paramFunction() {
        var callback = arguments.length <= 0 || arguments[0] === undefined ? function () {
            console.log('default callback');
        } : arguments[0];

        callback();
    },
    rest: function rest(value1) {
        for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            values[_key - 1] = arguments[_key];
        }

        values.forEach(function (value) {
            console.log(value);
        });
    },
    spread: function spread(argsArry) {
        function sum(x, y, z) {
            return x + y + z;
        }
        return sum.apply(undefined, argsArry);
    },
    spreadPush: function spreadPush(argsArry_s, argsArry_d) {
        argsArry_d.push.apply(argsArry_d, argsArry_s);
        return [].concat(argsArry_d);
    },
    spreadString: function spreadString(s) {
        return [].concat(s);
    },
    nameFunction: function nameFunction() {}
};
functionExt.arrowParam = function (a) {
    return console.log(a);
};
functionExt.arrowParams = function (a, b) {
    return console.log(a + b);
};
functionExt.arrowParamsObject = function (a, b) {
    return {
        a: a, b: b
    };
};
functionExt.arrowArrayIncre = function (argsArry) {
    argsArry.map(function (x) {
        return x + 1;
    });
    return argsArry;
};

var objectExt = {};

objectExt.getPerson = function () {
    var name = 'ES6';
    var age = 25;
    var sayHello = function sayHello() {
        console.log('hello');
    };
    return {
        name: name, age: age, sayHello: sayHello
    };
};

var propKey = 'name';

objectExt.book = (_objectExt$book = {}, _objectExt$book[propKey] = 'ES6', _objectExt$book['total_' + 'chapter'] = 20, _objectExt$book['print_' + propKey] = function () {
    console.log(this[propKey]);
}, _objectExt$book);

objectExt.nameObject = Object.defineProperties({
    fullName: function fullName() {
        console.log('ECMAScript 6 Primer');
    }
}, {
    getFullName: {
        get: function get() {
            return 'ECMAScript 6 Primer';
        },
        configurable: true,
        enumerable: true
    }
});

exports.functionExt = functionExt;
exports.objectExt = objectExt;

},{}],2:[function(require,module,exports){
/**
 * Created by xm_file on 15/10/5.
 */
'use strict';

var _import = require('./import');

console.log(_import.square(5)); // 25

var cred = {
    name: 'Ritesh Kumar',
    enrollmentNo: 11115078
};
var x = new _import.MyClass(cred);

console.log(x.getName()); //Ritesh Kumar
console.log(_import.PI);
console.log("test grunt command");
var s = 'hello';
for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}
console.log(i); // 5
var _ref = [];
var foo = _ref[0];
var _ref2 = [1];
var bar = _ref2[0];
var tmp = _ref2[1];

console.log(foo, bar, tmp);

_import.functionExt.paramTwo(undefined, null);
console.log('length of functionExt.paramTwo:' + _import.functionExt.paramTwo.length);
var x = 3,
    y = 3;
_import.functionExt.paramTwo();
console.log('param of functionExt.paramException(1):' + _import.functionExt.paramException(1));
// console.log('param of functionExt.paramException():' + functionExt.paramException());

_import.functionExt.paramFunction(function () {
    console.log('callback');
});

_import.functionExt.rest(1, 2, 3); //2,3

console.log(_import.functionExt.rest.length);

console.log(_import.functionExt.spread([2, 3, 4]));

var arry1 = [1, 2, 3];
var arry2 = [4, 5, 6];
console.log(_import.functionExt.spreadPush(arry1, arry2)); //[4, 5, 6, 1, 2, 3]

console.log([].concat("hello")); //["hello"]

console.log(_import.functionExt.nameFunction.name); //nameFunction

//箭头函数
_import.functionExt.arrowParam(1); //1

_import.functionExt.arrowParams(1, 2); //3

console.log(_import.functionExt.arrowParamsObject(1, 2));

console.log(_import.functionExt.arrowArrayIncre([1, 2, 3]));

//函数绑定
var person = {
    name: 'ES6'
};

var sayHello = function sayHello() {
    console.log('hello,' + this.name);
};
var sayByebye = function sayByebye() {
    console.log('byebye,' + this.name);
};
// person::sayHello()::sayByebye();

//对象扩展

console.log(_import.objectExt.getPerson());

var propKey = 'name';

_import.objectExt.book['print_' + propKey](); //ES6
console.log(_import.objectExt.nameObject.fullName.name); //fullName
console.log(_import.objectExt.nameObject.getFullName.name); //

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
var extObject = Object.defineProperties({
    bar: function bar() {
        console.log('origin bar');
    }
}, {
    foo: {
        get: function get() {
            return this.bar();
        },
        configurable: true,
        enumerable: true
    }
});
var reflectReceiver = {
    bar: function bar() {
        console.log('reflect bar');
    }
};
// Reflect.get(extObject, "foo", reflectReceiver);
// extObject.foo(); // reflect bar

},{"./import":1}]},{},[2]);
