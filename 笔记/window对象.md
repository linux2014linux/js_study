###window
```javascript
window对象所有浏览器都支持,document也是window的属性(window.document).

window尺寸
有三种方法能够确定浏览器窗口的尺寸（不包括工具栏和滚动条）。

对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：
window.innerHeight - 浏览器窗口的内部高度
window.innerWidth - 浏览器窗口的内部宽度

对于 Internet Explorer 8、7、6、5：
document.documentElement.clientHeight
document.documentElement.clientWidth
或者
document.body.clientHeight
document.body.clientWidth
```

###screen
```javascript
可用屏幕尺寸,不包括任务栏
window.screen.availHeight
window.screen.availWidth
```

###location
```javascript
// 跳转
window.location.href;
window.location.hostname;
window.location.pathname;
window.location.port;
window.location.protocol;
// 重新加载新的文档
window.location.assign("url");
```

###history
```javascript
window.history.back();
window.history.forward();
```

###定时器
```javascript
// 3s后执行alert
var t = setTimeout('alert(xia si ni!!!);', 3000);
clearTimeout(t);
```

###Cookie
```javascript
// 获取cookie的代码
function getCookie(c_name) {
    if (document.cookie.length>0) {
        var c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) { 
            c_start = c_start + c_name.length+1; 
            var c_end = document.cookie.indexOf(";",c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }            
            return unescape(document.cookie.substring(c_start,c_end));
        } 
    }
    return "";
}

```
