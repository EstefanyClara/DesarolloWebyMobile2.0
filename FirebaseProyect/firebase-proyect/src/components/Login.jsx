import React, {useState} from 'react'
import Imagen from '../assets/logo.png'
import ImagenPerfil from '../assets/damon.jpg'

import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)


const Login = () => {

    const [registrando, setRegistrando] = useState(false)
    const functAutentication = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const constrasenia= e.target.password.value;
        if(registrando){
            try{
                await createUserWithEmailAndPassword(auth, correo, constrasenia)
            }catch (error){
                alert("Asegurese que la contraseña tenga al menos 6 caracteres y que el correo sea valido")
            }
            
        }else{
            try{
               await signInWithEmailAndPassword(auth, correo, constrasenia)
            }catch (error){
                alert("El correo o la contraseña son incorrectos")
            }
            
        }
    }

  return (
    <div className='container'>
        <div className="row">
            <div className='col-md-4'>
                <div className="padre">
                    <div className="card card-body shadow-lg">
                        <img src={ImagenPerfil} alt="imagen" className='estilo-profile'/>
                        <form onSubmit={functAutentication}>
                            <input type="text" placeholder='Ingresar email' className='cajatexto' id='email'/>
                            <input type="password" placeholder='Ingresar contrasna'  className='cajatexto' id='password'/>
                            <button className='btnForm'>{registrando ? "Registrate" : "Inicia sesion" } </button>
                        </form>
                            <h4 className='texto'>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta" }<button className='btnswitch' onClick={()=>setRegistrando(!registrando) }>{ registrando ? "Inicia sesion" : "Registrate" }</button></h4>
                    </div>
                </div>
            </div>


            <div className="col-md-8">
                <img src={Imagen} alt="imagen" className='tamanio-imagen'/>
            </div>
        </div>
    </div>
  )
}

export default Login
