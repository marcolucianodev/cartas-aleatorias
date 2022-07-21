import styled from "styled-components";

export const LoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 2%;

  .cta {
    font-size: 18px;
    margin-bottom: 30px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 400px;

  input {
    width: 100%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 30px;
    font-size: 18px;
    outline-color: #c62d1f;
  }

  button {
    box-shadow: 3px 4px 0px 0px #8a2a21;
    background:linear-gradient(to bottom, #c62d1f 5%, #f24437 100%);
    background-color:#c62d1f;
    border-radius:18px;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:18px;
    padding:7px 50px;
    text-decoration:none;
    text-shadow:0px 1px 0px #810e05;
    width: 50%;
    margin: auto;
    border: none;

    :hover {
      background:linear-gradient(to bottom, #f24437 5%, #c62d1f 100%);
      background-color:#f24437;
    }

    :active {
      position:relative;
      top:1px;
    }

    @media (max-width: 480px) {
      width: 100%;
    }

  }

  @media (max-width: 480px) {
      max-width: 300px;
    }
`;