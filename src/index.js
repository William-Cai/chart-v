import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import {AppContainer} from 'react-hot-loader'

// ReactDOM.render(<App />, document.getElementById('root'))
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

registerServiceWorker()

// 测试proxy代理的代码
/*fetch('/api/getTestInfo').then(res => {
    res.json().then(data => {
        console.log(data)
    })
})*/
