import React, { Component } from "react";

class Navbar extends Component {

  render() {

    const styles = {
      text: { color: 'white' }
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="{}" style={ styles.text }>Peliculas fantasticas</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="{}" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Categorias
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="{}">En cartelera</a>
                <a className="dropdown-item" href="{}">Más populares</a>
                <a className="dropdown-item" href="{}">Más valoradas</a>
                <a className="dropdown-item" href="{}">Más populares entre los niños</a>
                <a className="dropdown-item" href="{}">Las mejores del 2018</a>
                <a className="dropdown-item" href="{}">Las mejores de drama</a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Buscar por nombre" name="query"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="button">Buscar</button>
          </form>
        </div>
      </nav>
    );

  }
  
}

export default Navbar;
