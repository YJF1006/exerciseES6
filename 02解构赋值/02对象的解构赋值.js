/*
* @Author: duqinzhi
* @Date:   2018-05-01 10:34:58
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-05 13:21:57
*/

/**对象的解构赋值
	对象是无序的
 	1.如果变量名和属性名重名了，可以直接省略写法
 	2.默认值（当值为undefined的时候，才用到默认值）   对象默认赋值的时候用的是=
 	3.对象解构的时候{}不能位于行首，解决方法 用()包着  或者用另一个变量接收
  */

	let {name1,age1} = {name1:"杜秦芝",age1:10};
//let {name1:name1,age1:age1} = {name1:"杜秦芝",age1:10};
	console.log(name1);

//2.默认值（当值为undefined的时候，才用到默认值）
	let {name2,age2=100} = {name2:"杜秦芝"};
	console.log(age2);

//3.对象数组的嵌套
	let {name3,age3=100,list:[a1,a2,a3,a4]} = {name3:"杜秦芝",age3:undefined,list:["js","node","vue","react"]};
	console.log(name3,age3,a1,a2,a3,a4);


//4.数组可以这样写，但是对象这样不行，因为{}不能放在行首，解决方法1.
	// let x1,x2;
	// [x1,x2] =[1,2];

    let {x1,x2} = {x1:1,x2:2};
    console.log(x1, x2);//拿括号包起来是因为块级作用域
  