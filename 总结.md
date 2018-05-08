#一：let和const定义变量
>##1var和function定义变量特点
>>      1.1 var  function   有变量提升 
>>          
>>      1.2 在全部作用域下，使用var和function声明变量会给Window增加属性

>##2. let声明的特点
>>      2.1 没有变量提升
>>      
>>      2.2 不可以重复声明
>>      
>>      2.3 不会给window增加属性

>##3.const定义变量的特点
>>      3.1 没有变量提升
>>      
>>      3.2 不可以重复声明
>>      
>>      3.3 不会给window增加属性
>>      
>>      3.4 const定义变量，一旦声明必须赋值（let可以声明不赋值是undefined）
>>      
>>      3.5 const定义的是一个常量，不可以重新赋值

>##4.块级作用域 
>>      3.1 {} : 一个{}就是一个块级作用域
>>      
>>      4.2 块级作用域下，var和function跟原来用法没有区别，声明的变量依然在全局中可以拿到
>>      
>>      4.3 在块级作用域下，let和const声明的变量是私有的
>>      
>>      4.4 有{}的 不可以放在行首    
          有{}的有这三种情况：1.for(){} ,  2.if(){} ,   3.对象{}
          4.4.1  {}如果想表示一个对象，不可以放在行首在eval中，
                  如果把字符串(里面是对象)变成对象，一定要用()包起来{name:"Cyan",age:19}//这样写会报错，当做块级作用域
                   let obj = {name:"Cyan",age:19};({name:"Aqing",age:20})//这两种方式都可以      
          4.4.2 if(){}  中的function只会提前声明不会定义，当条件成立先给函数赋值，代码再执行
          4.4.3 for(){}   此时全局已经拿不到i了，let声明的变量。在块级都是私有的


#二：解构赋值
>##1.数组的解构赋值
>>      1.1 设置默认值（只有后面解构得值是undefined的时候，才会走默认值）
>>      
>>      1.2 省略赋值(省略的值用逗号隔开就行)
>>      
>>      1.3 不定参数赋值(将后面的项放在一个数组中赋值给y3=[3,4,5])
>>      
>##2. 对象的解构赋值
>>      2.1 对象是无序的
>>      
>>      2.2 如果变量名和属性名重名了，可以直接省略写法
>>      
>>      2.3 默认值（当值为undefined的时候，才用到默认值）   对象默认赋值的时候用的是=
>>      
>>      2.4 对象解构的时候{}不能位于行首，解决方法 用()包着  或者用另一个变量接收
>>      
>##3. 其他数据类型解构赋值
>>      3.1 使用数组的解构赋值的形式，如果等号右边不是一个数组，默认将其转为数组（不是数组是类数组的对象，必须有一个Length属性）
>>      
>>      3.2 使用对象的结构赋值形式，如果等号右边不是对象，默认转为对象再进行解构赋值

#三：函数参数解构赋值
>####1.function getB({name='dqz',age=100} = {}){}   //当不传参数的时候这样写默认值， 要是没有后面={}，那么会报错
>##2.牢记下面的案例
>>function getB1({name='duqinzhi',age=100}={}){

>>>console .log(name,age);
}

>>function getB2({name,age}={name:'duqinzhi',age:100}){

>>>console .log(name,age);
}
  
>>getB1();       
>####//duqinzhi 100        没有传值，则函数默认传了{}，当传了{}的时候，函数默认{}里面的name='duqinzhi',age=100  执行等号后面的 
>>getB2();       
>####//duqinzhi 100        没有传值，则函数默认传了{name='duqinzhi',age=100}
>>getB1({});     
>####//duqinzhi 100        当传了{}， 函数人为传了值且为空，则执行{name='duqinzhi',age=100}                     执行等号前面的  
>>getB2({});     
>####//undefined undefined 当传了{}，函数人为传值了，那么执行{name,age}，则就成了undefined


#三：字符串的扩展
>##1. 字符串的原型上扩展的方法
>>#####console.dir(String.prototype);    //详细打印String 原型上方法
>>      1.1 includ     //判断字符串中有没有指定字符  返回值是布尔 true/false 
           用法： include("指定字符"，开始查找的位置(可选))   默认从头找
           第二个参数是一个数字，不是数字会转成数字，用的Number()

