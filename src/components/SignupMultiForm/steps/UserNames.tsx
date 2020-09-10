import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from "../../../styles/Form";

import Input from "../../Input";

interface FormData {
    name: string,
    username: string;
    email: string;
    password: string;
    bio: string;
    platforms: Array<string>;
    games: Array<string>;
}


interface Props{
    formData: FormData;
    setFormData: Function;
    navigation: {
        previous?: (() => void) | undefined;
        next: () => void;
    }
}

const UserNames: React.FC<Props> = ({ formData, setFormData, navigation}) => {
    const { name, username } = formData;
    const { next, previous } = navigation;
    return(
        <Container>
            <h3> Como te chamamos? </h3>
            <form noValidate autoComplete="off">
                <Input type="text" name="Nome" label="Nome"/>
                <Input type="text" name="Username" label="Nome de Usuário"/>

                {/* Comandos invertidos */}
                <button onClick={previous}> Próximo </button>
                <button onClick={next}> Anterior </button>
            </form>
            
        </Container>
    );
}

export default UserNames;