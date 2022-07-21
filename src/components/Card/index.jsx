import { useState, useEffect } from "react";
import { 
  AnimalImage,
  CardContainer, 
  CardContent 
} from "./styles";

const Card = () => {

  const [card, setCard] = useState([])

  useEffect(() => {

    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
      .then(response => response.json())
      .then(data => setCard(data))

  }, [])

  //Função que gera número aleatório nos CARDS, descrito como "POINTS".
  const getValue = Math.floor(Math.random() * 10)
  
  return (
        <CardContainer>

              <CardContent key={card.id}>
                <AnimalImage animalImage={card.image_link} />
                <p className="card-name"><span>Name:</span> {card.name}</p>
                <p className="card-name"><span>Length(min - máx):</span> {card.length_min} - {card.length_max} inch</p>
                <p className="card-name"><span>Weight(min - máx):</span> {card.weight_min} - {card.weight_max} lb</p>
                <p className="card-name"><span>Geo Range:</span> {card.geo_range}</p>
                <p className="card-name"><span>Habitat:</span> {card.habitat}</p>
                <p className="points"><span>Points:</span> {getValue}</p>
              </CardContent>
          
        </CardContainer>
  )
}

export default Card;