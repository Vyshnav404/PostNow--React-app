import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter} from 'react-router-dom'
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
// import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
// TimeAgo.addLocale(en)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  </React.StrictMode>,
)
