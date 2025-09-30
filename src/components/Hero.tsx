"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div
          className={`${styles.heroContent} ${isVisible ? styles.visible : ""}`}
        >
          <div className={styles.heroText}>
            <h1 className={`heading-xl ${styles.heroTitle}`}>
              Olá, eu sou o{" "}
              <span className="text-gradient">Gabriel Carvalho</span>
            </h1>

            <p className={`body-lg text-gray-600 ${styles.heroSubtitle}`}>
              Especialista em criar experiências digitais modernas e escaláveis
              usando as melhores tecnologias do mercado
            </p>

            <div className={styles.heroButtons}>
              <button
                onClick={scrollToProjects}
                className="btn btn-primary btn-lg"
              >
                Ver Projetos
              </button>
              <button
                onClick={scrollToContact}
                className="btn btn-secondary btn-lg"
              >
                Entre em Contato
              </button>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <div className={styles.cardContent}>
                <div className={styles.statusIndicator}>
                  <div className={styles.statusDot}></div>
                  <span>Disponível para projetos</span>
                </div>

                <div className={styles.techStack}>
                  <span className="badge">React</span>
                  <span className="badge">Next.js</span>
                  <span className="badge">TypeScript</span>
                  <span className="badge">Node.js</span>
                </div>
              </div>
            </div>

            <div className={styles.floatingElements}>
              <div
                className={`${styles.floatingElement} ${styles.element1}`}
              ></div>
              <div
                className={`${styles.floatingElement} ${styles.element2}`}
              ></div>
              <div
                className={`${styles.floatingElement} ${styles.element3}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
