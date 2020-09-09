import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from "../../styles/Form";

import MultiStepForm from '../../components/SignupMultiForm';

export default function Signup(){
    return(
        <Container>
            <h1> Registrar no SquadUp </h1>
        
            <MultiStepForm />
            
        </Container>
    );
}