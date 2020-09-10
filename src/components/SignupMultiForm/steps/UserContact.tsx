import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../../../styles/Form";

import Input from "../../Input";
import { useSignup } from "../../../context/Register";
interface Props {
  navigation: {
    previous?: (() => void) | undefined;
    next: () => void;
  };
}

const UserContact: React.FC<Props> = ({ navigation }) => {
  const { next, previous } = navigation;

  return (
    <>
      <h3> Qual seu email? </h3>
      <form autoComplete="off">
        <Input type="email" name="Email" label="email" />

        {/* comandos invertidos */}
        <div className="small-links">
          <button onClick={next}> Anterior </button>
          <button onClick={previous}> Próximo </button>
        </div>
      </form>
    </>
  );
};

export default UserContact;
