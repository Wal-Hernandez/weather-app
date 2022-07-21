import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function SecondaryCart({ cities }) {

  let { max, min, img, id, name } = cities;
  return (
    <div className={styles.secondaryCart}>
      <Link to={`ciudad/${id}`}>
        <div>{name}</div>
      </Link>

      <div>
        <div>{max}</div>
        <div>{min}</div>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="img"
      ></img>
    </div>
  );
}

export default SecondaryCart;
