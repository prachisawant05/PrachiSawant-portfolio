import React, { useState } from "react";
import {
  ArrowUpRight, Download, Mail, MapPin, Menu, X,
  Code2, Database, BarChart3, Cpu, Radio, Bot, ExternalLink,ChevronRight
} from "lucide-react";

const skills = [
  { title: "Data & Analytics", icon: BarChart3, items: ["SQL", "Python", "Microsoft Excel", "Power BI", "Tableau", "Data Cleaning", "Dashboard Development"] },
  { title: "Programming & Tools", icon: Code2, items: ["Python", "JavaScript", "HTML", "CSS", "React", "MongoDB", "PostgreSQL", "Git basics"] },
  { title: "IoT & Embedded", icon: Cpu, items: ["Raspberry Pi", "Arduino", "Sensor Integration", "Microcontrollers", "Motor Control", "ThingSpeak"] },
  { title: "Robotics", icon: Bot, items: ["Hardware–Software Integration", "Obstacle Avoidance", "Camera Streaming", "Prototype Development"] }
];

const projects = [
  {
    number: "01", type: "ROBOTICS · FINAL-YEAR PROJECT",
    title: "Octopus-Inspired Underwater Robotic Device",
    description: "A biomimetic underwater robotic concept for search-and-rescue observation, inspired by an octopus. The prototype brings together a Raspberry Pi Zero 2 W, camera-based observation and servo actuation.",
    tags: ["Raspberry Pi Zero 2 W", "Pi Camera", "Servo Actuation", "Python"],
    outcome: "Designed around a flexible, tentacle-inspired movement concept with a focus on underwater search-and-rescue applications."
  },
  {
    number: "02", type: "IOT · ENVIRONMENTAL MONITORING",
    title: "ClimaSense",
    description: "A Raspberry Pi-based environmental monitoring system that reads temperature, humidity and gas-related sensor data and sends readings to ThingSpeak for remote monitoring.",
    tags: ["Raspberry Pi 4", "Python", "Sensors", "ThingSpeak"],
    outcome: "Connects sensor readings with cloud-based visualization for monitoring."
  },
  {
    number: "03", type: "DATA ANALYTICS · MACHINE LEARNING",
    title: "Customer Churn Prediction",
    description: "Explored customer churn patterns using a banking customer dataset. The workflow included data preparation, K-Means with PCA exploration and a Random Forest classification model.",
    tags: ["Python", "Machine Learning", "Pandas", "Random Forest"],
    outcome: "Built a predictive modelling workflow to identify customers at risk of leaving."
  },
  {
    number: "04", type: "DATA ANALYTICS · POWER BI",
    title: "Hospital Readmission Analysis",
    description: "Developed an interactive Power BI dashboard to explore hospital readmission data and communicate healthcare trends through visual reporting.",
    tags: ["Power BI", "Data Visualization", "Healthcare Analytics"],
    outcome: "Presented healthcare data in an accessible dashboard format."
  },
  {
    number: "05", type: "ROBOTICS · EMBEDDED SYSTEMS",
    title: "Autonomous Obstacle-Avoiding Robot",
    description: "Built an Arduino-based mobile robot using DC motors and motor-driver control to navigate while avoiding obstacles.",
    tags: ["Arduino Uno", "DC Motors", "Motor Driver", "Embedded C / Arduino"],
    outcome: "Applied sensor-based navigation and hardware control concepts."
  },
  {
    number: "06", type: "WEB · DATABASE",
    title: "Library Management System",
    description: "Created a library management application using HTML, CSS, JavaScript and SQL, with PostgreSQL as the database.",
    tags: ["HTML", "CSS", "JavaScript", "SQL", "PostgreSQL"],
    outcome: "Practised front-end development and relational database integration."
  }
];

