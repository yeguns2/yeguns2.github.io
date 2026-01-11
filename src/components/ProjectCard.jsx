import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className={`projectCard ${project.mediaClass || ""}`}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <div className="projectMedia">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="mediaFallback" aria-hidden="true" />
      </div>

      <div className="projectBody">
        <div className="projectTitleRow">
          <div>
            <h3>{project.title}</h3>
            <p className="projectMeta">{project.subtitle}</p>
          </div>

          <a className="repoBtn" href={project.repoUrl} target="_blank" rel="noreferrer" aria-label="View repository">
            Repo <ArrowUpRight size={16} />
          </a>
        </div>

        <p className="projectDesc">{project.description}</p>

        {project.kpis?.length ? (
          <div className="kpiRow" aria-label="Key metrics">
            {project.kpis.map((k) => (
              <div key={k.label} className="kpi">
                <div className="kpiLabel">{k.label}</div>
                <div className="kpiValue">{k.value}</div>
              </div>
            ))}
          </div>
        ) : null}

        <ul className="projectList">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className="badgeRow" aria-label="Tech stack tags">
          {project.badges.map((b) => (
            <span key={b} className="badge">
              {b}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
