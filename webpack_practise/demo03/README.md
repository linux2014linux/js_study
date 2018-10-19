安装依赖
npm install --save-dev

打包
在package.json的scripts中添加build: "webpack"
npm run build == node ./node_modules/webpack/bin/webpack.js

部署到ng
将dist部署到ng的目录,即可访问.

css资源 style-loader css-loader
图片资源 file-loader
字体资源 file-loader
数据资源 csv-loader xml-loader

问题
字体为woff时,字体可被正常渲染.但当字体资源是otf时,页面字体无法渲染出来,很奇怪.
