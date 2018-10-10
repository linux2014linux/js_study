在package.json中指定包,然后执行npm install来安装对应的包.npm会自动扫描package.json以安装需要的包.

node app.js会报错,因为我们没有安装所需要的以来lodash.

npm install会安装package.json中指出的依赖及默认依赖.

node app.js成功输出[2, 3]
