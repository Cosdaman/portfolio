import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NavbarComp from './NavbarComp';

export default function Section() {
  document.title =`Cosdaman`;
  const [currentPage, setCurrentPage] = useState('#about');
  const renderPage = () => {
    if (currentPage === '#about') {
      return <AboutMe />;
    }
    if (currentPage === '#portfolio') {
      return <Portfolio />;
    }
    if (currentPage === '#contact') {
      return <Contact />;
    } else {
      return <AboutMe />
    }

  };

  const handlePageChange = (page) => {
    setCurrentPage(page)
  };

  return (
    <section>
      <NavbarComp currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </section>
  );
}


