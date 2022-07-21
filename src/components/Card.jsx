import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";

export default function Card({
  min,
  max,
  name,
  img,
  onClose,
  id,
  primary,
  temp,
}) {
  return primary ? (
    <div className={styles.cardWelcome}>
      <h1 className={styles.textWelcome}>find your country or region</h1>
    </div>
  ) : (
    <div className={styles.cardContainer}>
      <div className={styles.primary}>
        <FaTimesCircle onClick={onClose} className={styles.mainButton} />

        <Link to={`ciudad/${id}`}>
          <h1 className={styles.mainCardTitle}>{name} </h1>
        </Link>
      </div>
      <div className={styles.primaryFlex}>
        <p className={styles.mainCardTemp}>{temp}</p>
        {img && (
          <img
            className={styles.mainIcon}
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt={name}
          />
        )}
      </div>
    </div>
  );
  /*   <div className="card">
      <div id="closeIcon" className="row">
        <button onClick={onClose} className="btn btn-sm btn-danger">
          X
        </button>
      </div>
      <div className="card-body">
        <Link to={`ciudad/${id}`}>
          <h5 className="card-title">{name}</h5>
        </Link>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>{max}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="iconoClima"
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="80"
              height="80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div> */
}
