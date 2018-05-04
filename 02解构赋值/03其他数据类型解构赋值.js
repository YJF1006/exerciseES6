/*
* @Author: duqinzhi
* @Date:   2018-05-01 12:12:48
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-01 21:40:58
*/

//1.使用数组的解构赋值的形式，如果等号右边不是一个数组，默认将其转为数组（不是数组是类数组的对象，必须有一个Length属性）
	let [x,y]="123";    //let [x,y] = 1;  是错误的
	console.log(x,y);
	
//2.使用对象的结构赋值形式，如果等号右边不是对象，默认转为对象再进行解构赋值
	let {__proto__:a} = 1;
	console.log(a);   //undefined
	console.log(Object(a)); //{__proto__}

	let {length:b} = "1234";
	console.log(Object("1234"));   //转换成字符串
	console.log(b);  //4
