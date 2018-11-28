安装依赖
npm install --save-dev

打包
在package.json的scripts中添加build: "webpack"
npm run build == node ./node_modules/webpack/bin/webpack.js

部署到ng
将dist部署到ng的目录,即可访问.
