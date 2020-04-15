import React from 'react';

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
  <a class="navbar-brand" href="#">{props.brand}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
  <a class="nav-link" href="#">{props.home}
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
  <a class="nav-link" href="#">{props.about}</a>
          </li>
          <li class="nav-item">
  <a class="nav-link" href="#">{props.services}</a>
          </li>
          <li class="nav-item">
  <a class="nav-link" href="#">{props.contact}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;