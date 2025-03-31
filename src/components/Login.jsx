import React, { useState } from "react";
import Imagen from '../assets/image.png' // Imagen decorativa
import ImagenProfile from '../assets/ImagenProfile.jpg' // Imagen redonda de perfil

import appFirebase from "../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase)

const Login = () => {
    const [registrando, setRegistrando] = useState(false)

    const funtAutenticaion = async(e) =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const Contraseña = e.target.password.value;
        
        if(registrando){
           try {
                 await createUserWithEmailAndPassword(auth,correo,Contraseña)
           } catch (error) {
                alert("Su contraseña tiene que tener mas de 8 caracteres")
           }
        }
        else{
            try {
                await signInWithEmailAndPassword(auth,correo,Contraseña)
            } catch (error) {
                alert("El correo o la contraseña son incorrectos")
            }

            
        }
    }


    return (
        <div className="container-login">
            {/* Card Login */}
            <div className="card-login">
                <img src={ImagenProfile} alt="Perfil" className="estilo-profile" />
                <form onSubmit={funtAutenticaion}>
                    <input type="email" placeholder="Ingresar Email" id="email"/>
                    <input type="password" placeholder="Ingresar Contraseña" id="password"/>
                    <button className="btnform">{registrando ? "Registrarse" : "Iniciar Sesión"}</button>
                </form>
                <div className="toggle-text">
                    {registrando ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
                    <button onClick={() => setRegistrando(!registrando)}>
                        {registrando ? "Inicia Sesión" : "Regístrate"}
                    </button>
                </div>
            </div>

            {/* Imagen decorativa a la derecha */}
            <img src={Imagen} alt="Decoración" className="imagen-decorativa" />
        </div>
    );
};

export default Login;
