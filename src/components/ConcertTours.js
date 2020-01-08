import React, { Component } from "react";
import "./style.css";
import logoConcert from "./img/concertTours.png";

const ConcertTours = () => {
  return (
    <>
      <div className="wrapperConcert">
        <div className="naglowek">
          <img src={logoConcert} alt="logoConcert" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            vero maxime nisi, vitae in iusto aut officiis error dicta totam,
            soluta atque autem commodi sapiente ducimus assumenda. Dolores,
            corrupti dolor!
          </p>

          <section className="descTours">
            <div className="date">
              <span>03.08.2015</span>
              <h3>SMOKE + MIRRORS TOURS</h3>
            </div>
            <div className="present">
              <p>2015-present</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis
                earum quo quasi temporibus qui iure ea atque ad explicabo
                aspernatur sint, dolores ipsam sequi neque ducimus accusamus
                vero repellendus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Alias ipsam quidem a voluptate dolor hic modi
                aspernatur esse dicta. o dolore autem corrupti fugit aliquid
                ipsum possimus nesciunt!
              </p>
              <button className="buyOnline">Buy online ></button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ConcertTours;
