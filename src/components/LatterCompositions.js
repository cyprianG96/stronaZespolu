import React, { Component } from "react";
import "./style.css";

const LatterCompositions = props => {
  return (
    <>
      <div className="wrapperLatter">
        <section className="songPlayer">
          <div className="aboutSong">
            <div className="date">
              <span>{props.add}</span>
              <h3>{props.artist}</h3>
            </div>
            <h1>{props.title}</h1>
            <p>{props.descripctions}</p>
            <a target="_blank" className="visit" href={props.itunes}>
              Visit the iTunes <i class="fas fa-angle-right" />
            </a>
            <div className="likes">
              <span>
                <i class="fas fa-volume-down" />
                {props.audio}
              </span>

              <span>
                <i class="fas fa-heart" />
                {props.likes}
              </span>

              <span>
                <i class="fas fa-comment-alt" />
                {props.coments}
              </span>
            </div>
          </div>
          <div className="square" />
          <div className="video">
            <iframe src={props.url} />
          </div>
        </section>
      </div>
    </>
  );
};

export default LatterCompositions;
