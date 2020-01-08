import React, { Component } from "react";
import "./style.css";
import Header from "./Header";
import Discography from "./Discography";
import ConcertTours from "./ConcertTours";
import LatterCompositions from "./LatterCompositions";
import LatterCompsitionsHeader from "./LatterCompositionsHeader";
import Dashboard from "./Dashboard";

class App extends Component {
  state = {
    songs: [],
    open: false,
    active: false
  };

  componentDidMount() {
    fetch("songs.json")
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(data => {
        this.setState({
          songs: data.songs
        });
      });
  }

  scrollToAbout = () => {
    const wrapper = document.querySelector(".wrapper").offsetTop;
    window.scrollTo({
      top: wrapper,
      left: 0,
      behavior: "smooth"
    });
  };

  scrollToDiscography = () => {
    window.scrollTo({
      top: document.querySelector(".wrapperDisc").offsetTop,
      left: 0,
      behavior: "smooth"
    });
  };

  scrollToWrapConc = () => {
    window.scrollTo({
      top: document.querySelector(".wrapperConcert").offsetTop,
      left: 0,
      behavior: "smooth"
    });
  };

  scrollToWrapperLatter = () => {
    window.scrollTo({
      top: document.querySelector(".wrapperLatterX").offsetTop,
      left: 0,
      behavior: "smooth"
    });
  };

  render() {
    const songs = this.state.songs.map(song => (
      <LatterCompositions
        key={song.id}
        title={song.title}
        descripctions={song.descripction}
        add={song.add}
        album={song.album}
        url={song.url}
        itunes={song.itunes}
        audio={song.audio}
        likes={song.likes}
        coments={song.coments}
      />
    ));

    const modal = <Dashboard songs={this.state.songs} />;

    return (
      <>
        <Header
          scroll={this.scrollToAbout}
          scrollToDiscography={this.scrollToDiscography}
          scrollToWrapConc={this.scrollToWrapConc}
          scrollToWrapperLatter={this.scrollToWrapperLatter}
        />
        <Discography />
        <ConcertTours />
        <div className="wrapperLatterX">
          {modal}
          <LatterCompsitionsHeader />
          {songs}
        </div>
      </>
    );
  }
}

export default App;