>>      1.2 startWith //判断字符串是不是以指定字符作为开头
            用法：startWith("指定字符"，开始查找的位置(可选))

>>      1.3 endWith  //判断字符串是不是以指定字符作为结尾的
            用法： endWith("指定字符"，num); //从前num个中查看            

>>      1.4 repeat //重复多少次
            用法：repeat(num); //将字符串重复多少次，
                注意：num必须取整(向下取整)，不可以是负数或者infinity
                        0到-1之间取整0


>>      1.5 padStart (es7) //按照指定字符补全字符串的指定长度（往前补）
            用法： padStart(length,"指定字符")
                参数1.长度length 2.指定字符


>>      1.6 padEnd  (es7) //跟padStart 方法样，是往后补
>>      
>>      

>##2.模板字符串
>>      2.1 拼接字符串：``  (按法：切换成英文字符，esc下面的按键)
        作用：跟普通字符串一样使用，但是他可以添加变量${变量}
>>      2.2 跟原来的拼接字符串做比较    
          2.2.1 原来拼接字符串模板用+  例如
            // document.body.innerHTML+= '<h1 class='+ 变量 +'>'+ 变量 +'</h1>';
          2.2.2 ea6中 ``可以添加变量${}
            //document.body.innerHTML+= `<h1 class = "${变量}"> ${变量}</h1>`;

***

#四：数组的扩展
>##1.Array类上的扩展
>>#####console.dir(Array);  //在控制台查看Array的方法 
>>      1.1Array 类   也是一个函数(将传进来的参数变成一个数组返回)
          注意:只用一个参数并且是个数字n，那么返回有n个空位
  
>>      1.2Array.of()  //跟Array一样，
          注意：但唯一不同的是：参数是一个数字的时候仍然返回只有一项的数组

>>      1.3Array.from(数组/类数组)   //返回一个数组
          注意：如果参数是数组，那么就返回放进来的数组
          如果参数是类数组，有length属性(例如字符串),那么就变成其对应的数组返回

>##2.数组原型上扩展的方法
>>#####a、console.log(Array.prototype);   //在控制台查看Array原型上的方法
>>#####b、所有数组实例上的方法，参数是从索引n到m的都是包含n不包含m(包头不包尾)
>>#####c、es6中数组遍历用 for of 

>>      1.copyWithin  //原数组中读取内容，替换指定位置的内容，原数组的length是不变的(原数组会变)
          a.用法：copyWithin(target,begin,end)   //查找的时候序号包头不包尾
          参数(替换目标的起始位置target,查找内容的起始位置begin,查找内容的结束位置end)，最后进行替换
          b.原数组改变

    
>>      2.fill  //按照指定字符填充数组，将数组的每一项都变成指定字符串（原数组会变）
           a.用法: fill("指定字符"，替换的开始位置，替换的结束位置)
           b.原数组改变
    

>>      3.includes  //判断数组中有没有某一项   返回值布尔值
           a.用法：includes(查找的项，开始查找的位置)
           参数：第一个是要查找的；第二个参数是开始查找位置的索引

   

    
>#####以下都是遍历数组的方法。参数是一个函数的。这个函数中的this是window,我们可以通过第二个参数改变函数中的thisreduce 和reduceRight 中的函数 不可以改this
    
    


>>      4.filter (es5)//过滤数组，根据返回值去过滤原数组(返回一个新的数组，原数组不变 )
          a.用法：filter(function(item,index){ 
             //如果返回true就留下当前项，返回false不留下当前项
               return 
            })   
          b.返回新的数组，原数组不变


   
>>      5.find //(返回值)先遍历数组，一旦参数函数返回true,停止查找返回当前项
          a.用法：find(function(){}) 
          b.注意：只能找一个

   
>>      6.findIndex //(返回值对应的索引)先遍历数组，一旦参数函数返回true,停止查找返回当前项所对应的索引
          a.用法：findIndex(function(){})
          b.注意：只能找一个
   
   
   
>>      7.every //遍历数组，如果遍历每一项都返回true，最后结果为true，只要有一个为false结果就是false
          a.全都是true,才返回true
   
>>      8.some  //遍历数组，只要有一项结果为true最后结果为true，
          a.只要有个返回true，就返回true
   
