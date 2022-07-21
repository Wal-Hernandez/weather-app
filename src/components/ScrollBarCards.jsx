import React from "react";
import SecondaryCart from "./SecondaryCart";

function ScrollBarCards({ cities }) {
  return cities.map((obj) => {
    return <SecondaryCart cities={obj} key={obj.id} />;
  });
}

export default ScrollBarCards;
