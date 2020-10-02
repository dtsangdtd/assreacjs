import React, { Component } from 'react';
import Movie from './Movie';

export default class MovieList extends Component {
  render() {
    return (
      <div class='container mt-5'>
        <h1 class='text-center m-3'>LIST MOVIE</h1>
        <div class='row'>
          <div class='col-sm-3'>
            <Movie />
          </div>
          <div class='col-sm-3'>
            <Movie />
          </div>
          <div class='col-sm-3'>
            <Movie />
          </div>
          <div class='col-sm-3'>
            <Movie />
          </div>
        </div>
      </div>
    );
  }
}
