import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__container">
        <nav className="navbar__nav">
          <ul>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#technologies">Tecnologías</a></li>
            <li><a href="#about">Sobre Mí</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
        <div className="navbar__menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href="#projects" onClick={toggleMobileMenu}>Proyectos</a></li>
            <li><a href="#technologies" onClick={toggleMobileMenu}>Tecnologías</a></li>
            <li><a href="#about" onClick={toggleMobileMenu}>Sobre Mí</a></li>
            <li><a href="#contact" onClick={toggleMobileMenu}>Contacto</a></li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
