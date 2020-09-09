import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from "../../styles/Form";

import Input from "../../components/Input";

export default function Login(){
    return(
        <Container>
            <h1> Entrar no SquadUp </h1>
            <form noValidate autoComplete="off">
                <Input type="email" name="Email" label="Email"/>
                <Input type="password" name="Senha" label="Senha"/>

                <button> Entrar </button>
                <div className="small-links">
                <Link to="/"><small> Esqueceu sua senha? </small></Link>
                
                <Link to="/Signup"><small> Ainda não tem cadastro? </small></Link>
            </div>
            </form>
            
        </Container>
    );
}