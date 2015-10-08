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