import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Navbar from './components/Navbar.js';
import Welcome from './components/Welcome.js';
import Cards from './components/Cards.js';
import Footer from './components/Footer.js'

function App() {
  return (
    <Fragment>
      <div class="container">
        <Navbar brand='Start Bootstrap' home='Home' about='About Emilio' services='Emilio Services' contact='Contact Emilio' />
        <Welcome title='A Warm Welcome to my page!' lead='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.' button_number='Call to action!' />
        <Cards card_title='Card title' card_text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.' button_text='Find Out More!' />
      </div>
      <Footer emilio_copyright='Emilio Website 2020' />
    </Fragment>
  );
}

export default App;