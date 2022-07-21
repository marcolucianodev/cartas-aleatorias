import styled from "styled-components";

export const ButtonContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0 2%;
  margin-top: 30px;

  @media(max-width: 480px) {
    flex-direction: column;
  }  
`

export const ButtonContent = styled.button`
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
  border: none;

  :hover {
    background:linear-gradient(to bottom, #f24437 5%, #c62d1f 100%);
    background-color:#f24437;
  }

  :active {
    position:relative;
    top:1px;
  }

  @media(max-width: 480px) {
    width: 100%;
  }

`;
