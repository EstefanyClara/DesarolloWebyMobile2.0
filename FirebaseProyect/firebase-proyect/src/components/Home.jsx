import React from 'react'
import appFirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(appFirebase)


const Home = () => {
  return (
    <div>
        <h2>Bienvenido<button className='btn btn-primary' onClick={()=> signOut(auth)}>Log out</button></h2>
    </div>
  )
}

export default Home