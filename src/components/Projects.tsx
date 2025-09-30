"use client";

import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import styles from "./Projects.module.css";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const filters = [
    { id: "all", label: "Todos", icon: "🎯" },
    { id: "web", label: "Web", icon: "🌐" },
    { id: "mobile", label: "Mobile", icon: "📱" },
    { id: "fullstack", label: "Full Stack", icon: "⚡" },
    { id: "api", label: "API", icon: "🔗" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

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
          <p className="body-lg text-gray-600 text-center mb-2xl">
            Uma seleção dos meus trabalhos mais recentes e impactantes
          </p>
        </div>

        <div className={styles.filterButtons}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`${styles.filterBtn} ${
                activeFilter === filter.id ? styles.active : ""
              }`}
            >
              <span className={styles.filterIcon}>{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        <div
          className={`${styles.projectsGrid} ${
            isVisible ? styles.visible : ""
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={styles.projectCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                {project.featured && (
                  <div className={styles.featuredBadge}>
                    <span>⭐ Destaque</span>
                  </div>
                )}
                <div className={styles.projectOverlay}>
                  <button
                    onClick={() => openModal(project)}
                    className={styles.viewBtn}
                  >
                    👁️ Ver Detalhes
                  </button>
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.projectTech}>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={styles.moreTech}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className={styles.projectLinks}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      📝 Código
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      🚀 Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.noProjects}>
            <div className={styles.noProjectsIcon}>🔍</div>
            <h3>Nenhum projeto encontrado</h3>
            <p>Tente selecionar outro filtro</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={closeModal}>
              ✕
            </button>

            <div className={styles.modalImage}>
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>

            <div className={styles.modalBody}>
              <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
              <p className={styles.modalDescription}>
                {selectedProject.longDescription}
              </p>

              <div className={styles.modalTech}>
                <h4>Tecnologias utilizadas:</h4>
                <div className={styles.techList}>
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.modalLinks}>
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    �� Ver Código
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    🚀 Ver Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
