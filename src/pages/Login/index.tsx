import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "../../styles/Form";

import Input from "../../components/Input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <h1> Entrar no SquadUp </h1>
      <form noValidate autoComplete="off">
        <Input
          type="email"
          name="Email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          name="Senha"
          label="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button> Entrar </button>
        <div className="footer-links">
          <Link to="/">
            <small> Esqueceu sua senha? </small>
          </Link>

          <Link to="/Signup">
            <small> Ainda não tem cadastro? </small>
          </Link>
        </div>
      </form>
    </Container>
  );
}

export default Login;
