import reactSvg from "./react.svg";
import "./App.css";

import React, { PureComponent } from "react";
import Modal from "./components/Modal";
const domain = "http://localhost:3001";

class App extends PureComponent {
  constructor() {
    super();
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  state = {
    showModal: false,
    players: [],
    pichichis: []
  };

  showModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  componentDidMount() {
    fetch(`${domain}/players`)
      .then(response => {
        return response.json();
      })
      .then(players => {
        this.setState({ players });
      });
    fetch(`${domain}/pichichis`)
      .then(response => {
        return response.json();
      })
      .then(pichichis => {
        this.setState({ pichichis });
      });
  }

  render() {
    const { players, pichichis, showModal } = this.state;

    return (
      <div className="App">
        {showModal && (
          <Modal closeModal={this.closeModal}>
            <h1 className="App-pichichis-title">Los pichichis:</h1>
            <ul className="App-pichichis-list">
              {pichichis.map(pichichi => (
                <li key={pichichi.playerId} className="App-pichichis-item">
                  <span className="App-pichichis-item-name">
                    {pichichi.name}
                  </span>
                  <span className="App-pichichis-item-goals">
                    {pichichi.goals}
                  </span>
                </li>
              ))}
            </ul>
          </Modal>
        )}
        <div className="App-teams App-flex">
          {/* 
          TODO ejercicio 2
          Debes obtener los players en lugar de los equipos y pintar su nombre. 
          Borra todo el código que no sea necesario. Solo debe existir un título: Los jugadores
          y una lista con sus nombres. 
          ** Los comentarios de los ejercicios no los borres.
        */}
          <div className="App-header">
            <button onClick={this.showModal} className="App-header-button">
              Pichichis
            </button>
          </div>
          <ul className="App-players">
            {/* 
            TODO ejercicio 3
            Vamos a pasar a darle diseño. Crea el diseño propuesto en el readme con los requerimientos que se necesite.
            Guiate por las imágenes.
           */}
            {players.map(player => (
              <li className="App-player" key={player.id}>
                <div className="App-player-img-data-container">
                  <img className="App-player-img" src={player.img} />
                  <div className="App-player-data">
                    <span className="App-player-name">{player.name}</span>
                    <span className="App-player-position">
                      {player.position}
                    </span>
                    <div className="App-player-team-name">
                      {player.teamName}
                    </div>
                  </div>
                </div>
                <img className="App-player-shield" src={player.teamShield} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
