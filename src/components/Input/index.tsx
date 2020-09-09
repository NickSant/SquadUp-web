import React, {InputHTMLAttributes} from "react";

import { FormGroup, TextInput, TextLabel } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string;
}

const Input: React.FC<InputProps> = ({label, name, ...rest}) => {
  return(
    <FormGroup>
        <TextInput placeholder={name} id={name} {...rest}/>
        <TextLabel htmlFor={name}> {label} </TextLabel>
    </FormGroup>
  );
}

export default Input;