import type { Metadata } from "next";
import { withBase } from "../base-path";
import { PrintButton } from "../components/print-button";
import { education, experience, graduateCourses, otherWork, site, skills } from "../data";

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
          <p className="lede">
            {site.role}
          </p>
          <p className="intro">
            {site.affiliation} · {site.location}
          </p>
          <p className="intro">{site.summary}</p>
        </div>
        <div className="resumeActions">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
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
            <p>{item.school}</p>
            {item.note ? <p>{item.note}.</p> : null}
          </article>
        ))}
      </section>

      <section className="shell resumeBlock">
        <h2>Graduate coursework in artificial intelligence</h2>
        <ul className="resumeList">
          {graduateCourses.map((course) => (
            <li key={course.title}>
              {course.title} ({course.fa})
            </li>
          ))}
        </ul>
      </section>

      <section className="shell resumeBlock">
        <h2>Appointments</h2>
        {experience.map((item) => (
          <article key={item.title}>
            <header>
              <h3>{item.title}</h3>
              <time>{item.dates}</time>
            </header>
            <p className="company">
              {item.company ? `${item.company} · ${item.location}` : item.location}
            </p>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="shell resumeBlock">
        <h2>Selected research and projects</h2>
        <ul className="resumeList">
          <li>Hierarchical network traffic classification — M.Sc. thesis: DistilGPT-2 router–expert pipeline on MERLOT packet text; coarse-type routing versus fine-grained identification of encrypted and malicious traffic.</li>
          <li>Document knowledge management — conversion of unstructured documents into structured summaries, keywords, and question–answer pairs.</li>
          <li>Ingredient-first recipe ranking — a deployed recommendation system based on pantry coverage and utilization.</li>
          <li>Applied text-to-speech — experimental evaluation and tooling for a production synthesis pipeline.</li>
          <li>Smart irrigation — B.Sc. embedded prototype with soil-moisture control.</li>
          <li>Document extraction, topic grouping, and embedding evaluation for retrieval-augmented generation.</li>
          <li>Smartphone price comparison and e-commerce catalog extraction.</li>
        </ul>
        <p className="resumeNote">
          Coursework: {otherWork.map((item) => item.title).join("; ")}.
        </p>
      </section>

      <section className="shell resumeBlock">
        <h2>Methods and tools</h2>
        {skills.map((group) => (
          <p key={group.title}>
            <strong>{group.title}.</strong> {group.items.join(", ")}.
          </p>
        ))}
      </section>
    </main>
  );
}
