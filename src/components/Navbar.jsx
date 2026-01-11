import React from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const nav = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "team", label: "Team Projects" },
];


function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  return (
    <div className="navWrap">
      <motion.nav
        className="nav"
        initial={{ y: -14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        aria-label="Primary"
      >
        <button className="brand" onClick={() => scrollToId("top")} aria-label="Go to top">
          Yegun Shim
        </button>

        <div className="navLinks" aria-label="Sections">
          {nav.map((x) => (
            <button key={x.id} className="navLink" onClick={() => scrollToId(x.id)}>
              {x.label}
            </button>
          ))}
        </div>

        <div className="navIcons" aria-label="External links">
          <a className="iconBtn" href="mailto:yeguns2@illinois.edu" aria-label="Email">
            <Mail size={18} />
          </a>
          <a
            className="iconBtn"
            href="https://www.linkedin.com/in/yegun-shim-0a659433b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a className="iconBtn" href="https://github.com/yeguns2" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a className="primaryBtn" href="/assets/Yegun_Shim_Resume.pdf" target="_blank" rel="noreferrer" aria-label="Resume">
            <Download size={18} />
            Resume
          </a>
        </div>
      </motion.nav>
    </div>
  );
}
