import styles from './styles/App.module.scss';
import Card from './Card.js';

const villager = require('./villager.json');

export default function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Villager of the day</div>
      <Card villager={villager} />
    </div>
  );
}
