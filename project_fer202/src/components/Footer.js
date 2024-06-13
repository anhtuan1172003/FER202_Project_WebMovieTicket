import React from 'react';

export default function Footer() {
    return (
        <footer>
          <div>About us</div>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">YouTube</a>
            <a href="#">Instagram</a>
          </div>
          <div>Contact us</div>
          <div>
            <a href="mailto:example@gmail.com">Gmail</a>
            <a href="tel:123456789">Hotline</a>
          </div>
        </footer>
      );
}