//punto de entrada de nuestra aplicacion
import React from 'react' //importa react
import ReactDOM from 'react-dom/client' 
import App from './App.jsx' 
import './index.css' //importa los estilos

ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
