import React from "react";
import styles from "./Cards.module.css";

import Card from "./Card.jsx";

export default function Cards({ cities, onClose, onSearch }) {
  let city = cities[cities.length - 1] || { primary: true };

  return (
    <div className={styles.cards}>
      <Card
        primary={city.primary}
        key={city.id}
        id={city.id}
        max={city.max}
        min={city.min}
        name={city.name}
        img={city.img}
        temp={city.temp}
        onClose={() => onClose(city.id)}
      />
    </div>
  );
}
