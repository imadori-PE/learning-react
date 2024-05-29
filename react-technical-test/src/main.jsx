//en vite los archivos js no están preparados para trabajar como jsx
// main.js debe cambiarse a main.jsx porque el transpilador porque el plugin no es capaz de transpilar
//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>,
)
