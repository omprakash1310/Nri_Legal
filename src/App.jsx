import React from 'react';
import { Outlet } from 'react-router-dom'; // 1. Import Outlet
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './components/style.css';

function App() {
  return (
    <div className="App">
      {/* These components are on EVERY page */}
      <Header />
      <Navbar />

      {/* <Outlet /> renders the current page's content */}
      <main>
        <Outlet />
      </main>
      
      {/* This component is also on EVERY page */}
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;