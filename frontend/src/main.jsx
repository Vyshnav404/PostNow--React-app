import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from 'react-router-dom'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
// import ru from 'javascript-time-ago/locale/ru.json'
TimeAgo.addDefaultLocale(en)
// TimeAgo.addLocale(en)
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000'

import { Provider } from 'react-redux'
import store from './redux/store'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  </React.StrictMode>
  </Provider>
)
