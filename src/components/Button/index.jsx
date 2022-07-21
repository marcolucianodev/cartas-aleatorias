import { useContext } from "react";
import { ButtonContext } from "../../contexts/setButton";
import { ButtonContent } from "./styles";

export const ButtonFirst = () => {

  const { handleCard1 } = useContext(ButtonContext);

  return (
    <ButtonContent onClick={handleCard1}>+ Adicionar carta</ButtonContent>
  )
}


export const ButtonSecond = () => {

  const { handleCard2} = useContext(ButtonContext);

  return (
    <ButtonContent onClick={handleCard2}>+ Adicionar carta</ButtonContent>
  )
}


export const ButtonThird = () => {

  const { handleCard3 } = useContext(ButtonContext);

  return (
    <ButtonContent onClick={handleCard3}>+ Adicionar carta</ButtonContent>
  )
}

export const ReloadButton = () => {

  const { handleReload } = useContext(ButtonContext);

  return (
    <ButtonContent onClick={handleReload}>Refresh</ButtonContent>
  )
}