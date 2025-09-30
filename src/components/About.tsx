"use client";

import { useState, useEffect } from "react";
import styles from "./About.module.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { number: "10+", label: "Projetos Concluídos", icon: "🚀" },
    { number: "10+", label: "Clientes Satisfeitos", icon: "😊" },
    { number: "2+", label: "Anos de Experiência", icon: "⏰" },
    { number: "1000+", label: "Xícaras de Café", icon: "☕" },
  ];

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div
          className={`${styles.aboutContent} ${
            isVisible ? styles.visible : ""
          }`}
        >
          <div className={styles.aboutText}>
            <h2 className="heading-lg mb-lg">
              Sobre <span className="text-gradient">Mim</span>
            </h2>

            <div className={styles.textContent}>
              <p className="body-lg text-gray-600 mb-md">
                Olá! Sou um desenvolvedor full stack apaixonado por criar
                soluções digitais que fazem a diferença. Com mais de 3 anos de
                experiência, especializo-me em transformar ideias complexas em
                aplicações elegantes e funcionais.
              </p>

              <p className="body-md text-gray-600 mb-md">
                Minha jornada começou com curiosidade sobre como as coisas
                funcionam na internet, e hoje trabalho com as tecnologias mais
                modernas do mercado, sempre focando em performance, usabilidade
                e código limpo.
              </p>

              <p className="body-md text-gray-600 mb-lg">
                Quando não estou codando, você pode me encontrar explorando
                novas tecnologias, contribuindo para projetos open source, ou
                tomando um café enquanto planejo o próximo projeto inovador.
              </p>
            </div>

            <div className={styles.skills}>
              <h3 className="heading-sm mb-md">Principais Tecnologias</h3>
              <div className={styles.skillTags}>
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "PostgreSQL",
                  "AWS",
                  "Docker",
                ].map((skill) => (
                  <span key={skill} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.aboutVisual}>
            <div className={styles.profileCard}>
              <div className={styles.profileImage}>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                  alt="Foto de perfil"
                  className={styles.image}
                />
                <div className={styles.statusBadge}>
                  <div className={styles.statusDot}></div>
                  <span>Disponível</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.achievements}>
          <div className="grid grid-cols-2 md-grid-cols-2 lg-grid-cols-4 gap-lg">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className={`${styles.achievementCard} ${
                  isVisible ? styles.visible : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.achievementIcon}>{achievement.icon}</div>
                <h3 className={styles.achievementNumber}>
                  {achievement.number}
                </h3>
                <p className={styles.achievementLabel}>{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
