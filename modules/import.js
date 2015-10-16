/**
 * Created by xm_file on 15/10/5.
 */
let sum = (a, b = 6) => (a + b);
let square = (b) => {
    return b * b;
};
let variable = 8;

const PI = 3.14;
class MyClass {
    constructor(credentials) {
        this.name = credentials.name;
        this.enrollmentNo = credentials.enrollmentNo
    }
    getName() {
        return this.name;
    }
}

export { sum, square, variable, PI, MyClass };


let functionExt = {
    paramTwo: function(x = 1, y = 2) {
        console.log('x:' + x + ',y:' + y);
    },
    paramOne: function(x, y = 2) {
        console.log('x:' + x + ',y:' + y);
    },
    paramError: function(x = 1, y) {
        return x + y;
    },
    paramException: function(mustBeProvided = function() {
        throw new Error('Missing parameter~~');
    }()) {
        return mustBeProvided;
    },
    paramFunction: function(callback = function() {
        console.log('default callback');
    }) {
        callback();
    },
    rest: function(value1, ...values) {
        values.forEach(function(value) {
            console.log(value);
        });
    },
    spread: function(argsArry) {
        function sum(x, y, z) {
            return x + y + z;
        }
        return sum(...argsArry);
    },
    spreadPush: function(argsArry_s, argsArry_d) {
        argsArry_d.push(...argsArry_s);
        return [...argsArry_d];
    },
    spreadString: function(s) {
        return [...s];
    },
    nameFunction: function() {

    }
};
functionExt.arrowParam = a => console.log(a);
functionExt.arrowParams = (a, b) => console.log(a + b);
functionExt.arrowParamsObject = (a, b) => ({
    a, b
});
functionExt.arrowArrayIncre = argsArry => {
    argsArry.map(x => x + 1);
    return argsArry;
};
export {
    functionExt
};

let ObjectExt = {
    getPerson: function() {
        var name = 'ES6';
        var age = 25;
        var sayHello = function() {
            console.log('hello');
        }
        return {
            name, age, sayHello
        };
    }
};
