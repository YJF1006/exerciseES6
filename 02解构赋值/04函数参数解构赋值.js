/*
* @Author: duqinzhi
* @Date:   2018-05-01 21:41:12
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-01 22:28:34
*/


function getA([a,b,c,...d]){
	console.log(a,b,c,d);    //1,2,3,[4,5]
}
getA([1,2,3,4,5]);



// function getB({name='杜秦芝',age=100} = {}){   //当不传参数的时候这样写默认值， 要是没有后面={}，那么会报错
// 	console .log(name,age);   
// }
// getB();    //不会报错，没有传参的时候默认传了{}，然后{}里面默认name='杜秦芝'，age=100
// 
function getB({name,age=100}){
	console .log(name,age);
}
getB({name:'杜秦芝'});   //杜秦芝 100
getB();                  //报错，没有实参会报错


//牢记下面的这个案例
function getB1({name='duqinzhi',age=100} = {}){
	console .log(name,age);
}
function getB2({name,age}={name:'duqinzhi',age:100}){
	console .log(name,age);
}
  
getB1();       //duqinzhi 100        没有传值，额函数默认传了{}，当传了{}的时候，函数默认{}里面的name='duqinzhi',age=100  执行等号后面的 
getB2();       //duqinzhi 100        没有传值，函数默认传了{name='duqinzhi',age=100}
getB1({});     //duqinzhi 100        当传了{}， 函数人为传了值且为空，则执行{name='duqinzhi',age=100}                     执行等号前面的  
getB2({});     //undefined undefined 当传了{}，函数人为传值了，那么执行{name,age}，则就成了undefined


//默认给对象属性赋值的时候使用的是 = 
//对象给属性赋值使用的是：