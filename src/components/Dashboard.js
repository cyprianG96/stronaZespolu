import React, { Component } from "react";
import Modal from "./Modal";
import "./style.css";
import Modal2 from "./Modal2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Dashboard extends Component {
  state = {
    songs2: [this.props.songs],
    show: false,
    show2: false,
    artist: "",
    title: "",
    album: "",
    url: "",
    itunes: "",
    descriptions: "",
    message: "",
    message2: "",
    message3: "",
    message4: "",
    message5: "",
    message6: "",
    startDate: new Date(),

    errors: {
      artist: false,
      title: false,
      album: false,
      url: false,
      descriptions: false,
      itunes: false
    }
  };

  handleChangeDate = date => {
    this.setState({
      startDate: date
    });
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  messages = {
    artist_incorrect: "Podaj poprawną nazwe wykonawcy",
    title_incorrect: "Podaj poprawny tytuł",
    album_incorrect: "Podaj poprawną nazwę albumu",
    url_incorrect: "Nieprawidłowy adres url",
    descriptions_incorrect: "Opis powinien zawierać więcej niż 10 znaków",
    itunes_incorrect: "Nieprawidłowy adres url"
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const validation = this.formValidation();
    console.log(
      validation.artist,
      validation.title,
      validation.album,
      validation.itunes,
      validation.descriptions,
      validation.url
    );
    if (validation.correct) {
      this.setState({
        artist: "",
        title: "",
        album: "",
        itunes: "",
        descriptions: "",
        url: "",
        show2: true,
        message: this.state.artist,
        message2: this.state.title,
        message3: this.state.album,
        message4: this.state.url,
        message5: this.state.itunes,
        message6: this.state.descriptions,

        errors: {
          url: false,
          artist: false,
          title: false,
          album: false,
          descriptions: false,
          itunes: false
        }
      });
    } else {
      this.setState({
        errors: {
          artist: !validation.artist,
          title: !validation.title,
          album: !validation.album,
          url: !validation.url,
          descriptions: !validation.descriptions,
          itunes: !validation.itunes
        }
      });
    }
  };

  formValidation() {
    // true - ok
    // false - zle
    let artist = false;
    let title = false;
    let album = false;
    let correct = false;
    let url = false;
    let descriptions = false;
    let itunes = false;

    if (this.state.itunes.indexOf("https://") !== -1) {
      itunes = true;
    }

    if (this.state.descriptions.length >= 10) {
      descriptions = true;
    }

    if (this.state.artist.length > 0) {
      artist = true;
    }

    if (this.state.url.indexOf("https://") !== -1) {
      url = true;
    }

    if (this.state.title.length > 0) {
      title = true;
    }

    if (this.state.album.length > 0) {
      album = true;
    }

    if (artist && title && album && url && descriptions && itunes) {
      correct = true;
    }

    return {
      descriptions,
      correct,
      artist,
      title,
      album,
      url,
      itunes
    };
  }

  hideDiv = () => {
    this.setState({
      show2: false
    });
  };

  render() {
    return (
      <div className="modalDiv">
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="App">
            <form onSubmit={this.handleSubmit} noValidate>
              <label htmlFor="artist">
                <input
                  placeholder="Artist"
                  type="text"
                  id="artist"
                  name="artist"
                  value={this.state.artist}
                  onChange={this.handleChange}
                />
                <br />
                {this.state.errors.artist && (
                  <span>
                    {this.state.errors.artist && this.messages.artist_incorrect}
                  </span>
                )}
              </label>
              <label htmlFor="title">
                <input
                  placeholder="Title"
                  type="text"
                  id="title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                <br />
                {this.state.errors.title && (
                  <span>{this.messages.title_incorrect}</span>
                )}
              </label>

              <label htmlFor="album">
                <input
                  placeholder="Album"
                  type="text"
                  id="album"
                  name="album"
                  value={this.state.album}
                  onChange={this.handleChange}
                />
                <br />
                {this.state.errors.album && (
                  <span>{this.messages.album_incorrect}</span>
                )}
              </label>

              <label htmlFor="url">
                <input
                  placeholder="Adress URL"
                  type="text"
                  id="url"
                  name="url"
                  value={this.state.url}
                  onChange={this.handleChange}
                />
                <br />
                {this.state.errors.url && (
                  <span>{this.messages.url_incorrect}</span>
                )}
              </label>
              <label htmlFor="itunes">
                <input
                  placeholder="Podaj adres URL iTunes"
                  type="text"
                  id="itunes"
                  name="itunes"
                  value={this.state.itunes}
                  onChange={this.handleChange}
                />
                <br />
                {this.state.errors.itunes && (
                  <span>
                    {this.state.errors.itunes && this.messages.itunes_incorrect}
                  </span>
                )}
              </label>
              <label htmlFor="descriptions">
                <textarea
                  placeholder="Descriptions"
                  type="text"
                  id="descriptions"
                  name="descriptions"
                  value={this.state.descriptions}
                  onChange={this.handleChange}
                />
                <br />
                {this.state.errors.descriptions && (
                  <span>
                    {this.state.errors.descriptions &&
                      this.messages.descriptions_incorrect}
                  </span>
                )}
              </label>
              <div className="divDate">
                <p>Wybierz datę</p>
                <DatePicker
                  parse="YYYY-MM-DD"
                  selected={this.state.startDate}
                  onChange={this.handleChangeDate}
                />
              </div>

              <Modal2
                songs={this.props.songs}
                show2={this.state.show2}
                handleClose={this.hideDiv}
                sumbit={this.sumbit}
                message={
                  this.state.message && (
                    <>
                      <ul>
                        <li>
                          Wykonawca: <strong>{this.state.message}</strong>
                        </li>
                        <li>
                          Tytuł: <strong>{this.state.message2}</strong>
                        </li>
                        <li>
                          Album: <strong>{this.state.message3}</strong>
                        </li>
                        <li>
                          Adres URL iTunes:{" "}
                          <strong>{this.state.message5}</strong>
                        </li>
                      </ul>
                      <h1>Adres URL: </h1>
                      <br />
                      <iframe src={this.state.message4} />
                    </>
                  )
                }
              />
              <button>send</button>
            </form>
          </div>
        </Modal>
        <button
          className="buttonAddSong"
          type="button"
          onClick={this.showModal}
        >
          Add song
        </button>
      </div>
    );
  }
}

export default Dashboard;
