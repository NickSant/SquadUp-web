import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > h1 {
    font-family: Montserrat, sans-serif;
    color: var(--text-white);
    font-weight: 700;
    padding: 3px;
    border-bottom: 3px solid var(--secondary-pink);
    margin-bottom: 20px;
  }

  > h3 {
    font-family: Montserrat, sans-serif;
    color: var(--text-white);
    font-weight: 700;
    font-size: 25px;
  }

  > p {
    font-family: Montserrat, sans-serif;
    color: var(--text-white);
    margin-top: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;

    width: 100%;
    max-width: 500px;

    button {
      width: 100%;
      height: 60px;
      padding: 10px;
      border-radius: 10px;

      font-size: 20px;
      font-weight: 700;
      color: var(--text-white);
      background: var(--secondary-pink);

      margin: 20px 0;
      transition: ease-in 0.2s;

      &:hover {
        background: none;
        color: var(--secondary-pink);
        border: 2px solid var(--secondary-pink);
      }
    }

    .footer-links {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      
      small {
        font-weight: 700;
        font-size: 14px;
        color: var(--text-white);
        margin: 20px 10px;

        transition: ease-in 0.2s;

        &:hover{
            color: var(--secondary-pink);
        }
      }

    }

    .footer-buttons{
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;

      button{
        width: 150px;
        margin: 20px 10px;
      }
    }
  }
`;
