import React from 'react';
import { useStep } from 'react-hooks-helper';

import UserNames from "./steps/UserNames";
import UserContact from "./steps/UserContact";
import { useSignup } from '../../context/Register';

const steps = [ "user-info",  "user-contact", "password", "user-games", ];

const MultiStepForm = () => {
    const { step, navigation} = useStep({ initialStep: 0, steps})
    const id = step.valueOf().toString();

    const props = { navigation };

    switch(id){
        case "user-info":
            return <UserNames {...props} />;
        case "user-games":
            return <UserContact {...props} />;
        default: 
            return <h1> hello </h1>
    }

    /* return <h1>Hello</h1>  */


}

export default MultiStepForm;