"use client";

import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <h3 className={styles.footerLogo}>
              <span className="text-gradient">Portfolio</span>
            </h3>
            <p className={styles.footerDescription}>
              Desenvolvedor Full Stack apaixonado por criar soluções digitais
              inovadoras
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <h4>Navegação</h4>
              <ul>
                <li>
                  <a href="#home">Início</a>
                </li>
                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projetos</a>
                </li>
                <li>
                  <a href="#contact">Contato</a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h4>Contato</h4>
              <ul>
                <li>
                  <a href="mailto:contato@seudominio.com">Email</a>
                </li>
                <li>
                  <a href="https://linkedin.com" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5511999999999"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <button onClick={scrollToTop} className={styles.backToTop}>
            ↑ Voltar ao topo
          </button>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Portfolio. Todos os direitos reservados.</p>
          <p>Feito com ❤️ e muito ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
