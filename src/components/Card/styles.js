import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  gap: 20px;
`;

export const CardContent = styled.div`
  /* border: 10px solid;
  max-width: 300px;
  padding: 10px;
  border-radius: 12px;
  background-color: #EEE9AF;
  display: flex;
  flex-direction: column;
  gap: 15px; */
  max-width: 300px;
  padding: 10px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 50%);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  
  .card-name, .points {
    padding: 5px;
    border-bottom: 1px solid #CCC;
    border-radius: 10px;

    span {
      font-weight: bold;
    }
  }

  .points {
    margin-bottom: 20px;
  }

`;

export const AnimalImage = styled.div`
  background-image: url(${props => props.animalImage});
  background-size: cover;
  background-position: center;
  width: 280px;
  height: 250px;
`