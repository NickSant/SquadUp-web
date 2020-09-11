import React from 'react';
import { useStep } from 'react-hooks-helper';

import UserNames from "./steps/UserNames";
import UserContact from "./steps/UserContact";
import UserPassword from "./steps/UserPassword";
import UserProfile from './steps/UserProfile';

const steps = [ "user-info",  "user-contact", "user-password", "user-profile", "user-games", ];

const MultiStepForm = () => {
    const { step, navigation} = useStep({ initialStep: 0, steps})
    const id = step.valueOf().toString();

    const props = { navigation };

    switch(id){
        case "user-info":
            return <UserNames {...props} />;
        case "user-contact":
            return <UserContact {...props} />;
        case "user-password":
            return <UserPassword {...props} />
        case "user-profile":
            return <UserProfile {...props} />
        default: 
            return <h3> O que foi que tu fez? Melhor vazar </h3>
    }

    /* return <h1>Hello</h1>  */


}

export default MultiStepForm;