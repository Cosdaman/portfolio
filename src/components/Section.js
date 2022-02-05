import React, { useState } from 'react';
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import NavbarComp from './NavbarComp'

export default function Section() {

  const [currentPage, setCurrentPage] = useState('#about');
console.log(currentPage)
  const renderPage = () => {
    if (currentPage === '#about') {
      return <AboutMe />;
    }
    if (currentPage === '#portfolio') {
      return <Portfolio />;
    }
    return <AboutMe />
  };

  const handlePageChange = (page) => {
    setCurrentPage(page) };

  return (
    <section>
      <NavbarComp currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </section>
  );
}


