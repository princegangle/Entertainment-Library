import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './Store/store.js'
import Details from './pages/details/Details.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>

   <div>
   <App /> 
   
  
   </div>
   
   
 </Provider>
,
)
