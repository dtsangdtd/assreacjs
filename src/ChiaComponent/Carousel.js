import React, { Component } from 'react';

export default class Carousel extends Component {
  render() {
    return (
      <div id='demo' class='carousel slide' data-ride='carousel'>
        <ul class='carousel-indicators'>
          <li data-target='#demo' data-slide-to='0' class='active'></li>
          <li data-target='#demo' data-slide-to='1'></li>
        </ul>

        <div class='carousel-inner'>
          <div class='carousel-item active'>
            <img src='.././img/slide_1.png' alt='Los Angeles' width='100%' />
          </div>
          <div class='carousel-item'>
            <img src='.././img/slide_2.png' alt='Chicago' width='100%' />
          </div>
        </div>

        <a class='carousel-control-prev' href='#demo' data-slide='prev'>
          <span class='carousel-control-prev-icon'></span>
        </a>
        <a class='carousel-control-next' href='#demo' data-slide='next'>
          <span class='carousel-control-next-icon'></span>
        </a>
      </div>
    );
  }
}
