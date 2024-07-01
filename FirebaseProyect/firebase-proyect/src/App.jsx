/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
//importando los modulos de firebase
import appFirebase from './credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth' //getAuth traerá el objeto de autenticación y onAuthStateChanged se encargará de escuchar los cambios en la autenticación
//si esta logeado o no esta logeado 

const auth = getAuth(appFirebase) //creando una instancia de autenticación

//importar nuestros componentes
import Login from  '../src/components/Login'
import Home from '../src/components/Home'

function App() {

  const [usuario, setUsuario] = useState(null) //creando un estado para el usuario
  onAuthStateChanged(auth, (usuarioFirebase) => { //escuchando los cambios en la autenticación
    if(usuarioFirebase){ //si el usuario de firebase esta logeado
      setUsuario(usuarioFirebase)// me vas a guardar la info de ese usuario en la variable Usuario para poder usarla mas adelante 
    }
    else{
      setUsuario(null) //si no esta logeado la variable usuario sera null
    }

  })
  return (
    <div> 
      {usuario ? <Home correoUsuario = {usuario.email}/> : <Login/>} 
    </div>
  )
}


export default App
