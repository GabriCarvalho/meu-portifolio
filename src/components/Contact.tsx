"use client";

import { useState, useEffect } from "react";
import { ContactForm } from "@/types";
import styles from "./Contact.module.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Formulário enviado:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "contato@seudominio.com",
      link: "mailto:contato@seudominio.com",
    },
    {
      icon: "📱",
      label: "WhatsApp",
      value: "+55 (11) 99999-9999",
      link: "https://wa.me/5511999999999",
    },
    {
      icon: "📍",
      label: "Localização",
      value: "São Paulo, SP",
      link: "https://maps.google.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "/in/seu-perfil",
      link: "https://linkedin.com/in/seu-perfil",
    },
  ];

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div
          className={`${styles.contactHeader} ${
            isVisible ? styles.visible : ""
          }`}
        >
          <h2 className="heading-lg text-center mb-md">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="body-lg text-gray-600 text-center mb-2xl">
            Vamos conversar sobre seu próximo projeto? Estou sempre aberto a
            novas oportunidades
          </p>
        </div>

        <div
          className={`${styles.contactContent} ${
            isVisible ? styles.visible : ""
          }`}
        >
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Informações de Contato</h3>
            <p className={styles.infoDescription}>
              Prefere uma conversa mais direta? Entre em contato através de
              qualquer um dos canais abaixo.
            </p>

            <div className={styles.infoList}>
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.link}
                  rel="noopener noreferrer"
                  className={styles.infoItem}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>{info.label}</span>
                    <span className={styles.infoValue}>{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.socialLinks}>
              <h4>Redes Sociais</h4>
              <div className={styles.socialIcons}>
                <a
                  href="https://github.com"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  📝
                </a>
                <a
                  href="https://linkedin.com"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  💼
                </a>
                <a
                  href="https://twitter.com"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  🐦
                </a>
                <a
                  href="https://instagram.com"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  📷
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                  placeholder="Sobre o que você gostaria de conversar?"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={styles.textarea}
                  placeholder="Conte-me mais sobre seu projeto ou ideia..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary btn-lg ${styles.submitBtn} ${
                  isSubmitting ? styles.loading : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner}></span>
                    Enviando...
                  </>
                ) : (
                  <>🚀 Enviar Mensagem</>
                )}
              </button>

              {submitStatus === "success" && (
                <div className={styles.successMessage}>
                  ✅ Mensagem enviada com sucesso! Retornarei em breve.
                </div>
              )}

              {submitStatus === "error" && (
                <div className={styles.errorMessage}>
                  ❌ Erro ao enviar mensagem. Tente novamente.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
