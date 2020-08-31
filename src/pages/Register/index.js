import React, {useState} from 'react';
import logoIMG from '../../assets/logo.svg'
import {Link , useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api'

import './style.css';

export default function Register(){

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [whatsapp,setWhatsapp] = useState('')
    const [city,setCity] = useState('')
    const [uf,setUf] = useState('')
    // const [ufs,setUfs] = useState('')
    const history = useHistory()
    
    
    // useEffect(() =>{
    //     api.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res=>{
    //       const ufs = res.data.map(uf => uf.sigla)
    //      setUfs(ufs)
    //     })
    // },[])
    
    
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
        console.log(res)
        if(res.data !== null || res.data !== undefined){     
            // alert(`Seu ID de acesso: ${res.data.id}`);
            console.log(res.data);
            // toast.info('ONG cadastrada com sucesso!', {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // });
            toast.info(`Anote seu ID de acesso: ${res.data}`, {
                position: "top-right",
                // autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            history.push('/') //redireciona pra tela de logon
        
        }
       
       } catch (error) {
            console.log(error)
            console.log('erro ao gravar')
            toast.error('Erro no cadastro, tente novamente!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }); 
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
                 value={name} onChange={e => setName(e.target.value)} required/>
              
                <input placeholder="Email" type="email" 
                value={email} onChange={e => setEmail(e.target.value)} required/>
               
                <input placeholder="Whatsapp" type="text" 
                value={whatsapp} onChange={e => setWhatsapp(e.target.value)} required/>
              
                <div className="input-group">
                    <input placeholder="Cidade" type="text"  value={city} onChange={e => setCity(e.target.value)} required/>
                    <input placeholder="UF" type="text" style={{width: 80}}  value={uf} onChange={e => setUf(e.target.value)} required/>
                </div>
              
                
                <button className="button" type="submit" placeholder="Cadastrar">
                    Cadastrar
                </button>
            </form>

            
           
        </div>
    </div>
    )
}

