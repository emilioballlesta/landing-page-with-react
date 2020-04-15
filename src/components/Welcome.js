import React from 'react';

const Welcome = (props) => {
  return (
    <header class="jumbotron my-4">
    <h1 class="display-3">{props.title}</h1>
  <p class="lead">{props.lead}</p>
  <a href="#" class="btn btn-primary btn-lg">{props.button_number}</a>
  </header>
  );
}

export default Welcome;