>>      9.reduce  //迭代
          a.用法：reduce(function(prev,item){
           //prev 上一次的返回值   item当前项
         },参数2)   
               参数1：函数； 
               参数2：作为初始的prev （因为第一次迭代的时候没有上一次的返回值，所以可以用参数2进行设置）
  
  
>>      10.reduceRight   //跟reduce一样，只是顺序从右开始
  
  
  
    
>>      11.keys   //遍历每一项的索引的借口，可以使用for of遍历
          a.用法；arr.keys()
          b.注意：和for of 搭配
          c.默认使用for of 遍历数组，默认遍历的就是每一项
   
>>      12.entries  //遍历接口，可以遍历到索引和每一项,每一项遍历得到一个数组【索引，当前项】
          a.用法：arr.entries()
          b.注意：和for of 搭配
          c.因为每一次遍历得到的是一个数组，一般可以通过数组的解构赋值获取到遍历的结果

>##3.数组的空位

>>      3.1 数组的空位概念:数组的某个索引位置没有任何值，(注意 undefined不是空位)
>>      
>>      3.2 判断一个数组中某一个位置是不是空位    in （判断数组索引位置上有没有值）
>>         
>>      3.3 在es5中数组方法对空位的处理不一致，一般直接跳过空位
>>      
>>      3.4 在es6中的方法将空位处理为undefined

#五：函数的扩展
>##1.函数参数的问题
>>      1.1 参数默认值   参考第二章的函数解构和测试代码
     
>>      1.2 参数使用解构赋值 参考第二章的函数解构和测试代码
    
>>      1.3 函数的length 属性，  指的是形参的个数（如果形参有默认值，那么length就会失真，变成没有 默认值形参的个数）
    
>>      1.4 参数默认值的位置:一般参数的默认值放在最后面
      
>>      1.5 arguments 类数组
              function fn8(...arg){
                console.log(arguments);   //是类数组
                console.log(arg);    //是个数组
              }
              fn8(1,2,3,4,5)
      
>>      1.6.参数作用域问题
            注意：函数执行的时候先给形参赋值，形参也是私有变量，
            如果给形参的默认值是一个变量，先看是不是自己私有的变量，不是自己的再在全局中找是否有此变量，没有就报错

>##2.函数name的问题
>>      2.1常规的： 匿名函数的name 是 ""   ,其他的函数name是自己的名字
>>      2.2特殊的：  
>>            1.通过bind方法得到一个新的函数   name是"bound 原来函数的名字"
>>            2.通过构造函数方式创建一个函数   name是"anonymous"  (匿名)
                  new Function("形参","函数体")    传一个代表函数体，传两个的时候第一个代表形参，第二个代表函数体
                  function fn(形参){函数体}
>>      2.3面试题：
>>           将一个json字符串变成一个json对象（使用的是new Function）
                   let str = `[{"name":"dqz",{"age":"18"}}]`;
                   let arr = (new Function("return "+str))();   //传一个参数是函数体
                   console.log(arr);
                      /*arr --> [{"name":"dqz",{"age":"18"}}]
                        function fn0(){
                          return [{"name":"dqz",{"age":"18"}}];
                        }
                      */  

>##3.扩展运算符  ...
>>#####      3.1 扩展运算符 ...
>>          将非数组变成数组（类数组 length） 

>>          将数组变成非数组（要里面的每一项的时候可以展开的时候用这个）
          
>##4.箭头函数
>>      4.1  箭头函数都是匿名函数
>>      
>>      4.2  一般的格式： let fn =(形参) =>{函数体}     (形参)=>{函数体} 
>>      
>>      4.3  省略写法：   let fn =x =>x+1;   //形参只有一个的时候可以省略() ;假如函数体只有一行代码，那么return 和{} 可以省略；
>>      
>>      4.4  通常函数当做参数的时候使用箭头函数
>>      
>>      4.5  箭头函数的特点
              a、箭头函数没有this指向，箭头函数里面的this是上一级的作用域下的this
              b、箭头函数没有arguments  （解决方法 参数变成...arg  ,此时arg就是相当于arguments拿到的数据而且还是个数组）
              c、箭头函数不可以用作构造函数，因为不可以使用new执行         

