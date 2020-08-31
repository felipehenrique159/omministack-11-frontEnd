import React,{useState} from 'react';
import {Link , useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
import './styles.css'
import logoIMG from '../../assets/logo.svg'
import heroesIMG from '../../assets/heroes.png'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api'

export default function Logon(){

  const [id , setId] = useState('')
  const history = useHistory();
  async function handleLogin(e){
    e.preventDefault();
    try {
      const res = await api.post('sessions',{id})

      localStorage.setItem('ongId',id)
      localStorage.setItem('ongName',res.data.name)

      history.push('/profile')

      console.log(res.data.name)

    } catch (error) {
      console.log('falha no login tente novamente');
    }
  }

    return(
      <div className="logon-container">
          <section className="form">
            <img src={logoIMG} alt="Be The Hero"/>
            
            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>
                <input placeholder="Sua ID"
                value={id}
                onChange={e => setId(e.target.value)}/>
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