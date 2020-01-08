import React, { Component } from "react";
import "./style.css";
import logoDisc from "./img/discography.png";

const Discography = () => {
  return (
    <>
      <div className="wrapperDisc">
        <div className="naglowek">
          <img src={logoDisc} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            vero maxime nisi, vitae in iusto aut officiis error dicta totam,
            soluta atque autem commodi sapiente ducimus assumenda. Dolores,
            corrupti dolor!
          </p>
        </div>
        <section className="discSongs">
          <div className="date">
            <span>2010</span>
            <h3>HELL AND SILENCE</h3>
          </div>
          <div className="description">
            <h1>Hell and Silence is an EP by Las Vegas rock group</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis repellat fugit cumque molestiae. Soluta quam sit beatae
              sequi ducimus esse numquam harum perferendis dicta voluptatum
              mollitia, magnam corporis fuga placeat. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illo quam laudantium id? Dignissimos
              maiores doloribus dolorem voluptatibus quasi, quae consectetur
              consequuntur sed omnis accusantium ea doloremque ducimus similique
              cum architecto?
            </p>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=QE01IxHhIgY&list=PL0LdaBNDohAldghqAzfxjtgEFmKlCQO4p"
            >
              <button className="play1"> PLAY</button>
            </a>
          </div>
        </section>
        <section className="discSongs">
          <div className="date">
            <span>2012</span>
            <h3>Night Vision</h3>
          </div>
          <div className="description">
            <h1>
              Night visions is the debut studio album by American rock band
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis repellat fugit cumque molestiae. Soluta quam sit beatae
              sequi ducimus esse numquam harum perferendis dicta voluptatum
              mollitia, magnam corporis fuga placeat. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illo quam laudantium id? Dignissimos
              maiores doloribus dolorem voluptatibus quasi, quae consectetur
              consequuntur sed omnis accusantium ea doloremque ducimus similique
              cum architecto?ANDlorem lorem
            </p>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=p8TfilfFrvg&list=PL0QyBDMHGCNm0lImEPVTTgwlmbmdszlkw"
            >
              <button className="play2"> PLAY</button>
            </a>
          </div>
        </section>
        <section className="discSongs">
          <div className="date">
            <span>2015</span>
            <h3>SMOKE + MIRRORS</h3>
          </div>
          <div className="description">
            <h1>
              The album was recorded during 2014 at the band's home studio in
              Las Vegas, Nevada
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis repellat fugit cumque molestiae. Soluta quam sit beatae
              sequi ducimus esse numquam harum perferendis dicta voluptatum
              mollitia, magnam corporis fuga placeat. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Illo quam laudantium id? Dignissimos
            </p>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=MoIT8ibf440&list=PLY12G7iTHW7JR4khFRrO92GuZq2nDP8V1"
            >
              <button className="play3"> PLAY</button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Discography;
