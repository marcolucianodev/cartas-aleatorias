import { useContext } from "react";
import { AuthContext } from "../contexts/userAuth";
import { useNavigate } from "react-router-dom";
import { 
  Form,
  LoginContainer
} from "./styles";

const Login = () => {

  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  const getName = (e) => {
    setUser({name: e.target.value})
  }

  const handleAuth = () => {
    navigate('/cards')
  }

  return (
    <LoginContainer>
      <div className="cta">Digite um nome para ver as cartas</div>
      <Form>
        <input type="text" onChange={getName} />
        <button onClick={handleAuth}>Ver Cartas</button>
      </Form>
    </LoginContainer>
  )
}

export default Login;