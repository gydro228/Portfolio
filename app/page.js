'use client';

import '../app/global.css';
import { useState } from 'react';
import InteractiveBackground from '../components/InteractiveBackground';
import ClickExplosion from '../components/ClickExplosion';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'Next.js', level: 85, icon: '▲' },
    { name: 'JavaScript', level: 95, icon: '🟨' },
    { name: 'TypeScript', level: 80, icon: '🔷' },
    { name: 'Node.js', level: 75, icon: '🟩' },
    { name: 'CSS/SCSS', level: 90, icon: '🎨' },
    { name: 'Git', level: 85, icon: '🔀' },
    { name: 'REST API', level: 80, icon: '🔗' },
  ];

  const experience = [
    {
      year: '2024 — н.в.',
      role: 'Frontend Developer',
      company: 'Фриланс / Личные проекты',
      description: 'Разработка коммерческих веб-приложений на React и Next.js. Создание адаптивных интерфейсов, интеграция с REST API, оптимизация производительности.',
    },
    {
      year: '2023 — 2024',
      role: 'Junior Web Developer',
      company: 'Веб-студия',
      description: 'Вёрстка и разработка интерактивных лендингов. Работа с дизайн-макетами в Figma, кросс-браузерная совместимость.',
    },
    {
      year: '2022 — 2023',
      role: 'Стажёр / Самообучение',
      company: 'Онлайн-курсы и пет-проекты',
      description: 'Интенсивное изучение JavaScript, React, основ бэкенда на Node.js. Создание учебных проектов и портфолио.',
    },
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      subtitle: 'Интернет-магазин',
      tech: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
      description: 'Полнофункциональная платформа электронной коммерции с каталогом товаров, корзиной, системой оплаты через Stripe и админ-панелью для управления заказами.',
      image: '/images/project-ecommerce.png',
      color: 'purple',
    },
    {
      title: 'AI Dashboard',
      subtitle: 'Аналитическая панель',
      tech: ['React', 'OpenAI API', 'Chart.js', 'Tailwind'],
      description: 'Интерактивный дашборд с интеграцией OpenAI для анализа данных, визуализацией метрик в реальном времени и генерацией отчётов на основе ИИ.',
      image: '/images/project-ai.png',
      color: 'blue',
    },
    {
      title: 'Crypto Tracker',
      subtitle: 'Трекер криптовалют',
      tech: ['TypeScript', 'CoinGecko API', 'WebSocket', 'D3.js'],
      description: 'Приложение для отслеживания криптовалют с графиками цен в реальном времени, портфолио-трекером и уведомлениями о значительных изменениях курса.',
      image: '/images/project-crypto.png',
      color: 'green',
    },
  ];

  return (
    <main>
      <InteractiveBackground />
      <ClickExplosion />
      {/* ===== NAVBAR ===== */}
      <nav className="nav-bar">
        <div className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          Portfolio
          <span className="logo-bracket">/&gt;</span>
        </div>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
        </button>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>Обо мне</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Навыки</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Опыт</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Проекты</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Контакты</a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero-section">
        <div className="hero-bg-grid"></div>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-glow hero-glow-3"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}></div>
          ))}
        </div>
        <div className="hero-content">
          <div className="hero-badge">✦ Открыт для предложений</div>
          <h1 className="hero-title">
            Frontend
            <br />
            <span className="hero-title-accent">Developer</span>
          </h1>
          <p className="hero-subtitle">
            Создаю современные и высокопроизводительные веб-приложения
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">Смотреть проекты</a>
            <a href="#contact" className="btn-outline">Связаться</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="about-section">
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>
        <div className="container-grid">
          <div className="content-left">
            <div className="section-label">— Знакомство</div>
            <h2 className="title-gradient">ОБО МНЕ</h2>
            <div className="accent-line"></div>
            <p className="about-text">
              Я — <strong>Frontend-разработчик</strong> с опытом более 2 лет в создании
              современных веб-приложений. Специализируюсь на <span className="text-highlight">React</span> и{' '}
              <span className="text-highlight">Next.js</span>, уделяя особое внимание производительности,
              чистой архитектуре и безупречному пользовательскому опыту.
            </p>
            <p className="about-text">
              Мой подход — это баланс между эстетикой и функциональностью. Каждый проект
              я выстраиваю как качественный продукт, готовый к масштабированию.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <h4>2+</h4>
                <p>Года опыта</p>
              </div>
              <div className="stat-item">
                <h4>15+</h4>
                <p>Проектов</p>
              </div>
              <div className="stat-item">
                <h4>24/7</h4>
                <p>Обучение</p>
              </div>
            </div>
          </div>
          <div className="content-right">
            <div className="about-card glass-card">
              <div className="card-icon">💡</div>
              <h3>Философия</h3>
              <p>«Код временный, хорошая архитектура — навсегда. Стремлюсь к простоте в каждой строке»</p>
            </div>
            <div className="about-card glass-card">
              <div className="card-icon">🎯</div>
              <h3>Фокус</h3>
              <p>Производительность, доступность, отзывчивый дизайн и чистый, поддерживаемый код</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <div className="section-label">— Технологии</div>
          <h2 className="title-gradient">НАВЫКИ</h2>
          <div className="accent-line center"></div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card glass-card">
                <div className="skill-icon">{skill.icon}</div>
                <h4 className="skill-name">{skill.name}</h4>
                <div className="skill-bar-container">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="experience-section">
        <div className="section-container">
          <div className="section-label">— Карьера</div>
          <h2 className="title-gradient">ОПЫТ РАБОТЫ</h2>
          <div className="accent-line center"></div>
          <div className="timeline">
            {experience.map((exp, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card">
                  <div className="timeline-year">{exp.year}</div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company">{exp.company}</div>
                  <p className="timeline-desc">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <div className="section-label">— Портфолио</div>
          <h2 className="title-gradient">ПРОЕКТЫ</h2>
          <div className="accent-line center"></div>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <div key={i} className={`project-card project-card-${project.color}`}>
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-image-overlay"></div>
                </div>
                <div className="project-info">
                  <div className="project-subtitle">{project.subtitle}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="contact-section">
        <div className="contact-bg-glow"></div>
        <div className="section-container">
          <div className="section-label">— Связаться</div>
          <h2 className="title-gradient">КОНТАКТЫ</h2>
          <div className="accent-line center"></div>
          <p className="contact-intro">
            Готовы обсудить проект? Свяжитесь со мной любым удобным способом.
          </p>
          <div className="contact-grid">
            <a href="mailto:levniki1@mail.ru" className="contact-card glass-card">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>levniki1@mail.ru</p>
            </a>
            <a href="tel:+79881250003" className="contact-card glass-card">
              <div className="contact-icon">📱</div>
              <h3>Телефон</h3>
              <p>+7 (988) 125-00-03</p>
            </a>
            <a href="https://t.me/" className="contact-card glass-card" target="_blank" rel="noopener">
              <div className="contact-icon">💬</div>
              <h3>Telegram</h3>
              <p>Написать в Telegram</p>
            </a>
          </div>
          <div className="contact-cta">
            <h3>Давайте создадим что-то удивительное вместе</h3>
            <a href="mailto:levniki1@mail.ru" className="btn-primary btn-large">
              Написать письмо →
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            Portfolio
            <span className="logo-bracket">/&gt;</span>
          </div>
          <p className="footer-copy">© 2024 — Все права защищены</p>
        </div>
      </footer>
    </main>
  );
}
