// 该文件是整个应用的入口文件,该文件需要渲染App
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'

ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>

  
  ,document.getElementById('root'))