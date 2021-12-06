import { Component } from 'react';
import '../src/bootstrap.min.css';
import '../src/componentes/App.css';

import Buscador from '../src/componentes/Buscador';
import Resultado from '../src/componentes/Resultado';

class App extends Component {

  state = {
    termino : '',
    imagenes : []
  }

  consultarApi = () => {

    const url = `https://pixabay.com/api/?key=24690235-4a6bf6e14eafd3aa5d1d66be1&q=${this.state.termino }`;

    //console.log(url);
    fetch(url)
    .then(respuesta => respuesta.json() )
    .then(resultado => this.setState({imagenes : resultado.hits} ) )
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
  }
  render() {
    return (
      <div className="app container">
        <br></br>
        <div className="jumbotron">
          <p className="lead text-center">buscador de imagenes</p>

          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        <Resultado>
          imagenes={this.state.imagenes}
        </Resultado>
      </div>
    );
  }
}

export default App;
