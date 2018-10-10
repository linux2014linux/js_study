打包和使用自己的模块

mkdir demo06
cd demo06
npm init --yes
vim index.js
.....

在demo06目录执行
mkdir pkgdemo
cd pkgdemo
npm init --yes
vim index.js
exports.printMsg = function() {
    console.log("这是来自自建包的信息");
}

打包
npm pack
rm index.js
rm package.json
只留下npm pack产生的tgz文件即可

cd ../回到demo06目录
npm install ./pkgdemo安装pkgdemo,完成后在node_modules目录下会出现pgkdemo.然后即可在demo06的index.js中引用.

参考:https://blog.csdn.net/m0_37359052/article/details/78874620
