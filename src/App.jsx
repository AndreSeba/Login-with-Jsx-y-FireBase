import { useState } from 'react'
import appFirebase from './credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(appFirebase)
import './App.css'
import Login from './components/Login'
import Home from './components/Home'

function App() {

 const [usuario, setUsuario] = useState(null)

 
 onAuthStateChanged(auth,(usuarioFireBase) =>{
  if(usuarioFireBase){
    setUsuario(usuarioFireBase)
  }
  else
  {
    setUsuario(null)
  }
 })
  return (

      <div>
          {usuario ? <Home correoUsuario = {usuario.email} /> :<Login/>}
      </div>


  )
}

export default App
