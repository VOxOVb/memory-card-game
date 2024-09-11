import { useState } from "react";
import styles from "./Card.module.css";
const BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
export default function Card({ id, cardNum, score }) {
  const [cardNumIsSelected, setCardNumIsSelected] = useState([]);
  const [cardIsFliped, setCardIsFliped] = useState([]);
  const handleClick = (cardNum, id) => {
    setCardNumIsSelected([...cardNumIsSelected, cardNum]);
    setCardIsFliped([...cardIsFliped, id]);
    console.log(cardNumIsSelected, cardIsFliped);
  };
  return (
    <div
      id={id}
      className={`${styles.card} ${
        cardIsFliped.includes(id) && styles.aniFlip
      }`}
      onClick={() => handleClick(cardNum, id)}
    >
      <div className="card-front"></div>
      <img className="card-back" src={`${BASE_URL}${cardNum}.png`} />
    </div>
  );
}
