## 开始
create-react-app 脚手架构建工程

## 日志记录
###2018-3-15
1、创建工程并使用命令`npm run eject`，将工程设置为自定义配置  
2、使用package.json配置代理proxy
```json
{
 "proxy": {
    "api": {
      "target": "http://localhost:8080",
      "changeOrigin": true
    }
  }
}
```  
在`index.js`中写入请求
```js
fetch("/api/getTestInfo").then(res => {
    res.json().then(data => {
        console.log(data)
    })
})
```
3、配置LESS  
使用命令`yarn add less less-loader -D`  
修改配置`config/webpack.config.dev.js` and `config/webpack.config.prod.js`
```
test: /\.css$/ -> test: /\.css|less$/,

importLoaders: 2, // 2018-3-15 从1->2

use中新增less-loader
{ // 2018-3-15 新增less-loader
  loader: 'less-loader'
}
```

4、模块化热更新
模块热更新通俗的说就是不刷新页面更新的模块自己更新。
命令`yarn add react-hot-loader -D`，修改`config/webpack.config.dev.js`
在babel-loader中添加一个plugins。
```
plugins: ['react-hot-loader/babel']
```

修改入口文件`src/index.js`
```
// ReactDOM.render(<App />, document.getElementById('root'));
// 模块化热部署
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component></Component>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
```
