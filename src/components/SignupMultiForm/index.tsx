import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';

import UserNames from "./steps/UserNames";
import UserContact from "./steps/UserContact";

const steps = [ "user-info",  "user-contact", "password", "user-games", ];

interface FormData {
    name: string,
    username: string;
    email: string;
    password: string;
    bio: string;
    platforms: Array<string>;
    games: Array<string>;
}

const defaultFormData = {
    name: "",
    username: "",
    email: "",
    password: "",
    bio: "",
    platforms: [],
    games: [],
}

const MultiStepForm = () => {
    const [formData, setFormData] = useForm<FormData>(defaultFormData);
    const { step, navigation} = useStep({ initialStep: 0, steps})
    const id = step.valueOf().toString();

    const props = { formData, setFormData, navigation};

    switch(id){
        case "user-info":
            return <UserNames {...props} />;
        case "user-games":
            return <UserContact {...props} />;
        default: 
            return <h1> Defaulllttt </h1>
    }

    /* return <h1>Hello</h1>  */


}

export default MultiStepForm;