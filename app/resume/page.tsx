import type { Metadata } from "next";
import { withBase } from "../base-path";
import { PrintButton } from "../components/print-button";
import {
  caseStudies,
  certificates,
  education,
  experience,
  graduateCourses,
  languages,
  otherWork,
  site,
  skills,
} from "../data";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: `Curriculum vitae of ${site.name}, ${site.role} at ${site.affiliation}.`,
};

export default function ResumePage() {
  return (
    <main id="main" className="resume">
      <div className="shell resumeHead">
        <div>
          <p className="eyebrow">Curriculum vitae</p>
          <h1>{site.name}</h1>
          <p className="lede">{site.role}</p>
          <p className="intro">
            {site.affiliation} · {site.location}
          </p>
          <p className="intro">{site.summary}</p>
        </div>
        <div className="resumeActions">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.phone}</span>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={withBase("/Kimiya-Jafarpor-CV.pdf")} target="_blank" rel="noreferrer">
            Download PDF
          </a>
          <PrintButton />
        </div>
      </div>

      <section className="shell resumeBlock">
        <h2>Education</h2>
        {education.map((item) => (
          <article key={item.title}>
            <header>
              <h3>{item.title}</h3>
              <time>{item.dates}</time>
            </header>
            <p>
              {item.school}
              {item.location ? ` · ${item.location}` : ""}
            </p>
            {item.note ? <p>{item.note}</p> : null}
          </article>
        ))}
      </section>

      <section className="shell resumeBlock">
        <h2>Graduate coursework in artificial intelligence</h2>
        <ul className="resumeList">
          {graduateCourses.map((course) => (
            <li key={course.title}>{course.title}</li>
          ))}
        </ul>
      </section>

      <section className="shell resumeBlock">
        <h2>Experience</h2>
        {experience.map((item) => (
          <article key={item.title}>
            <header>
              <h3>{item.title}</h3>
              <time>{item.dates}</time>
            </header>
            <p className="company">
              {item.company ? `${item.company} · ${item.location}` : item.location}
            </p>
            {item.bullets ? (
              <ul className="resumeList">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : (
              <p>{item.description}</p>
            )}
          </article>
        ))}
      </section>

      <section className="shell resumeBlock">
        <h2>Projects</h2>
        {caseStudies.map((project) => (
          <article key={project.number}>
            <header>
              <h3>{project.title}</h3>
              <small>{project.type}</small>
            </header>
            {project.problem && project.approach && project.outcome ? (
              <p>
                {project.problem} {project.approach} {project.outcome}
              </p>
            ) : (
              <p>{project.blurb}</p>
            )}
            {project.liveUrl || project.repoUrl ? (
              <p>
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live
                  </a>
                ) : null}
                {project.liveUrl && project.repoUrl ? " · " : null}
                {project.repoUrl ? (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Repository
                  </a>
                ) : null}
              </p>
            ) : null}
          </article>
        ))}
        <p className="resumeNote">
          Course projects: {otherWork.map((item) => item.title).join("; ")}.
        </p>
      </section>

      <section className="shell resumeBlock">
        <h2>Languages</h2>
        <ul className="resumeList">
          {languages.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="shell resumeBlock">
        <h2>Certificates</h2>
        <ul className="resumeList">
          {certificates.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="shell resumeBlock">
        <h2>Skills</h2>
        {skills.map((group) => (
          <p key={group.title}>
            <strong>{group.title}.</strong> {group.items.join(", ")}.
          </p>
        ))}
      </section>
    </main>
  );
}
