title: ES6 Travel
date: 2015-10-01
categories: ES6
tags: [ES6, Babel, Grunt]

---
#创建es6项目
在项目中应用es6的方法有很多种，这里选用了babel+broswerify+grunt的方法。其它方法也会在后面提到。
##babel+broswerify
我们先看一下项目结构
![Alt text](./structure.png)

其中，modules文件夹下包括用ES6编写的所有模块，dist文件夹下包含编译和打包后的ES5文件。
####首先，创建package.json文件
```
npm init
```
一路回车，生成package.json.然后我们再写上依赖。
```json
{
	"devDependencies": {
	    "grunt": "^0.4.5",
	    "babelify": "^6.1.0",
	    "grunt-browserify": "^3.8.0",
	    "grunt-contrib-watch": "^0.6.1"
	  }
  }
```
  以上就是我们项目中要用到的
- Grunt ：JavaScript任务构建工具
- babelify ：Browserify的babel转换器
- grunt-browserify ：Grunt browserify任务
- grunt-contrib-watch ：监听JavaScript的改变选择性的执行任务
```
npm install
```
安装依赖，生成node_modules文件
####创建Gruntfile文件
不熟悉grunt的，可以先移步[grunt](http://gruntjs.com/)
文件内容如下：
```
module.exports = function (grunt) {
   grunt.initConfig({
      browserify: {
         dist: {
            options: {
               transform: [
                  ["babelify", {
                     loose: "all"
                  }]
               ]
            },
            files: {
               // if the source file has an extension of es6 then
               // we change the name of the source file accordingly.
               // The result file's extension is always .js
               "./dist/module.js": ["./modules/index.js"]
            }
         }
      },
      watch: {
         scripts: {
            files: ["./modules/*.js"],
            tasks: ["browserify"]
         }
      }
   });

   grunt.loadNpmTasks("grunt-browserify");
   grunt.loadNpmTasks("grunt-contrib-watch");

   grunt.registerTask("default", ["watch"]);
   grunt.registerTask("build", ["browserify"]);
};
```
以上，我们定义了两个任务
1. grunt default/grunt：当我们在项目根目录运行这个命令，这个任务会监听modules文件夹下所有JS文件的变化。当检测到任何变化时，Grunt都会执行Browserify任务。任务终断之前，watch任务会一直运行。Ctrl+C来终断任务。
2. grunt build：Browserify任务运行一次后停止。
####写点es6
在我们的demo里我们将在modules文件夹下创建两个文件，index.js和import.js，前面一个文件是项目的主文件，后一个文件作为一个模块提供了所有的函数和变量。也就是说，index.js会从import.js中导入（import）所有的函数和变量。使用es6的新特性，import和export
其中，import内容如下：
```
let sum = (a, b = 6) => (a + b);
let square = (b) => {
    return b * b;
};
let variable = 8;

class MyClass {
    constructor(credentials) {
        this.name = credentials.name;
        this.enrollmentNo = credentials.enrollmentNo
    }
    getName() {
        return this.name;
    }
}

export { sum, square, variable, MyClass };
```
import.js作为一个模块，对外提供了一个变量、一个类和函数表达式。模块中定义的函数和变量对外是不可见的，除非显式的导出（export）他们。你可以使用export关键字。在import.js的最后一行，我们导出了sum、square、variable、MyClass。
index.js内容如下：
```
import {sum, square, variable, MyClass} from './import';

console.log(square(5));// 25

var cred = {
    name: 'Ritesh Kumar',
    enrollmentNo: 11115078
}
var x = new MyClass(cred);

console.log(x.getName());//Ritesh Kumar
```
在index.js文件中，我们使用import关键字导入import.js中对外可见内容，index.js成为了项目的主文件。
如果我们想导入一个es6扩展名的模块，那么我们必须在import中写完整的文件名。看下面的例子：
```
// if file extension of the importing file is .js
// both below mentioned methods work
import { sum, square, variable, MyClass } from './import';
import { sum, square, variable, MyClass } from './import.js'

//if file extension of the importing file is .es6
// its mandatory to add the extension
import { sum, square, variable, MyClass } from './import.es6';
```
假如我们正在使用Browserify，我们依然可以使用require()方法导入符合CommonJS规范的模块。例如：我们想使用导入jQuery作为一个模块，可以这样：
```
var $ = require('path/to/jquery');
$(window).click(function(){
    //do something
});
```
####运行es6代码
ES6的import、export结合require方法使得我们可以自由的用模块来组织我们的客户端代码，同时又可以使用新版本的JavaScript书写我们的代码。
在终端运行grunt命令：
```
grunt //或者
grunt build
```
- Browserify把所有的文件打包成一个JavaScript文件
- 打包后的文件通过Babelify转换成为ES5代码
- 生成一个名为module.js的文件，可以运行在所有的现在浏览器上，包括IE9

最后，在prototype下的html文件中引入module.js，代码就可以运行在浏览器了。
##其他环境运行ES6
关于在线运行，命令行运行，服务器运行，浏览器运行的方法，[ECMAScript6简介](http://es6.ruanyifeng.com/#docs/intro)这篇文章已经讲的很详细了，这里面介绍了许多快捷的方法，请根据需要决定使用哪一种，这里不再赘述。
##FIS3+fis-parser-babel2
fis3推出了插件来支持babel,所以我们可以通过这个来创建项目。
具体步骤请参见以下文章自行探索。（由于电脑缺少环境，fis未成功安装，所以未能给出demo）
1. [FIS项目构建](http://fis.baidu.com/fis3/docs/beginning/release.html)
2. [FIS-es6 demo](https://github.com/fex-team/fis3-demo/tree/master/use-es6)
3. [参考](http://yanhaijing.com/javascript/2015/09/04/try-es2015/)
