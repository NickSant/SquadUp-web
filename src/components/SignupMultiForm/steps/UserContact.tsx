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

const UserContact: React.FC<Props> = ({ formData, setFormData, navigation}) => {
    const { email } = formData;
    const { next, previous } = navigation;
    return(
        <Container>
            <h3> Qual seu email? </h3>
            <form autoComplete="off">
                <Input type="email" name="Email" label="email"/>
                
                {/* comandos invertidos */}
                <button onClick={previous}> Próximo </button>
                <button onClick={next}> Anterior </button>
            </form>
            
        </Container>
    );
}

export default UserContact;