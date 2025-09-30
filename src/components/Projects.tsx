"use client";

import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import styles from "./Projects.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
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

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <div
          className={`${styles.projectsHeader} ${
            isVisible ? styles.visible : ""
          }`}
        >
          <h2 className="heading-lg text-center mb-md">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="body-lg text-secondary text-center mb-2xl">
            Uma seleção dos meus trabalhos mais recentes
          </p>
        </div>

        <div
          className={`${styles.projectsGrid} ${
            isVisible ? styles.visible : ""
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={styles.projectCard}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.projectImage}>
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/600x400/667eea/ffffff?text=Projeto";
                  }}
                />
                <div className={styles.projectOverlay}>
                  <a
                    href={project.githubUrl}
                    rel="noopener noreferrer"
                    className={styles.projectBtn}
                  >
                    <FaGithub size={20} />
                    Ver Código
                  </a>
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.projectTech}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectActions}>
                  <a
                    href={project.githubUrl}
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                  >
                    <FaGithub size={18} />
                    Repositório
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
