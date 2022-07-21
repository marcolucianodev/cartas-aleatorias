import { HeaderContainer } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/userAuth";

const Header = () => {

  const { user } = useContext(AuthContext)

  return (
    <HeaderContainer>
      <h1>Baralho de Cartas Animal</h1>
      <span>Seja Bem-vindo: <span className="user-name">{user.name}</span></span>
    </HeaderContainer>
  )
};

export default Header;