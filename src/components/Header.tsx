"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span className="text-gradient">Portfolio</span>
          </div>

          <ul className={styles.navList}>
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className={styles.navLink}
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className={styles.navLink}
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className={styles.navLink}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className={styles.navLink}
              >
                Projetos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className={styles.navLink}
              >
                Contato
              </button>
            </li>
          </ul>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {isMobileMenuOpen && (
            <div className={styles.mobileMenu}>
              <button
                onClick={() => scrollToSection("home")}
                className={styles.mobileNavLink}
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={styles.mobileNavLink}
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={styles.mobileNavLink}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={styles.mobileNavLink}
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={styles.mobileNavLink}
              >
                Contato
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
