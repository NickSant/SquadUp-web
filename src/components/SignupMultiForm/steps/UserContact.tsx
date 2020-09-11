import React from "react";
import { Link } from "react-router-dom";

import { useSignup } from "../../../context/Register";

import Input from "../../Input";
interface Props {
  navigation: {
    previous?: (() => void) | undefined;
    next: () => void;
  };
}

const UserContact: React.FC<Props> = ({ navigation }) => {
  const { next, previous } = navigation;

  const dataContext = useSignup();
  if (dataContext === undefined) {
    throw new Error("Deu ruim");
  }

  const { email, setEmail } = dataContext;
  return (
    <>
      <h3> Qual seu email? </h3>
      <p> (Relaxa, a gente não vai ficar te enviando curso de investimento) </p>
      <form autoComplete="off">
        <Input
          type="email"
          name="Email"
          label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* comandos invertidos */}
        <div className="footer-buttons">
          <button onClick={previous}> Anterior </button>
          <button onClick={next}> Próximo </button>
        </div>
        <div className="footer-links">
          <Link to="/">
            <small> Já tem cadastro? </small>
          </Link>
        </div>
      </form>
    </>
  );
};

export default UserContact;
