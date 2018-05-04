/*
* @Author: duqinzhi
* @Date:   2018-05-04 21:16:50
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-04 21:40:23
*/
/**模块导入
 * 1.es6模块也分  第三方(npm install 装的 都装在了node_modules),  不用./
 * 				 自定义的 需要写的./
 * 2.使用解构赋值，获取导出的赋值
 * 3.import 会变量提升   命令有提神效果，会提升到整个模块的头部首先执行
 * 4.虽然 import 有变量提升，但开发一般写在上面
 */

//console.log(num);
import {num,str} form "./dqz.js";
//var str = 1;  //会报错，不可以重复声明


//一次性拿到
import *as obj form "./dqz.js";

//
import yjf form "./yjf.js";

console.log(num);
console.log(obj);   //全部的内容都去obj了