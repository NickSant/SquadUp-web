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

  const { name, setName, username, setUsername } = dataContext;

  return (
    <>
      <h3> Como devemos te chamar? </h3>
      <form autoComplete="off">
        <Input
          type="text"
          name="Nome"
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          name="Username"
          label="Nome de Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Comandos invertidos */}
        <div className="small-links">
          <button onClick={next}> Anterior </button>
          <button onClick={previous}> Próximo </button>
        </div>
      </form>
    </>
  );
};

export default UserNames;
