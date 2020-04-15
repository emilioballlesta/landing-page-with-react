import React from 'react';

const Footer = (props) => {
  return (
    <footer class="py-5 bg-dark">
    <div class="container">
  <p class="m-0 text-center text-white">Copyright &copy; {props.emilio_copyright}</p>
    </div>
  </footer>
  );
}

export default Footer;