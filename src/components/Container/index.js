import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 2%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: auto;
  gap: 10px;
`;