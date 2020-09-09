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
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;

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

    .small-links {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      small {
        font-weight: 700;
        font-size: 14px;
        color: var(--text-white);

        transition: ease-in 0.2s;

        &:hover{
            color: var(--secondary-pink);
        }
      }

    }
  }
`;
