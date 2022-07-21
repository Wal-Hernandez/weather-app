import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import ScrollBarCards from "../components/ScrollBarCards";
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import { Ciudad } from "../components/Ciudad.jsx";
import { About } from "../components/About.jsx";
import styles from "./MainView.module.css";

const apiKey = process.env.APIKEY;

function MainView() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: recurso.main.temp_min,
            max: recurso.main.temp_max,
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.boxFlex}>
          <div className={styles.mainNav}>
            <Route path="/" render={() => <Nav onSearch={onSearch} />} />
          </div>
          <div className={styles.mainCity}>
            <Switch>
              <Route path="/about" component={About} />
              <Route
                exact
                path="/ciudad/:ciudadId"
                render={({ match }) => (
                  <Ciudad city={onFilter(match.params.ciudadId)} />
                )}
              />

              <Route
                path="/"
                render={() => (
                  <Cards
                    cities={cities}
                    onClose={onClose}
                    onSearch={onSearch}
                  />
                )}
              />
            </Switch>
          </div>

          <div className={styles.mainCities}>
            <Route path="/" render={() => <ScrollBarCards cities={cities} />} />
          </div>
        </div>
      </section>
    </>
  );
}
export default MainView;
