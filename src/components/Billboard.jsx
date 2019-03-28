import React, { Component } from 'react';
import axios from 'axios';

class Billboard extends Component {

  state = {
    movies: []
  };
  
  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    axios.get('http://localhost:8080/popularity')
    .then(data => {
      this.setState({ movies: data.data[0] })
    })
    .catch(err => {
      console.log(err);
      return null;
    });
  }

  render() {

    return (
      <div className="card-columns">
        {this.state.movies.length === 0 ? (
          <div>Loading...</div>
        ) : (
          this.state.movies.map((movie, i) => {
            return (
              <div className="card" key={i}>
                <img className="card-img-top" src={ this.props.src } alt=""/>
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