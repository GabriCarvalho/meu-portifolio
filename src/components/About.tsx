"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // Importar o componente Image do Next.js
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
              <p className="body-lg text-secondary mb-md">
                Olá! Sou um desenvolvedor full stack apaixonado por criar
                soluções digitais que fazem a diferença. Com mais de 2 anos de
                experiência, especializo-me em transformar ideias complexas em
                aplicações elegantes e funcionais.
              </p>

              <p className="body-md text-secondary mb-md">
                Minha jornada começou com paixão por tecnologia e suporte em TI,
                evoluindo para o desenvolvimento fullstack, onde aplico
                conceitos de lógica, programação e boas práticas. Hoje, busco
                unir performance, segurança e usabilidade, sempre com foco em
                soluções modernas e código de qualidade.
              </p>

              <p className="body-md text-secondary mb-lg">
                Quando não estou programando, gosto de dedicar meu tempo a
                aprender coisas novas, explorando áreas que me desafiam e
                ampliam meus conhecimentos. Além disso, mantenho o hábito de
                praticar exercícios, equilibrando mente e corpo para estar
                sempre em evolução.
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
                {/* OPÇÃO 1: Usando Next.js Image (Recomendado) */}
                <Image
                  src="/imagens/eu.jpeg"
                  alt="Foto de perfil"
                  width={400}
                  height={500}
                  className={styles.image}
                  priority
                />

                {/* OPÇÃO 2: Usando tag img normal */}
                {/* 
                <img
                  src="/imagens/eu.jpeg"
                  alt="Foto de perfil"
                  className={styles.image}
                />
                */}

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
