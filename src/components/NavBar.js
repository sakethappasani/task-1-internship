import { Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Home';
import Counter from './Counter';
import Products from './Products';
import './NavBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">MainFlow Internship Task-1</Link>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/counter" className="nav-links" onClick={toggleMenu}>Counter</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={toggleMenu}>Products</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  );
}