#六：对象的扩展
>##1.对象的简洁表达式
>>      1.1 属性名都是字符串，属性名使用[]里面可以写变量  
>>          例如：["my"+str]:name  //相当于属性名是myname  
                    
>##2.Object方法扩展
>>      2.1   Object()  //将参数变成对象
>>          例如：console.log(Object(1));  //Number

>>      2.2 Object.is(值1,值2)   //判断两个值是否相等(主要解决了===的问题)
              ===  问题：NaN跟NaN不等 ； -0===0 true
          
>>      2.3 Object.assign  //合并对象
              用法：Object.assign(obj1,obj2);  将obj2合并到obj1上，返回obj1
          
>>>2.4 ES7 中提供了对象的扩展运算符 `...`  （也可以用于合并对象)     重点！重点！重点
            
>>      2.5 Object.getOwnPropertyDescriptor  //获取一个对象某个属性的描述
            
>>      2.6 Object.create(prototype, descriptors)  //方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 
>>      
              参数的意思：prototype  必须 要用作原型的对象。  可以为 null。 
                           descriptors  可选。  包含一个或多个属性描述符的 JavaScript 对象。
                        
>>      2.7 keys()  //返回值是个 数组[所有可枚举的属性]
            
           
>>      2.8 values()  //返回值 数组[所有可枚举属性的键值]
            
>>      2.9 entries  //返回值 数组[每一项也是一个数组[键,值]]

>##3.对象的set和get(方法)
>>      3.1 get  获取值，只要通过obj获取name属性值，就会触发，记得要return，
>>      3.2 set  设置值，只要通过obj给name属性设置值就会触发这个set函数，然后进行修改完了之后return即可
  
#七：Symbol (新增的基本数据类型)  而且是一个值类型的（在内存中直接存储数据本身）
>>##1.Symbol的基本用法：
>>      1.1 Symbol跟字符串差不多，但是使用Symbol函数得到一个数据，每一个都是完全不同的
>>      
>>      1.2 使用Symbol函数执行得到一个Symbol数据类型
>>      
>>      1.3 Symbol可以接受一个参数()，是对symbol数据的描述
>>      
>>      1.4 即使描述一样，但是值也是不同的
   
>>##2.应用：一般当做对象的属性，任意一个Symbol()得到的值都是不同的
   
>>##3.Symbol与其他字符串之间的转换   
>>      3.6 Symbol值是不可以转数字的，所以不可以跟其他值就行计算,也不可以进行字符串拼接
>>      
>>      3.7  Symbol可以转Boolean
>>      
>>      3.8  Symbol可以toString变成现实字符串
     
>>##4.Symbol函数具有的方法     
>>      4.9  Symbol.for()  //如果之前有相同参数的Symbol的值，就得到这个值返回，如果没有就创建一个新的Symbol
>>     
>>      4.10 Symbol.keyFor(symbol值)  //找到使用Symbol.for创建的值的描述（Symbol函数参数）
     
>>          如果是Symbol创建的 那么找不到是undefined
>>          
>>          必须是Symbol.for创建的，那么就可以找了


#八： Set和Map（新增的数据类型）
>>#1.Set 类似数组，但是可以去重，new Set(arr)     重点！重点！重点！
>>      1.1 只有值value,没有键key
>>      
>>      1.1 通过构造函数的方式创建一个Set实例
>>      
>>      1.2 参数是一个数组（或者类似数组只要是有iterable当前接口的数据）
>>      
>>      1.3 有iterable接口的：数组，arguments，元素集合，Set，Map，字符串
>>      
>>      1.4 会默认去重
>>      
>>      
>>##2.Set的属性
>>      2.1 size  表示Set实例的大小个数
>>      
>>      2.2 add   //增加，如果之前没有加上，之前有就不加了，返回值增加后的Set实例(可以实现链式编程)
>>         参数一次只能加一个
>>         
>>     
>>      2.3 delete  //删除 返回值true/false    如果里面有这一项就删除成功true，没有此项就删除失败
>>      
>>      
>>      2.4 clear   //清空 没有返回值 undefined，
>>         没有参数
>>     
>>     
>>      2.5 has   //判断有没有此项   返回值 true/false
>>    
>>遍历（常跟for of 搭配）
>>     
>>      2.6 forEach   //遍历
>>     
>>      2.7 keys     // 得到键 实例.keys()   for of遍历  key仍然是value值 
>>       
>>      2.8 values   //得到键 实例.keys()   for of遍历
>>      
>>      2.9 entries   //得到键 实例.keys()   for of遍历
>##3.Set的用法 （案例）
>>      3.1数组去重
           a、先用Set去重，new Set(arr)   (返回的是非数组)
           b、然后用... 或者Array.from()  将非数组变成数组

