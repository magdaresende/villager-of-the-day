import styles from './styles/App.module.scss';
import Card from './Card.js';

const villagers = require('./villagers.json');

export default function App() {
  const villagerID = getRandomIntInclusive();
  const villagerCode = getKeyByValue(villagers, villagerID);
  const villager = villagers[villagerCode];

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Who is this villager?</div>
      <Card villager={villager} />
    </div>
  );
}

function getRandomIntInclusive() {
  const min = 1;
  const max = 391;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key].id === value);
}
