import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import '/src/Components/Login.css';



const Login = () => {
  return (
   <div className="container"> 
         <form>
            <img src="/src/assets/logo 2.png" alt="LoginSA/src/assets/logo 2.png" type="image/png"/>
            <h1>Seja bem vindo!</h1>
            
            <div className='input1'>
            <FaUser className="icon" />
            <input type="email" placeholder="E-mail" />
            </div>
            
            <div className='input2'>
            <FaLock className="icon" />
            <input type="password" placeholder="Senha" />
            </div>

            <div className="recall-forget"> 
                <label>
                    <input type="checkbox" />
                    Lembrar de mim
                </label>
                
                <a href=" .">Esqueceu a senha?</a>
            
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>Não tem uma conta? Cadastre-se </p>
            </div>
            <div className='icons-login'>
                 <FaApple className='icon-login'/>
                 <FcGoogle className='icon-login' />
                 <ImFacebook2 className='icon-login' />

            </div>

        </form>
   </div>
  )
}

export default Login;
