import React, { Component } from "react";
import "./style.css";
import logoLatter from "./img/latterCompositions.png";

const LatterCompsitionsHeader = props => {
  return (
    <div className="naglowek">
      <img src={logoLatter} alt="logoLatter" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, vero
        maxime nisi, vitae in iusto aut officiis error dicta totam, soluta atque
        autem commodi sapiente ducimus assumenda. Dolores, corrupti dolor!
      </p>
    </div>
  );
};

export default LatterCompsitionsHeader;
