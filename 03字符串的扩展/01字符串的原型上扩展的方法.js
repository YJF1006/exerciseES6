/*
* @Author: duqinzhi
* @Date:   2018-05-02 10:04:36
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-05-02 10:31:00
*/
console.log(String.prototype);
/**
 *  1.include   //判断字符串中有没有指定字符  返回值是布尔 true/false 
 		用法： include("指定字符"，开始查找的位置(可选))   默认从头找
		   第二个参数是一个数字，不是数字会转成数字，用的Number()
 

	2.startWith //判断字符串是不是以指定字符作为开头
		用法：startWith("指定字符"，开始查找的位置(可选))


	3.endWith  //判断字符串是不是以指定字符作为结尾的
	 =	用法： endWith("指定字符"，num); //从前num个中查看
 
	
	4.repeat //重复多少次
		用法：repeat(num); //将字符串重复多少次，
				注意：num必须取整(向下取整)，不可以是负数或者infinity
						0到-1之间取整0
 
	5.padStart (es7) //按照指定字符补全字符串的指定长度（往前补）
		用法： padStart(length,"指定字符")
				参数1.长度length 2.指定字符


	6.padEnd  (es7) //跟padStart 方法样，是往后补
 */
let str = "abcdefg12345";
console.log(str.include("a"));   //true
console.log(str.include("a",2));  //false

console.log(str.startWith("a"));   //true
console.log(str.startWith("a"),3);   //false

console.log(str.endWith("d",3));   //false  前三个abc是以c结尾的

console.log(str.repeat(2));   //abcdefg12345abcdefg12345
console.log(str.repeat(1.9));   //相当于repeat(1)
console.log(str.repeat(-1.9));  ///相当于repeat(0);  不打印什么

let str1 = "ab";
console.log(str1.padStart(5,"g"));  //"gggab"
console.log(str1.padStart(7,"dqz"));  //"dqzdqab"

console.log(str1.padEnd(5,"g"));  //"abggg"
console.log(str1.padEnd(7,"dqz"));  //"abdqzdq"