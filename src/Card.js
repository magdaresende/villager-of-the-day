import { useState } from 'react';
import {
  faBirthdayCake,
  faPaw,
  faMars,
  faVenus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Card.module.scss';

export default function Card(villager) {
  villager = villager.villager;
  const cardStyle = {
    backgroundColor: villager['bubble-color'],
    color: villager['text-color']
  };
  const buttonStyle = {
    color: villager['bubble-color'],
    backgroundColor: villager['text-color']
  };
  const buttonCopy = 'Can you guess the name?';
  const firstRowElements = [
    {
      image: faBirthdayCake,
      text: villager['birthday-string']
    },
    {
      image: faPaw,
      text: villager.species
    },
    {
      image: villager.gender === 'Male' ? faMars : faVenus,
      text: villager.gender
    }
  ];
  const [name, setName] = useState(buttonCopy);

  const setButtonName = () => {
    name === buttonCopy
      ? setName(villager.name['name-EUen'])
      : setName(buttonCopy);
  };

  const renderRowWithImage = (element) => {
    return (
      <div className={styles.rowItems} key={element.text}>
        <FontAwesomeIcon icon={element.image} color={villager['text-color']} />
        <span className={styles.text}>{element.text}</span>
      </div>
    );
  };

  const cleanAndcapitalize = (str) => {
    str = str.split('-').join('');
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderRowWithItems = (items) => {
    return (
      <div className={styles.row}>
        {items.map((item) => {
          return (
            <div key={villager[item]}>
              <strong>{cleanAndcapitalize(item)}: </strong>
              {villager[item]}
            </div>
          );
        })}
      </div>
    );
  };

  const renderButton = () => {
    return (
      <div>
        <button
          onClick={setButtonName}
          className={styles.button}
          style={buttonStyle}
        >
          {name}
        </button>
      </div>
    );
  };

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.personalInfo}>
        <div>
          <img
            src={villager.image_uri}
            className={styles.photo}
            alt="villager"
          />
        </div>
        <div className={styles.column}>
          <div className={styles.row}>
            {firstRowElements.map((element) => {
              return renderRowWithImage(element);
            })}
          </div>
          {renderRowWithItems(['personality', 'hobby'])}
          {renderRowWithItems(['catch-phrase'])}
          {renderRowWithItems(['saying'])}
        </div>
      </div>
      {renderButton()}
    </div>
  );
}
