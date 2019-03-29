import React, { Component } from 'react';
import axios from 'axios';
import logo from '../logo.svg';

class Billboard extends Component {

  state = {
    movies: []
  };
  
  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    let res = await axios.get('http://localhost:8080/popularity');
    let data = await res.data[0];
    this.setState({ movies: data });
    
  };

  imagesViewer(movie) {
    const url = 'http://image.tmdb.org/t/p/w300';
    if (movie.backdrop_path) {
      return `${url}/${movie.backdrop_path}`;
    } else if (movie.poster_path) {
      return `${url}/${movie.poster_path}`;
    } else {
      return '../../public/images/noimage.jpg';
    }
  };

  render() {

    return (
      <div className="card-columns">
        {this.state.movies.length === 0 ? (
          <div>Loading...</div>
        ) : (
          this.state.movies.map((movie, i) => {
            return (
              <div className="card" key={i}>
                <img className="card-img-top" src={ this.imagesViewer(movie) } alt=""/>
                <div className="card-body">
                  <h5 className="card-title"> { movie.title } </h5>
                  <p className="card-text">Fecha de estreno: { movie.release_date } </p>
                  <a className="btn btn-primary" href="{}" onClick={ this.handleChageState }>Más información</a>
                </div>
              </div>
            )  
          })
        )}
      </div>
    );

  }

}

export default Billboard;