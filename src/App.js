import styles from "./App.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";

const villager = require("./villager.json");
const cardStyle = {
  backgroundColor: villager["bubble-color"],
  color: villager["text-color"],
};
const buttonStyle = {
  color: villager["bubble-color"],
  backgroundColor: villager["text-color"],
};
const BUTTON_COPY = "Can you guess the name?";

function App() {
  const [name, setName] = useState(BUTTON_COPY);

  const cleanAndcapitalize = (str) => {
    str = str.split("-").join("");
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderItem = (item) => {
    return (
      <div>
        <strong>{cleanAndcapitalize(item)}: </strong>
        {villager[item]}
      </div>
    );
  };

  const renderRowWithItems = (items) => {
    return (
      <div className={styles.row}>
        {items.map((item) => {
          return renderItem(item);
        })}
      </div>
    );
  };

  const setButtonName = () => {
    name === BUTTON_COPY
      ? setName(villager.name["name-EUen"])
      : setName(BUTTON_COPY);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Villager of the day</div>
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
              <div className={styles.rowItems}>
                <FontAwesomeIcon
                 icon={faBirthdayCake}
                  color={villager["text-color"]}
                />
                {/* <img className={styles.cake} src={cake} alt="Birthday" /> */}
                {villager["birthday-string"]}
              </div>
              {["species", "gender"].map((item) => {
                return renderItem(item);
              })}
            </div>
            {renderRowWithItems(["personality", "hobby"])}
            {renderRowWithItems(["catch-phrase"])}
            {renderRowWithItems(["saying"])}
          </div>
        </div>
        <div>
          <button
            onClick={setButtonName}
            className={styles.button}
            style={buttonStyle}
          >
            {name}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
