import React from 'react';
import logoIMG from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './style.css';

export default function NewIncident(){
    return(
    <div className="new-incident-container">
        <div className="content">
            <section>
            <img src={logoIMG} alt="Be a hero"/>

            <h1>Cadastrar novo caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
            <Link to="/profile" className="back-link">
                    <FiArrowLeft size="16" color="#E02041"/>
                   Voltar para Home
                </Link>
            </section>
            <form>
            
            <input placeholder="Título do caso" type="text"/>
                
               
                <textarea placeholder="Descrição" cols="30" rows="10"></textarea>
              
                <input placeholder="Valor em reais" type="text"/>
                <button className="button" type="submit" placeholder="Cadastrar">
                    Cadastrar
                </button>
            </form>
        </div>
    </div>
    )
}

