import React, { Component } from 'react'
import './App.css';
export default class Slide extends Component {
  render() {
    return (
      <div id="demo" class="carousel slide" data-bs-ride="carousel">

 
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  </div>


  <div class="carousel-inner">
    <div class="carousel-item">
      <img src="lai.jpg" alt="Los Angeles" class="d-block p-3 m-2 w-100"/>
      <div class="carousel-caption">
        <h1>Digital Banking</h1>
        <p>Manage your accounts on the move through ou mobile banking app</p>
      </div>
    </div>
    <div class="carousel-item active">
      <img src="chi.jpg" alt="Los Angeles" class="d-block p-3 m-2 w-100"/>
      <div class="carousel-caption">
        <h1>Everyday Saver (Issue)</h1>
        <p>The award winning Everyday Saver (Issue) gives you instant access your
            money when you need it.
        </p>
      </div>
    </div>

  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
    )
  }
}

