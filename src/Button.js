import Confetti from 'react-dom-confetti';
import styles from './styles/Button.module.scss';

const confettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
};

export default function Button(props) {
  const buttonStyle = {
    color: props.textColor,
    backgroundColor: props.buttonColor
  };
  return (
    <div>
      <button
        onClick={props.handleButtonClick}
        className={styles.button}
        style={buttonStyle}
      >
        {props.buttonName}
        <div className={styles.confetti}>
          <Confetti
            active={props.buttonName !== props.buttonCopy}
            config={confettiConfig}
          />
        </div>
      </button>
    </div>
  );
}
