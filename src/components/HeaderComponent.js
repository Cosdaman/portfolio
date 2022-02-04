import React from 'react';

export default function Header() {
  return (
    <div id="top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#top"><span id="logo">Portfolio</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#projects">Projects</a>
              <a className="nav-link" href="#contact">Contact</a>
              <a className="nav-link" href="#links">Links</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
