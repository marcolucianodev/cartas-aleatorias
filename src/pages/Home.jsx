import Card from "../components/Card";
import { Container } from "../components/Container";
import Header from "../components/Header";

import { useContext } from "react";

import { ButtonFirst, ButtonSecond, ButtonThird, ReloadButton } from "../components/Button";
import { ButtonContext } from "../contexts/setButton";
import { Footer } from "../components/Footer/styles";
import { ButtonContainer } from "../components/Button/styles";

const Home = () => {

  const { addCard1, addCard2, addCard3 } = useContext(ButtonContext)

  const handleRefresh = () => {
    window.location.reload();
  }

  return (
    <div>
      <Header />
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        {addCard1 ? <Card /> : ''}
        {addCard2 ? <Card /> : ''}
        {addCard3 ? <Card /> : ''}

      </Container>
      <ButtonContainer>

        {addCard1 ? <>{addCard2 ? <ButtonThird /> : <ButtonSecond />} </>: <><ButtonFirst /></>}

        <ReloadButton onClick={handleRefresh}>CARREGAR</ReloadButton>

      </ButtonContainer>
      <Footer>
        <p>Desenvolvido por Marco Luciano</p>
        <p><a href="https://www.linkedin.com/in/marcolucianodev/">Linkedin</a> | <a href="https://github.com/marcolucianodev">GitHub</a></p>
      </Footer>
    </div>
  )
}

export default Home;