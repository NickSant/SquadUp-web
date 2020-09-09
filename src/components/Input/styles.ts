import styled from "styled-components";

export const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
`;

export const TextLabel = styled.label`
    position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: var(--text-white);
`;

export const TextInput = styled.input`
  width: 100%;
  height: 3rem;
  border: 0;
  border-bottom: 2px solid var(--text-white);
  border-radius: 5px 5px 0 0;

  outline: 0;
  font-size: 1.2rem;
  color: var(--text-white);
  padding: 7px 7px;
  background: var(--primary-lighter-blue);
  transition: border-color 0.5s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${TextLabel} {
    font-size: 1rem;
    cursor: text;
    top: 25px;
  }
  &:focus {
  ~ ${TextLabel} {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: var(--secondary-pink);
    font-weight:700;    
  }
  padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, var(--secondary-pink), var(--secondary-pink));
  border-image-slice: 1;
}
`;