"use client";

import { useState, useEffect } from "react";
import { skills } from "@/data/skills";
import styles from "./Skills.module.css";

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
          <p className="body-lg text-gray-600 text-center mb-2xl">
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
                <div className={styles.skillIcon}>{skill.icon}</div>
                <h3 className={styles.skillName}>{skill.name}</h3>
              </div>

              <div className={styles.skillProgress}>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
