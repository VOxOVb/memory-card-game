import Card from "./Card";
import styles from "./CardContainer.module.css";
export default function CardContainer({ level, score }) {
  const quantityInRow = level === "hard" ? 8 : level === "medium" ? 6 : 4;
  const fisherYatesShuffle = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      const rand = Math.floor(Math.random() * (n - i)) + i;
      [arr[i], arr[rand]] = [arr[rand], arr[i]];
    }
    return arr;
  };
  const cardList = Array.from(
    { length: quantityInRow ** 2 / 2 },
    (_, i) => i + 1
  ).flatMap((val) => [val, val]);

  const randomCardList = fisherYatesShuffle(cardList);
  return (
    <section className={`${styles.cardContainer} ${styles[level]}`}>
      {randomCardList.map((val, i) => (
        <Card id={i} key={i} cardNum={val} score={score}/>
      ))}
    </section>
  );
}
