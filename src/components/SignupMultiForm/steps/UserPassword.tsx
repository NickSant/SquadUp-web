import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

import { useSignup } from "../../../context/Register";

import { Container } from "../../../styles/Form";

import Input from "../../Input";

interface Props {
  navigation: {
    previous?: (() => void) | undefined;
    next: () => void;
  };
}

const UserNames: React.FC<Props> = ({ navigation }) => {
  const { next, previous } = navigation;

  const dataContext = useSignup();
  if (dataContext === undefined) {
    throw new Error("Deu ruim");
  }

  const { password, setPassword } = dataContext;

  return (
    <>
      <h3> Defina uma senha </h3>
      <p> (Se for botar seu nome + 123 é melhor nem entrar...) </p>
      <form autoComplete="off">
        <Input
          type="password"
          name="Senha"
          label="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Comandos invertidos */}
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

export default UserNames;
