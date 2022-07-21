import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5%;
  gap: 10px;

  a {
    color: #c62d1f;
    text-decoration: none;
    transition: all 1s;

    :hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 480px){
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`