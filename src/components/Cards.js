import React from 'react';

const Cards = (props) => {
  return (
    <div class="row text-center">

    <div class="col-lg-3 col-md-6 mb-4">
      <div class="card h-100">
        <img class="card-img-top" src="http://placehold.it/500x325" alt="" />
        <div class="card-body">
          <h4 class="card-title">{props.card_title}</h4>
          <p class="card-text">{props.card_text}</p>
        </div>
        <div class="card-footer">
  <a href="#" class="btn btn-primary">{props.button_text}</a>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 mb-4">
      <div class="card h-100">
        <img class="card-img-top" src="http://placehold.it/500x325" alt="" />
        <div class="card-body">
          <h4 class="card-title">{props.card_title}</h4>
          <p class="card-text">{props.card_text}</p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-primary">{props.button_text}</a>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 mb-4">
      <div class="card h-100">
        <img class="card-img-top" src="http://placehold.it/500x325" alt="" />
        <div class="card-body">
          <h4 class="card-title">{props.card_title}</h4>
          <p class="card-text">{props.card_text}</p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-primary">{props.button_text}</a>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 mb-4">
      <div class="card h-100">
        <img class="card-img-top" src="http://placehold.it/500x325" alt="" />
        <div class="card-body">
          <h4 class="card-title">{props.card_title}</h4>
          <p class="card-text">{props.card_text}</p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-primary">{props.button_text}</a>
        </div>
      </div>
    </div>

  </div>
  );
}

export default Cards;