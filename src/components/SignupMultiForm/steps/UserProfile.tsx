import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSignup } from "../../../context/Register";

import Input from "../../Input";

interface Props {
  navigation: {
    previous?: (() => void) | undefined;
    next: () => void;
  };
}

const UserProfile: React.FC<Props> = ({ navigation }) => {
  const { next, previous } = navigation;

  const dataContext = useSignup();
  if (dataContext === undefined) {
    throw new Error("Deu ruim");
  }

  const { bio, setBio } = dataContext;

  return (
    <>
      <h3> Sobre seu perfil </h3>
      <p> (Fala algo legal sobre você, se tiver né...) </p>
      <form autoComplete="off">
        <Input
          type="text"
          name="Bio"
          label="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
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

export default UserProfile;