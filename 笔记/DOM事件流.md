### DOM Level
DOM Level类似于版本,现在有DOM Level 0, 2, 3.依次支持的元素和事件更多.
### 事件流类型
* 冒泡事件流

事件传播从最特定的事件目标到最不特定的事件目标,即从DOM树的叶子到根结点.比如点击事件传播顺序是document->html->body->div.
* 捕获事件流

事件传播从最不特定的事件目标到最特定的事件目标.即从根结点到叶子结点.比如点击事件的传播顺序是div->body->html->document.

各个浏览器对于冒泡事件基本都支持,略有细微差别,细节问题需查看各家实现.
参考:

###事件流
现在的DOM标准采用冒泡+捕获,两种事件流都会触发DOM所有对象,从document开始,在document结束.原理上如下:
![图片alt](./DOM事件流.png)

DOM标准定义事件处理分为3阶段:
1. 事件捕获阶段 实际目标div在捕获阶段不会接收事件.
2. 处于目标阶段 事件在div上发生并处理,此过程被看做冒泡的一部分.
3. 冒泡阶段 事件传回文档.

**注意** 
1. "DOM2级别事件"规定事件捕获阶段不会涉及事件目标,但各个浏览器在实现时都在捕获阶段将事件传递到了目标.所以通常目标事件会有2次操作.
2. 并非所有的事件都会经过冒泡阶段.所有事件都会经过捕获阶段和处于阶段.获得输入焦点的focus事件和失去输入焦点的blur事件就不会经过冒泡事件.

```javascript
var ele = document.getElementById('test');
// true表示捕获阶段的事件
ele.addEventListener('click', function () {
    console.log('捕获阶段的事件');
}, true);
// false表示冒泡阶段的事件
ele.addEventListener('click', function () {
    console.log('冒泡阶段的事件');
}, false);
```
###on 和 addEventListener的区别
* on,后面的事件会覆盖前面的事件,最终只会执行最后1个.on的事件属于冒泡阶段执行.
* addEventListener,可以指定事件在捕获阶段执行还是在冒泡阶段执行.其次,addEventListener可以绑定多次,而且不会覆盖(完全相同的函数将被覆盖).
* event.stopPropagation用于阻止事件的近一步捕获和冒泡.
* removeEventListener无法移除添加的匿名事件处理函数.
###事件代理
事件代理,将事件绑定在父元素,通过捕获或者冒泡原理处理子元素的行为.