>>      3.2.两个数组的并集
           a、先用...将两个数组合并（重复的伪数组）
           b、用Set去重              （伪数组）
           c、...将伪数组变成数组
          
>>      3.3.两个数组的并集
           a、对arr1进行过滤，filter()
           b、形参item(当前项)，
              函数体（arr2中inculdes item没，当包含了就返回true保留  inculdes返回值就是布尔值）

>##4.Map  类似于对象  它的属性名可以是任何数据类型
>>      4.1 构造函数方式创建一个Map实例 
>>      
>>      4.2 参数是一个数组，数组中的每一项也是一个数组，有两个值 key value
>>         new Map([[key,value],[key,value],[key,value]]);
>>         
>>      4.3 一个对象 属性名必须是字符串，如果你写的不是字符串也默认是字符串。
>>         想要用其他的数据类型作为属性名，一个普通的对象是做不到,但是Map是可以的
>>         
>>      4.4 Map 实例的key可以是任何数据类型  
>>      
>##5.Map 原型上的方法

>>      5.1  get   //获取value   返回值是value
>>          a、用法：get(key)
>>    
>>     
>>      5.2  set   //设置值   返回值是修改后的Map实例（如果之前有过key就修改，没有就增加）  
            a、用法：set(key,value)
            b、实现链式写法
    
>>      5.3  has   //判断key有没有对应的是value 值   返回值 true/false
   
>>      5.4  delete  //删除属性   返回值 true/false
   
>>      5.5  clear  //清空 没有参数  一般返回undefined
   
>>遍历的方法(for of  搭配)
  
>>      5.6  forEach    //循坏遍历
    
>>      5.7  keys()    // 得到键map.keys()   for of遍历
    
>>      5.8  values()  // 得到值 map.values()   for of遍历
>>      
>>      5.9  entries()  //  得到键值  常跟解构一起用 for of 遍历，

>#6.实践题   给你一个数组，将他变成Map实例
>>####1. new 一个map
>>####2.for of循环遍历利用entries()方法得到数组的index 和 item     
>>####3.把得到的index和item添加到map中   （用set()方法）

>>         let arr1 = ["DQZ","ES","VUE","NODE"];   //数组没有key  他的key就相当于索引
        let map3 = new Map;
        for(let [index,item] of arr1.entries()){   //解构了数组
          map3.set(index,item);   //把遍历到的的index 和item 添加给map3
        }
        console.log(map3);   //完成了将数组变成了Map实例
   

#九：Proxy 拦截（新增的构造函数）
>>##1.*Proxy 对对象默认操作拦截（或者是一些改写）
>>      1.1 用法：new Proxy({目标对象 target},{想要进行拦截的方法});
>>             参数：1.目标对象 target
>>                   2.想要进行拦截的方法
>>                     
>>##2.拦截的方法(一共13种，详细的放在了02里面了)
>>      2.1  get  //只要是获取就会触发get,例如: proxy1.name
>>        参数：1.target：目标对象  2.key：属性名  3.proxy:实例
>>     
>>      2.2  set //只要设置就会触发
>>        参数set(target, propKey, value, receiver)
>>    
>>      2.3  has  //拦截propKey in proxy的操作，返回一个布尔值。
>>        参数 1.target：目标对象  2.propKey属性名：
>>    
>>      2.4  apply //拦截 Proxy 实例作为函数调用的操作，  
>>        参数：target, object, args
>>        比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
>>##3. 理解看相应的测试代码


