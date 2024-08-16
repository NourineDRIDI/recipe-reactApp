import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Router from './router/Router.jsx'
import { Provider } from 'react-redux';
import store  from './store/store.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Router />
    </Provider>
  </React.StrictMode>,
)
