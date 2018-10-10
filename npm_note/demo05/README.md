如何使用全局安装的包

vim app.js放一些内容,然后依赖lodash

npm init --yes生成package.json便于我们查看

lodash会安装在<node_install_path>/lib/node_modules/中
npm install -g lodash
此时在node安装目录可以看到lodash安装成功

node app.js是会报错的,提示lodash未找到.

此时我们需要将全局的lodash连接到当前目录来
npm link lodash即可
如果没有全局安装,直接npm link <package>那么npm会先自动安装到全局目录,然后在自动连接到当前目录.

参考:https://stackoverflow.com/questions/7970793/how-do-i-import-global-modules-in-node-i-get-error-cannot-find-module-module
