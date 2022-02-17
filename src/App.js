import React from "react";
import Footer from "./components/Footer";
import Section from './components/Section'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import './App.css'


function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="description" content="Developer Portfolio" />
      </Helmet>
      <Section />
      <Footer />

    </div>

  );
}

export default App;
