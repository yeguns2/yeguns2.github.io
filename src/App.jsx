import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Section from "./components/Section.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Footer from "./components/Footer.jsx";
import { projects } from "./data/projects.js";
import { experience } from "./data/experience.js";
import { education } from "./data/education.js";


const skills = [
  "SystemVerilog",
  "AXI4-Lite",
  "AXI4-Full",
  "MicroBlaze SoC",
  "DDR + BRAM buffering",
  "C/C++ (bare-metal)",
  "FPGA acceleration",
  "CNN inference",
  "Vivado",
  "HW/SW co-design",
];

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />

      <main className="main">
        <Section
          id="projects"
          title="Featured Projects"
          subtitle="Individual work focused on real hardware, measurable performance, and clean system integration."
        >
          <div className="projectGrid">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section 
          id="team" 
          title="Team Projects" 
          //subtitle="Coming soon—collaborative projects with clearly scoped personal contributions."
        >
          <div className="emptyCard">
            <div className="emptyTitle">Coming soon</div>
            <p className="emptyText">
              
            </p>
          </div>
        </Section>

        <Section 
          id="skills" 
          title="Skills" 
          //subtitle="A quick snapshot of the domains and tools I’ve been building with."
        >
          <div className="skillGrid" role="list">
            {skills.map((s) => (
              <span key={s} className="skillPill" role="listitem">
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          title="Experience"
          //subtitle="Quick timeline. Click for details (resume has full descriptions)."
        >
          <div className="expTimeline">
            {experience.map((x) => (
              <div key={`${x.role}-${x.org}-${x.dates}`} className="expItem">
                <div className="expDot" aria-hidden="true" />
                <div className="expCard">
                  <div className="expTop">
                    <div>
                      <div className="expRole">{x.role}</div>
                      <div className="expOrg">{x.org}</div>
                    </div>
                    <div className="expDates">{x.dates}</div>
                  </div>

                  <div className="expTags">
                    {x.tags.map((t) => (
                      <span key={t} className="badge">{t}</span>
                    ))}
                  </div>

                  <details className="expDetails">
                    <summary className="expSummary">Details</summary>
                    <ul className="expBullets">
                      {x.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </Section>


        <Section
          id="education"
          title="Education"
          //subtitle="Academic background."
        >
          <div className="timelineGrid">
            {education.map((e) => (
              <div key={`${e.school}-${e.degree}`} className="timelineCard">
                <div className="timelineHeader">
                  <div>
                    <div className="timelineRole">{e.school}</div>
                    <div className="timelineOrg">{e.degree}</div>
                  </div>
                  <div className="timelineDates">{e.dates}</div>
                </div>

                <ul className="timelineList">
                  {e.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

      </main>

      <Footer />
    </div>
  );
}