const experience = [
  {
    role: "Software Intern", company: "Jtronix Technologies",
    period: "08 Dec 2025 – 26 Jan 2026",
    details: [
      "Worked with Java, Spring Boot and MongoDB in a software development environment.",
      "Explored REST APIs using Postman and reviewed API documentation.",
      "Worked on role and permission concepts, user management and fleet-related application features."
    ]
  },
  {
    role: "Web Developer Intern", company: "Elixir Technology and Services",
    period: "Feb – Apr 2026",
    details: [
      "Contributed to a homestay website with guest-facing and admin-facing functionality.",
      "Worked with Python, HTML, CSS, JavaScript, MongoDB, Bootstrap and React.",
      "Explored booking search, ratings, location-based sorting and Google sign-in integration."
    ]
  }
];

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nav = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Experience", "#experience"], ["Contact", "#contact"]];

  return <div className="site-shell">
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">P</span><span>PRACHI <b>SAWANT</b></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse"></span> OPEN TO ENTRY-LEVEL OPPORTUNITIES</div>
          <p className="hero-kicker">HELLO, I'M</p>
          <h1>Prachi<br/><em>Ravindra Sawant.</em></h1>
          <p className="hero-description">Electronics &amp; Telecommunication graduate exploring the intersection of <strong>Data Analytics, IoT and Robotics.</strong> I enjoy turning ideas, data and hardware into practical solutions.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <a className="button button-outline" href="/Prachi-Ravindra-Sawant-Resume.pdf" download>Download resume <Download size={16}/></a>
          </div>
          <div className="hero-meta"><span><MapPin size={15}/> India</span><span className="meta-divider"></span><span>Electronics · Data · Connected Systems</span></div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="floating-card"><span className="floating-icon"><Radio size={19}/></span><div><b>IoT &amp; Robotics</b><small>Hardware + software</small></div></div>
          <div className="gold-dot dot-one"></div><div className="gold-dot dot-two"></div>
        </div>
        <div className="scroll-note"><span></span> SCROLL TO EXPLORE</div>
      </section>

      <section className="about section-wrap section-pad" id="about">
        <SectionHeading eyebrow="01 / ABOUT ME" title="A little about my journey." />
        <div className="about-grid">
          <div className="about-lead"><p className="large-copy">I’m a recent <em>B.Tech graduate in Electronics &amp; Telecommunication Engineering</em>, with a specialization in Data Science.</p><p>My interests span data analytics, connected devices and robotics. Through academic projects and internship experience, I have explored data visualization, machine learning, sensor-based monitoring and software development.</p></div>
          <div className="about-details">
            <div className="detail-row"><span>EDUCATION</span><div><b>B.Tech – Electronics &amp; Telecommunication Engineering</b><small>Data Science specialization · Pillai College of Engineering · CGPA: 8.24</small></div></div>
            <div className="detail-row"><span>FOCUS AREAS</span><div><b>Data Analytics · IoT · Embedded Systems · Robotics</b><small>Interested in AI and computer vision applications for robotics</small></div></div>
            <div className="detail-row"><span>APPROACH</span><div><b>Curious, analytical and hands-on</b><small>Learning by building, testing and improving</small></div></div>
          </div>
        </div>
      </section>

      <section className="skills-section section-pad" id="skills">
        <div className="section-wrap">
          <SectionHeading eyebrow="02 / TOOLKIT" title="Skills & technologies." text="A growing toolkit across analytics, software and connected hardware."/>
          <div className="skills-grid">{skills.map(({title, icon: Icon, items}, i) => <article className="skill-card" key={title}><div className="skill-card-top"><span className="skill-icon"><Icon size={21}/></span><span className="skill-index">0{i+1}</span></div><h3>{title}</h3><div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article>)}</div>
        </div>
      </section>

      <section className="projects section-wrap section-pad" id="projects">
        <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects that bring ideas to life." text="A selection of academic and hands-on projects across analytics, IoT and robotics."/>
        <div className="project-list">{projects.map(project => <article className="project-row" key={project.number}>
          <div className="project-number">{project.number}</div>
          <div className="project-main"><span className="eyebrow">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div>
          <div className="project-outcome"><span>PROJECT HIGHLIGHT</span><p>{project.outcome}</p></div>
        </article>)}</div>
      </section>

      <section className="experience-section section-pad" id="experience">
        <div className="section-wrap">
          <SectionHeading eyebrow="04 / EXPERIENCE" title="Learning through experience." text="Internship experience across software development and web application work."/>
          <div className="timeline">{experience.map((job, i) => <article className="timeline-item" key={job.company}><div className="timeline-marker">{String(i+1).padStart(2,"0")}</div><div className="timeline-content"><div className="timeline-heading"><div><h3>{job.role}</h3><h4>{job.company}</h4></div><span className="period">{job.period}</span></div><ul>{job.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div></article>)}</div>
        </div>
      </section>

      <section className="education section-wrap section-pad">
        <SectionHeading eyebrow="05 / EDUCATION & LEARNING" title="Building a strong foundation."/>
        <div className="education-card"><div className="education-icon"><Database size={23}/></div><div><span className="eyebrow">BACHELOR'S DEGREE</span><h3>Electronics &amp; Telecommunication Engineering</h3><p>Pillai College of Engineering · Data Science specialization</p></div><span className="education-label">GRADUATE</span></div>
        <div className="learning-note"><span className="learning-star">✳</span><p><b>Continuous learning</b><br/>Currently strengthening practical skills in Excel, SQL, Python, data visualization, IoT and embedded systems. Course completions are listed without claiming certificates unless one has been issued.</p></div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="section-wrap contact-inner">
          <span className="eyebrow">06 / CONTACT</span>
          <h2>Have an opportunity<br/>or an idea in mind?</h2>
          <p>I’m interested in entry-level opportunities in Data Analytics, IoT, Embedded Systems and Robotics. I’d be happy to connect.</p>
          <div className="contact-actions">
            <a className="button button-gold" href="mailto:prachisawant55004@gmail.com">Email me <ArrowUpRight size={17}/></a>
            <a className="button button-outline" href="/Prachi-Sawant-Resume.pdf" target="_blank" rel="noreferrer"><Download size={16}/> Download resume</a>
            <a className="button button-outline" href="https://www.linkedin.com/in/prachi-sawant-3b52aa284/" target="_blank" rel="noreferrer"><ArrowUpRight size={20} /> Connect on LinkedIn</a>
          </div>
          <div className="contact-foot"><span><Mail size={15}/> prachisawant55004@gmail.com</span><a href="https://www.linkedin.com/in/prachi-sawant-3b52aa284/" target="_blank" rel="noreferrer">LINKEDIN PROFILE <ExternalLink size={13}/></a></div>
        </div>
      </section>
    </main>

    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">P</span><span>PRACHI <b>SAWANT</b></span></a><span>Designed with purpose · © {new Date().getFullYear()} Prachi Sawant</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>;
}

export default App;