#十：class 关键字，定用来定义类
>##ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已
>##1.constructor   类就是方法于 创建新对象的对象看作类
    1.1 类必须使用new执行，不可以作为普通函数执行

    1.2 JavaScript 语言中，生成实例对象的传统方法是通过构造函数
        function Fn(){
          this.x = 10;
        }
        Fn.prototype.getX = function(){};
        let f = new Fn();

    >>     
    1.3  class A{
            constructor(x){
                //类本身的函数
                //this:当前的实例
              this.x =x; //添加私有属性
                //return  的是基本数据类型，对实例没有影响，如果是引用数据类型会改变实例，一般不写return
              }
            }

>##2.class的name的问题
>>      2.1  用法：a、定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。
               b、另外，方法之间不需要逗号分隔，加了会报错

>>      2.2  理解第三种情况下的name 问题
          //第三种情况
          let A = class AA{
            //这种情况下 AA只能在里面使用,因为constructor里面就是 类本身的函数，所以AA只能在里面使用
            //不管用什么表示，类的名字永远是AA
            constructor(){ 
              console.log(A.name);   //AA
              console.log(AA.name);   //AA
            };
            getA (){
              console.log(AA.name);
            }
          }
          new A();  //AA
          // new AA();   //报错，此时的 AA只能在里面使
          // let a = new AA();   //报错
          let a = new A();
          console.log(a.name);   //AA
          a.getA();    //AA

>##3.class的执行问题
>>      3.1 let a = new class{}();  采用class表达式让类直接执行
    
>##4.class的变量提升（class没有变量提升）
>>      4.1 function 会有变量提升
        4.2 class 没有变量提升  ，ES6中的class跟let和const一样没有变量提升

>##5.class 的静态方法
>>      5.1  类就相当于原型,写在原型上的方法都被实例继承了
>>      5.2  假如想给当前类本身加一些方法，我们可以给它加上静态方法（在方法前面加上关键字 static，这样这个方法不会被实例继承，只有类本身可以使用）  例如Array.of
>>      5.3  静态方法不可以实例继承，但是可以被子类继承

>##6.原型上的方法不可枚举
>>      6.1 原来的构造函数写在原型上的方法是可以枚举的

>>      6.2 只要可枚举就可以用for in 遍历  或者用Object.getOwnPropertyDescriptor()

>##7.class继承
>>      7.1  子类b继承父类A     class B extends A{}
>>      
>>      
>>      7.2  子类里面要是写了constructor,那么必须在里面必须写super(); 
>>          （要是不写constructor，那么会自动添加constructor和super()）
>>            a、这里必须要写一个super  因为当前的类没有this  super 一旦写了之后它的this就继承父类
>>            b、super(); 执行完成之后才会有this  super() 就是父类A的constructor
>>            c、super();执行之前不可以使用this
>>      
>>      
>>      7.3  super的三个用法，看下面继承里面
>>            a、在constructor上指的是父类的constructor
>>            b、在原型上的方法指的是父类的原型
>>            c、在静态方法上指的父类本身
#十一：Promise 
>##1.Promise 的基础
>>      1.1  promise 一开始的状态是pending，由pending可以到达两个状态，分别是Fulfilled(成功)，Rejected(失败)
>>      
>>      1.2  pending通过自己里面的resolve() 方法去到达Fulfilled
>>      
>>      1.3  pendind通过自己里面的reject()  方法去到达Rejected
>>      

>>      1.4  执行顺序：先执行 new promise() 中的函数  ==> 当前队列的同步代码  ==>then里面的回调
>>      
>>      1.5  Promise的实例有个then()方法是异步的，里面一般两个回调，一个是成功的回调，一个是失败的回调
>>      
>>      1.6  Promise常用的方法有：then() 、catch() 、all() 、race() 

>##2.Promise 的几种方法
>>      2.1 then()  //一般里面放两个回调函数(箭头函数)，一个是resolve的回调，一个reject的回调
>>          用法：then((res)=>{成功的回调},(e)=>{失败的回调});  
>>          案例：异步加载图片
>>          
>>      2.2 catch()   //用来捕获错误的  如果new Promise中有错误会被捕获，如果then中回调有错误也可以捕获
      一般最后会加一个catch  
             用法：catch((e)=>{错误的回调}); 
