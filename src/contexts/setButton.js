import { createContext, useState } from "react";

export const ButtonContext = createContext({});

export const ButtonProvider = ({children}) => {

  const [addCard1, setAddCard1] = useState(0)
  const [addCard2, setAddCard2] = useState(0)
  const [addCard3, setAddCard3] = useState(0)

  const handleCard1 = () => {
    setAddCard1(addCard1 + 1)
  }

  const handleCard2 = () => {
    setAddCard2(addCard2 + 1)
  }

  const handleCard3 = () => {
    if(addCard3 < 1) {
      setAddCard3(addCard3 + 1)
    } else {
      alert('VOCÊ SÓ PODE ADICIONAR 3 CARTAS. CLIQUE EM "REFRESH" E RECARREGUE Á PÁGINA')
    }
  }

  const handleReload = () => {
    window.location.reload();
  }
  
  return (
    <ButtonContext.Provider value={{addCard1, addCard2, addCard3, handleCard1, handleCard2, handleCard3, handleReload}}>
      {children}
    </ButtonContext.Provider>
  )
}

