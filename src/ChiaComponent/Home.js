import React, { Component } from 'react';
import Carousel from './Carousel';
import Header from './Header';
import MovieList from './MovieList';
import Promoto from './Promoto';
import Footer from './Footer';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <MovieList />
        <Promoto />
        <Footer />
      </div>
    );
  }
}
