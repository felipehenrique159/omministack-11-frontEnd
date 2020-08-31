import React from 'react';
import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import './styles.css'
import logoIMG from '../../assets/logo.svg'
import heroesIMG from '../../assets/heroes.png'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Logon(){
    return(
      <div className="logon-container">
          <section className="form">
            <img src={logoIMG} alt="Be The Hero"/>
            
            <form>
                <h1>Faça seu logon</h1>
                <input placeholder="Sua ID"/>
                <button type="submit" className="button">Entrar</button>
                <Link to="/register" className="back-link">
                    <FiLogIn size="16" color="#E02041"/>
                    Não tenho cadastro
                </Link>
            </form>
        
          </section>

          
          <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
                <ToastContainer />

          <img src={heroesIMG} alt="Heroes"/>
      </div>
    )
}