>>           注意：   1.与then联合使用的时候：then():里面只放成功，最后写一个catch()来捕获错误
>>         
>>      2.3 all()    //由多个Promise实例构成的Promises实例,可以调用then(),catch()方法
>>          2.3.1 用法 ：Promise.all([每一项都是Promise,如果不是默认转为Promise]);
>>          2.3.2 数组中每一项都是成功状态才会走成功回调，而且返回默认将每一项的参数，放在一个数组中传给回调函数
    数组的顺序也是all里面的顺序
>>          2.3.3 只要有一个错误就会走错误的回调，将第一个错误参数传给回调
>>          2.3.4 案例理解：
>>            let p1 = new Promise((resolve,reject)=>{
            resolve("dqz");
            });
            let p2 = new Promise((resolve,reject)=>{
              resolve("es6");
              //reject("p2Error");
            });
            let p3 = new Promise((resolve,reject)=>{
              resolve("vue");
            });

>>            let pAll = Promise.all([p1,p2,p3]);  //也是Promise的一个实例
>>          
            console.log(pAll);
            pAll.then((res)=>{
              console.log(res);   // ["dqz", "es6", "vue"]
            }).catch((e)=>{
              //一般有错误的时候把错误打印出来
              console.log(e);
            });

>>      2.4 race()  //  只要有一个状态改变，当前实例的状态就跟着改变，
>>          2.4.1用法： Promise.race([p1,p2,p3]);
>>          2.4.2根据案例进行理解
>>              let p1 = new Promise((resolve,reject)=>{
                            setTimeout(()=>{
                              resolve("dqz");
                              //reject("p1Error");
                            },1000);          //延迟了1秒            
                         });

>>              let p2 = new Promise((resolve,reject)=>{
                            setTimeout(()=>{
                              resolve("es6");
                              //reject("p2Error");
                            },2000);        //延迟了2秒
                          });

>>              let p3 = new Promise((resolve,reject)=>{
                            setTimeout(()=>{
                              resolve("vue"); 
                            },200);         //延迟了0.2秒
                          });

>>              let pRace = Promise.race([p1,p2,p3]);   //也是Promise的一个实例

>>              pRace.then((res)=>{
                  console.log(res);   //vue   因为vue延迟的最快变化最快    重点！重点！重点！
                }).catch((e)=>{
                  console.log(e); 
                }

  
  

#十二：async 
>##1.async 函数默认返回一个promise对象
>>        async function getA(){
              //return 出来的内容就是成功回调的参数
              //这里错误了 ，就会被catch捕获到
              //throw new Error("对不起，抛出了错误");
            return "dqz";
          }

>>        //getA()  执行之后就会返回一个promise对象
         getA().then((res)=>{
           console.log(res);
         }).catch((e)=>{
           console.log(e);
         });
>##2.await   await 经常与async 搭配使用
>>      2.1 await 后面是一个Promise实例，如果不是也会默认转为Promise实例
>>      
>>      2.2 直接让Promise实例的回调执行，返回执行时的参数；
>>      
>>      2.3 await 是一个语法糖，不用then就可以拿到resolve或者reject的参数
>>      
>>      2.4 等await 后面的异步完后再去执行后面的代码 

>##3.
>>      let p = new Promise((resolve,reject)=>{
>>        resolve("dqz");
>>      });

>>      async function getA(){
>>           //await 后面是一个Promise实例，如果不是也会默认转为Promise实例
>>           //直接让Promise实例的回调执行，返回执行时的参数；
>>           //await 是一个语法糖，不用then就可以拿到resolve或者reject的参数
>>      console.log(await p);
>>      let a = await p;
>>           //等await 后面的异步完后再去执行后面的代码
>>      return a;
>>      }
>>      
>>      
>>      //getA()  执行之后就有Promise对象了
>>      getA().then((res)=>{
>>          console.log(res);
>>      }).catch((e)=>{
>>          console.log(e);
>>      });

#十三：esmodule
>##1.模块导入
>>      1.1 es6模块也分  第三方(npm install 装的 都装在了node_modules),  不用./
         自定义的 需要写的./

>>      1.2 使用解构赋值，获取导出的赋值
>>      
>>      1.3 import 会变量提升   命令有提神效果，会提升到整个模块的头部首先执行
>>      
>>      1.4 虽然 import 有变量提升，但开发一般写在上面