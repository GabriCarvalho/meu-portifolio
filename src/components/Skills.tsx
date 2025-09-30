"use client";

import { useState, useEffect } from "react";
import { skills } from "@/data/skills";
import styles from "./Skills.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: "all", label: "Todas", icon: "🎯" },
    { id: "frontend", label: "Frontend", icon: "🎨" },
    { id: "backend", label: "Backend", icon: "⚙️" },
    { id: "tools", label: "Ferramentas", icon: "🛠️" },
    { id: "design", label: "Design", icon: "✨" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Função para renderizar estrelas baseado no nível
  const renderStars = (level: number) => {
    const stars = [];
    const fullStars = Math.floor(level / 20); // 5 estrelas = 100%
    const hasHalfStar = level % 20 >= 10;

    // Estrelas preenchidas
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className={styles.starFilled} />);
    }

    // Estrela meio preenchida (opcional)
    if (hasHalfStar && fullStars < 5) {
      stars.push(<FaStar key="half" className={styles.starHalf} />);
    }

    // Estrelas vazias
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className={styles.starEmpty} />);
    }

    return stars;
  };

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <div
          className={`${styles.skillsHeader} ${
            isVisible ? styles.visible : ""
          }`}
        >
          <h2 className="heading-lg text-center mb-md">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="body-lg text-secondary text-center mb-2xl">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </div>

        <div className={styles.categoryFilter}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`${styles.categoryBtn} ${
                activeCategory === category.id ? styles.active : ""
              }`}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        <div
          className={`${styles.skillsGrid} ${isVisible ? styles.visible : ""}`}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className={styles.skillCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.skillHeader}>
                <span className={styles.skillIcon}>{skill.icon}</span>
                <h3 className={styles.skillName}>{skill.name}</h3>
              </div>

              <div className={styles.skillRating}>
                <div className={styles.starsContainer}>
                  {renderStars(skill.level)}
                </div>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>

              {/* Barra de progresso minimalista */}
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${skill.level}%`,
                    animationDelay: `${index * 0.1 + 0.5}s`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
