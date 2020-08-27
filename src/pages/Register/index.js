import React, {useState} from 'react';
import logoIMG from '../../assets/logo.svg'
import {Link , useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'

import './style.css';

export default function Register(){

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [whatsapp,setWhatsapp] = useState('')
    const [city,setCity] = useState('')
    const [uf,setUf] = useState('')

    const history = useHistory()

    async function handleRegister(e){
        e.preventDefault();
       const data = {
           name,
           email,
           whatsapp,
           city,
           uf
       }

       try {
        const res = await api.post('ongs',data)
        alert(`Seu ID de acesso: ${res.data.id}`);
        history.push('/')
       } catch (error) {
            alert('Erro no cadastro, tente novamente!')   
       }
    }

    return(
    <div className="register-container">
        <div className="content">
            <section>
            <img src={logoIMG} alt="Be a hero"/>

            <h1>Cadastro</h1>
            <p>Faça seu cadastro, entre plataforma e ajude pessoas a encontratem os casos da sua ONG</p>
            <Link to="/" className="back-link">
                    <FiArrowLeft size="16" color="#E02041"/>
                    Não tenho cadastro
                </Link>
            </section>

            <form onSubmit={handleRegister}>
            
                 <input placeholder="Nome da ONG" type="text" 
                 value={name} onChange={e => setName(e.target.value)}/>
              
                <input placeholder="Email" type="email" 
                value={email} onChange={e => setEmail(e.target.value)}/>
               
                <input placeholder="Whatsapp" type="text" 
                value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
              
                <div className="input-group">
                    <input placeholder="Cidade" type="text"  value={city} onChange={e => setCity(e.target.value)}/>
                    <input placeholder="UF" type="text" style={{width: 80}}  value={uf} onChange={e => setUf(e.target.value)}/>
                </div>

                <button className="button" type="submit" placeholder="Cadastrar">
                    Cadastrar
                </button>
            </form>
        </div>
    </div>
    )
}

