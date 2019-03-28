import React, { Component } from 'react';

class ShowMovie extends Component {

  render() {

    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={ this.props.src } className="card-img" alt=""/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Titulo original:  movie.original_title </h5>
              <p className="card-text">Clasificación adultos:  movie.adult </p>
              <p className="card-text">Puntaje de popularidad:  movie.popularity </p>
              <p className="card-text">Descripción: movie.overview ? (movie.overview) : 'Sin descripción.'</p>
              <p className="card-text"><small className="text-muted">Fecha de estreno:  movie.release_date ? (movie.release_date) : 'No definida.' </small></p>
            </div>
          </div>
        </div>
      </div>
    );

  }

}

export default ShowMovie;