"use client";

import { useState, useEffect } from "react";
import { skills } from "@/data/skills";
import styles from "./Skills.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, { Icon: IconType; color: string }> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  "Next.js": { Icon: SiNextdotjs, color: "#111111" },
  "CSS/SCSS": { Icon: SiCss3, color: "#1572B6" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  Python: { Icon: SiPython, color: "#3776AB" },
  PostgreSQL: { Icon: SiPostgresql, color: "#336791" },
  Git: { Icon: SiGit, color: "#F05032" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
};

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
          {filteredSkills.map((skill, index) => {
            const iconEntry = iconMap[skill.name];
            const IconComponent = iconEntry?.Icon;
            return (
            <div
              key={skill.id}
              className={styles.skillCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.skillHeader}>
                <span
                  className={styles.skillIcon}
                  style={{ color: iconEntry?.color }}
                >
                  {IconComponent ? (
                    <IconComponent size={28} />
                  ) : (
                    skill.icon
                  )}
                </span>
                <h3 className={styles.skillName}>{skill.name}</h3>
              </div>

              <div className={styles.skillRating}>
                <div className={styles.starsContainer}>
                  {renderStars(skill.level)}
                </div>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
