import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;

  h1 {
    font-family: 'Rubik Moonrocks', cursive;
  }

  span {
    font-size: 20px;

    .user-name {
      font-weight: bold;
      color: #FF0000;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;

    h1 {
      order: 2;
      text-align: center;
    }
  }
`;