import React from 'react';
import logoIMG from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './style.css';

export default function Register(){
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
            <form>
            
            <input placeholder="Nome da ONG" type="text"/>
                <input placeholder="Email" type="email"/>
                <input placeholder="Whatsapp" type="text"/>
              
                <div className="input-group">
                    <input placeholder="Cidade" type="text"/>
                    <input placeholder="UF" type="text" style={{width: 80}}/>
                </div>

                <button className="button" type="submit" placeholder="Cadastrar">
                    Cadastrar
                </button>
            </form>
        </div>
    </div>
    )
}

